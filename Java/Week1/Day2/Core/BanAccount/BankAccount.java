public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    public BankAccount(double checkingBalance, double savingsBalance) {
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;

        accounts++;
        totalMoney += (checkingBalance + savingsBalance);
    }


    public double getCheckingBalance() {
        return checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public static int getAccounts() {
        return accounts;
    }

    public static double getTotalMoney() {
        return totalMoney;
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account

    public void deposit(double savings,double checking){
        this.savingsBalance+=savings;
        this.checkingBalance+=checking;
        totalMoney+=(savings+checking);
       }

    // withdraw 
    // - users should be able to withdraw money from their checking or savings account
    public void withdraw(double savings,double checking){
        boolean ok=true;
        if(this.savingsBalance<savings){
        System.out.println("insufficient savings");
        ok=false;
        }
        else{this.savingsBalance-=savings;}
        if(this.checkingBalance<checking){
        System.out.println("insufficient checking");
        ok=false;
        }
        else{this.checkingBalance-=checking;}
        if(ok){

        totalMoney-=(savings+checking);
        }
       }
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    // - display total balance for checking and savings of a particular bank account
}
