const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
}

store.cats.forEach((cat) => pets.cats.enqueue(cat))
store.dogs.forEach((dog) => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  getCat() {
    let result = {}
    result.cat = pets.cats.show()
    if (!result.cat) {
      store.cats.forEach((cat) => pets.cats.enqueue(cat))
      result.cat = pets.cats.show()
    }
    return result
  },

  getDog() {
    let result = {}
    result.dog = pets.dogs.show()
    if (!result.dog) {
      store.dogs.forEach((dog) => pets.dogs.enqueue(dog))
      result.dog = pets.dogs.show()
    }
    return result
  },

  dequeue(type) {
    if (type === 'cat') {
      pets.cats.dequeue()
    }
    if (type === 'dog') {
      pets.dogs.dequeue()
    }
  },
}
