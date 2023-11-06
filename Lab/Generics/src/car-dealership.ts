interface Dealership<T> {
  dealershipName: T;
  soldCars: number;
}

interface Actions<T> {
  sellCar(dealerId: T, model: T): void;
}

interface SoldModels<T> {
    [dealerID: string]: T;
}

class CarDealerShip<T> implements Dealership<T>, Actions<T> {
  dealershipName: T;
  soldCars: number;
  modelsSold: SoldModels<T>;

  constructor(dealershipName: T) {
    this.dealershipName = dealershipName;
    this.soldCars = 0;
    this.modelsSold = {};
  }

  sellCar(dealerId: T, model: T): void {
    this.modelsSold[dealerId as string] = model;
    this.soldCars++;
  }

  showDetails(): string {
    let details = `${this.dealershipName}:`;

    for (const dealerId in this.modelsSold) {
      if (this.modelsSold.hasOwnProperty(dealerId)) {

        const model = this.modelsSold[dealerId];
        details += `\n${dealerId} sold ${model}`;
      }
    }

    return details;
  }
}

let dealership = new CarDealerShip('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());

