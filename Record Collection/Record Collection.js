
function updateRecords(id, prop, value) {
    //First checks if prop is equal to tracks AND if value isn’t a blank string. If both tests pass, value is pushed into the tracks array.
    if (prop === "tracks" && value !== "") {
        /*If that first check doesn’t pass, it next checks only if value isn’t a blank string. 
        If that test passes, either a new key (prop) and value (value) are added to the object, 
        or an existing key is updated if the prop already exists.*/
     if(collection[id][prop]) {
      collection[id][prop].push(value);
     }
     else {
      collection[id][prop]=[value];
     }
    } else if (value !== "") {
      collection[id][prop] = value;
      //If both these checks fail (meaning value must be an empty string), then the key (prop) is removed from the object.
    } else {
      delete collection[id][prop];
    }
  
    return collection;
  }