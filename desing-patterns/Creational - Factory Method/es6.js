'use strict';

class Productt {
  constructor() {
  }
}

class ConcreteProduct extends Productt {
  constructor() {
    super()
    console.log('ConcreteProduct created')
  }
}

class Creator {
  constructor() {
  }

  FactoryMethod() {

  }

  AnOperation() {
    console.log("AnOperation()")
    this.product = this.FactoryMethod()
    console.log(this.product instanceof ConcreteProduct)
  }
}

class ConcreteCreator extends Creator {

  constructor() {
    super()
    console.log('ConcreteCreator created')
  }

  FactoryMethod() {
    return new ConcreteProduct();
  }
}

function run() {
  var factory = new ConcreteCreator()
  factory.AnOperation()
}

run();