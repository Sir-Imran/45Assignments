let guestList = [" Hamza", "Khalid", "Ali", "Sidra"];
let dontCome = guestList [0];
console.log(dontCome, "nhi a skta");
guestList.splice(0,0, "Amir");
guestList.forEach(guest => console.log(`Salam ${guest}, Would you like to dinner with us?`));