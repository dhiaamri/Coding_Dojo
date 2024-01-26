public class Gorilla extends Mammal {
    public Gorilla() {
        // You can call the constructor of the superclass using super()
        super();
    }

    public void throwSomething(){
        System.out.printf("Careful! the Gorilla just threw a banana at you!\n");
        setEnergy(getEnergy()-5);

    }

    public void eatBananas(){
        setEnergy(getEnergy()+10);
        System.out.printf("Yummyy!\n");


    }
    public void climb(){
        setEnergy(getEnergy()-10);
        System.out.printf("The gorilla is at the Top!\n");
        }
    
    }