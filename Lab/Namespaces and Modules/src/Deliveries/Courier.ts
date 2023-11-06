/// <reference path="food-and-beverages.ts" />

export class Courier implements FoodAndBeverages.Delivery {
  protected placeToVisit: { customerName: string; visited: boolean }[];

  constructor(placeToVisit: { customerName: string; visited: boolean }[]) {
    this.placeToVisit = placeToVisit;
  }

  newCustomer(customerName: string, visited: boolean = false): string {
    const existingCustomer = this.placeToVisit.find(
      (customer) => customer.customerName === customerName
    );

    if (existingCustomer) {
      throw new Error(`${customerName} is already a customer of yours!`);
    }
    this.placeToVisit.push({ customerName, visited });
    return `${customerName} just became your client.`;
  }

  visitCustomer(customerName: string): string {
    const customer = this.placeToVisit.find(
      (customer) => customer.customerName === customerName
    );
    if (!customer) {
      throw new Error(`${customerName} is not your customer.`);
    }

    customer.visited = true;
    return `${customerName} -> ${customer.visited}`;
  }

  showCustomers(): string {
    let result = "";
    this.placeToVisit.forEach((customer) => {
      result += `${customer.customerName} -> ${customer.visited}\n`;
    });

    return result;
  }
}
