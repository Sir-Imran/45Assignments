var guestList = [" Hamza", "Khalid", "Ali", "Sidra"];
var dontCome = guestList[0];
console.log(dontCome, "nhi a skta");
guestList.splice(0, 0, "Amir");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would you like to dinner with us?")); });
