class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

class Team extends Object {
    constructor(object) {
      super();
      this.members = new Set();
      Object.assign(this, object);
    }
  
    [Symbol.iterator]() {
        // changed `entries` to `values`
        const values = Object.values(this);
        let index = -1;

        return {
            next() {
                index++;

                return {
                    // changed `entries` to `values`
                    value: values[index],
                    // changed `entries` to `values`
                    done: index >= values.length
                }
            }
        }
     }

    add(person) {
      const isPersonInTeam = () => this.members.has(person);
      if (!isPersonInTeam()) {
        this.members.add(person);
      } else {
        throw new Error("Person is already in the team");
      }
    }

    addAll(...persons) {
      for (const person of persons) {
        this.members.add(person);
      }
    } 
}

/*
const charac1 = new Character("Bowman1", "Bowman", 50, 1, 25, 25);
const charac2 = new Character("Bowman2", "Bowman", 50, 1, 25, 25);
const charac3 = new Character("Bowman3", "Bowman", 50, 1, 25, 25);
const team1 = new Team();
team1.addAll(charac1, charac2, charac3);
console.log(team1);

for (let t of team1) {
  console.log(t)
}
*/