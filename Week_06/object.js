
class Dog {
    constructor(damage){
        this.damage = damage
    }
    attack(obj){
        obj.hurt(this.damage)
    }
}

class Human{
    constructor(life){
        this.life = life
    }
    hurt(damage){
        this.life -= damage
    }
}

let dog = new Dog(3)
let human = new Human(100)

dog.attack(human)
dog.attack(human)
dog.attack(human)
console.log(human.life)
