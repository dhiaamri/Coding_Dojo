public class Mammal{
    private int energy;

    public Mammal(){
        this.energy=100;
    }

    public void displayEnergy(){
        System.out.printf("This mammal has "+energy+" energy .");
    }

     public int getEnergy() {
        return energy;
    }

    public void setEnergy(int energy) {
        this.energy = energy;
    }
}