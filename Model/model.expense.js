class Expense {
    constructor(amount, year, revenue, balance, status, overhead, benefit, compensation) {
        this.ExpenseAmount = amount;
        this.Status = status;
        this.Year = year;
        this.Revenue = revenue;
        this.BalanceAmount = balance;
        this.OverheadAmount = overhead;
        this.BenefitAmount = benefit;
        this.CompensationAmount = compensation;
    }
}

export default Expense;
