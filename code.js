// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if (value) {
    if (Array.isArray(collectionCopy[id][prop])){
      collectionCopy[id][prop].push(value);
    } else if (prop == 'tracks') {
      collectionCopy[id][prop] = [value];
    } else {
      collectionCopy[id][prop] = value;
    }
  } else {
    delete collectionCopy[id][prop]
  }
  return collectionCopy;
}
