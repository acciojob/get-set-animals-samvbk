//complete this code
let species = "animal";
class Animal {
	constructor(species){
		this.species = species;
	}

	get species{
		return this.species;
	}

	makeSound(species){
		return `The ${species} makes a sound`;
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
		return "woof";
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		return "purr";
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
