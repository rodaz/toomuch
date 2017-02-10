export class Cost {

  costId: number;
  costName: string;
  planQty: number;
  factQty: number;
  price: number;
  planTotal: number;
  factTotal: number;
  diff: number;


  constructor(costName: string, planQty: number, factQty: number, price: number, planTotal: number,
              factTotal: number, diff: number, costId: number = 0) {
    this.costName = costName;
    this.planQty = planQty;
    this.factQty = factQty;
    this.price = price;
    this.planTotal = planTotal;
    this.factTotal = factTotal;
    this.diff = diff;
    this.costId = costId;
  }
}
