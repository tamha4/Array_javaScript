// just display bob,mavis,morty, and larry
//make larry format red color.
var array = document.body.querySelector(".array");
var warriors = [
  {
    name: "Bob",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Jerry",
    damage: 1,
    health: 12,
    warrior: true
  },
  {
    name: "Mavis",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Morty",
    damage: 4,
    health: 10,
    warrior: true
  },
  {
    name: "Shorty",
    damage: 10,
    health: 3,
    warrior: false
  },
  {
    name: "Porty",
    damage: 1,
    health: 14,
    warrior: true
  },
  {
    name: "Perry",
    damage: 2,
    health: 9,
    warrior: true
  },
  {
    name: "Larry",
    damage: 2,
    health: 17,
    warrior: false
  }
];
for (var i = 0; i < warriors.length; i++) {
  if (warriors[i].health >= 10) {
    if (warriors[i].damage >= 2) {
      var eleName = document.createElement("h1");
      eleName.textContent = `Name: ${warriors[i].name}`;
      var eleDamage = document.createElement("h2");
      eleDamage.textContent = `Damage: ${warriors[i].damage}`;
      var eleHealth = document.createElement("h2");
      eleHealth.textContent = `Health: ${warriors[i].health}`;
      array.appendChild(eleName);
      array.appendChild(eleDamage);
      array.appendChild(eleHealth);
    }
  }
}