
function update(obj, prop, value) {
    obj[prop] = value;
    return obj;
  }
  let black = { name: 'shubham', age: 21 };
  let newPerson = update(black, 'age', 31);
  console.log(update);  