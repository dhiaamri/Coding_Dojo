class Ninja{
    constructor(name,){
        this.name=name;
        this.health=90
        this.speed=3
        this.strength=3
    }
    sayName(){
     console.log(this.name);
     return this
    }
    showStats(){
        console.log(`Strength : ${this.strength} | Speed : ${this.speed} | health : ${this.health} | `);
        return this
    }
    drinkSake(){
        this.health+=10
        return this
    }
}

const ninja = new Ninja ("dhia")

ninja.sayName().showStats().drinkSake().showStats();
