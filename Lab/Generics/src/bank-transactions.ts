abstract class CreateAccount<BankName, BankId> {
  bankName: BankName;
  bankId: BankId;

  constructor(bankName: BankName, bankId: BankId) {
    this.bankName = bankName;
    this.bankId = bankId;
  }

  abstract showDetails(): string;
}

class PersonalAccount<BankName, BankId> extends CreateAccount<
  BankName,
  BankId
> {
  readonly ownerName: string;
  money: number = 0;
  recentTransactions: Record<string, number>;

  constructor(bankName: BankName, bankId: BankId, ownerName: string) {
    super(bankName, bankId);
    this.ownerName = ownerName;
    this.money = 0;
    this.recentTransactions = {};
  }

  deposit(amount: number): void {
    this.money += amount;
  }

  expense(amount: number, expenseType: string): void {
    if (this.money >= amount) {
      if (this.recentTransactions[expenseType]) {
        this.recentTransactions[expenseType] += amount;
      } else {
        this.recentTransactions[expenseType] = amount;
      }
      this.money -= amount;
    } else {
      throw new Error(`You can't make ${expenseType} transaction`);
    }
  }

  showDetails(): string {
    let totalMoneySpentOnExpenses = Object.values(
      this.recentTransactions
    ).reduce((total, amount) => total + amount, 0);
    return `Bank name: ${this.bankName}\nBank ID: ${this.bankId}\nOwner name: ${this.ownerName}\nMoney: ${this.money}\nMoney spent: ${totalMoneySpentOnExpenses}`;
  }
}

let account = new PersonalAccount("DSK", 101240, "Ivan Ivanov");

account.deposit(1000);
account.deposit(1000);
account.expense(700, "Buy new phone");
account.expense(400, "Book a vacation");
account.expense(400, "Book a vacation");
account.expense(100, "Buy food");
console.log(account.showDetails());

let account1 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');

account1.deposit(10000);
account1.deposit(7000);
account1.expense(12000, 'Buy a new car');
account1.expense(200, 'Go to a fancy restaurant');
account1.expense(100, 'Go to a bar');
account1.expense(30, 'Go to the movies');
console.log(account1.showDetails());

