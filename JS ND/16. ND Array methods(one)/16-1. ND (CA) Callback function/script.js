function alertName(text) {
  alert(text);
}

function consoleName(text) {
  console.log(text);
}

function coreFunction(name, callback) {
  const toUpperCase =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  callback(toUpperCase);
}

coreFunction("Kestutis", consoleName);
coreFunction("Kestutis", alertName);
