const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

// step 1:
let startingLocation;
if (emblemClue1 === "Eagle"){
    startingLocation = 'Forum'
}
else if (emblemClue1 === 'Lion'){
    startingLocation = 'Colosseum'
}
else {
    startingLocation= 'Villa'
}

// step 2:
if (emblemClue2 === 'Laurel' && startingLocation === 'Forum'){
    startingLocation += ' of Augustus';
}
else if (emblemClue2 === 'Grapes' || startingLocation === 'Villa'){
    startingLocation += ' of Pompey';
}

// Step 3:
switch (emblemClue3) {
    case 7: startingLocation += 'North';
    break;
    case 3: startingLocation += 'South';
    break;
    case 9: startingLocation += 'East';
    break;
    case 4: startingLocation += 'West';
    break;
    default: console.log('No valid entry');
}

// question:
// it is important to know the difference between == and === because 
// == compares the values but not the data types 
// === compares both values and data types 