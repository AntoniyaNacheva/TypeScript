class Car {
  private _brand: string;
  private _model: string;
  private _horsepower: number;

  constructor(brand: string, model: string, horsepower: number) {
    this._brand = brand;
    this._model = model;
    this._horsepower = horsepower;
  }

  public get brand(): string {
    return this._brand;
  }

  public set brand(publicBrand: string) {
    this._brand = publicBrand;
  }

  public get model(): string {
    return this._model;
  }

  public set model(publicModel: string) {
    this._model = publicModel;
  }

  public get horsepower(): number {
    return this._horsepower;
  }

  public set horsepower(publicHorsepower: number) {
    this._horsepower = publicHorsepower;
  }
}

const car = new Car("Chevrolet", "Impala", 390);
console.log(`The car is: ${car.brand} ${car.model} - ${car.horsepower} HP.`);
