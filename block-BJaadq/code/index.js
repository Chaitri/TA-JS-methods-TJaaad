// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  let count = 0;
  got.houses.forEach(houseObj => {
    count += houseObj.people.length;
  })
  return count;
}

function peopleByHouses() {
  let peopleByHouse = {};
  got.houses.forEach(houseObj => {
    peopleByHouse[houseObj.name] = houseObj.people.length;
  })
  return peopleByHouse;
}

function everyone() {
  let everyone = [];
  got.houses.forEach(houseObj => {
    houseObj.people.forEach( person => {
      everyone.push(person.name);
    })
  })
  return everyone;
}

function nameWithS() {
  let allNamesWithS = [];
  got.houses.forEach(houseObj => {
    houseObj.people.forEach( person => {
      if(person.name.toLowerCase().includes('s')) {
        allNamesWithS.push(person.name);
      }
    })
  })
  return allNamesWithS;
}

function nameWithA() {
  let allNamesWithA = [];
  got.houses.forEach(houseObj => {
    houseObj.people.forEach( person => {
      if(person.name.toLowerCase().includes('a')) {
        allNamesWithA.push(person.name);
      }
    })
  })
  return allNamesWithA;
}

function surnameWithS() {
  let allSurnamesWithS = [];
  got.houses.forEach(houseObj => {
    houseObj.people.forEach( person => {
      if(person.name.split(' ')[1].startsWith('S')) {
        allSurnamesWithS.push(person.name);
      }
    })
  })
  return allSurnamesWithS;
}

function surnameWithA() {
  let allSurnamesWithA = [];
  got.houses.forEach(houseObj => {
    houseObj.people.forEach( person => {
      if(person.name.split(' ')[1].startsWith('A')) {
        allSurnamesWithA.push(person.name);
      }
    })
  })
  return allSurnamesWithA;
}

function peopleNameOfAllHouses() {
  let peopleNameByHouse = {};
  got.houses.forEach(houseObj => {
    let peopleByHouse = [];
    for(let person of houseObj.people) {
      peopleByHouse.push(person.name);
    }
    peopleNameByHouse[houseObj.name] = peopleByHouse;
  })
  return peopleNameByHouse;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
