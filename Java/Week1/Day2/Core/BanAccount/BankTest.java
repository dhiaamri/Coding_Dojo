public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount(1000, 500);
        BankAccount account2 = new BankAccount(2000, 1000);
        BankAccount account3 = new BankAccount(3000, 800);

        System.out.println("Account 1 Checking Balance: " + account1.getCheckingBalance());
        System.out.println("Account 2 Savings Balance: " + account2.getSavingsBalance());


        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        account1.deposit(350,200);
        System.out.println("Account 1 Checking Balance: " + account1.getCheckingBalance());
        System.out.println("Account 1 Savings Balance: " + account1.getSavingsBalance());

        // - each deposit should increase the amount of totalMoney
        System.out.println("Total Money Across All Accounts after deposit: " + BankAccount.getTotalMoney());

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        account1.withdraw(600,1300);
        System.out.println("Account 1 Checking Balance: " + account1.getCheckingBalance());
        System.out.println("Account 1 Savings Balance: " + account1.getSavingsBalance());

        // Static Test (print the number of bank accounts and the totalMoney)

        
        System.out.println("Total Money Across All Accounts: " + BankAccount.getTotalMoney());
        System.out.println("Total Number of Accounts: " + BankAccount.getAccounts());
    

    }
}
