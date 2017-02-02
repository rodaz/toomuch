import {Component, OnInit} from '@angular/core';
import { CostService } from "../services/costService";
import { Art } from "../model/art";

@Component({
  selector: 'sel',
  templateUrl: './app/admin/selvin.component.html',
  styleUrls: ['./app/admin/selvin.component.css']
})
export class SelvinComponent implements OnInit {
  displayDialog: boolean;

  art: Art = new Art();

  selectedArt: Art;

  newArt: boolean;

  arts: Art[];

  constructor(private costService: CostService) { }

  ngOnInit() {
    this.costService.getArts().subscribe(arts => {
      let arr: Art[] = [];
      for (let a=0;a<arts.length;a++)
        arr.push(new Art(arts[a].article_id, arts[a].a_name, arts[a].rank));
      this.arts = arr;
    });
  }

  showDialogToAdd() {
    this.newArt = true;
    this.art = new Art();
    this.displayDialog = true;
  }

  save() {
    if(this.newArt) {
      this.arts.push(this.art);
      this.costService.addArt(this.art)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
    }
    else {
      this.arts[this.findSelectedCarIndex()] = this.art;


      this.costService.updArt(this.art)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
    }
    this.art = null;
    this.displayDialog = false;
  }

  delete() {
    this.arts.splice(this.findSelectedCarIndex(), 1);
    this.costService.delArt(this.art)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.art = null;
    this.displayDialog = false;
  }

  onRowSelect(event: any) {
    this.newArt = false;
    this.art = this.cloneArt(event.data);
    this.displayDialog = true;
  }

  cloneArt(a: Art): Art {
    let art = new Art();
    for(let prop in a) {
      art[prop] = a[prop];
    }
    return art;
  }

  findSelectedCarIndex(): number {
    return this.arts.indexOf(this.selectedArt);
  }

}
