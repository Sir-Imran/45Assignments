let guestList = ["Hamza", "Ali", "Khalid", "Sidra"];
let dontCome = guestList[0];
console.log(dontCome, "Nhi a skta hy");
guestList.splice(0, 1, "Amir");
console.log("Good News ! we have found a bigger table for dinner.");
guestList.unshift("Ali");
guestList.push("Zain");
let middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Usman");
console.log("UpdatedList of our Guests");
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with us?`));
console.log("Unfortunately, the bigger table is not available therefore I can invite only tw people for dinnder");
while(guestList.length > 2){
    let removedguest = guestList.pop();
    console.log(`Sorry, ${removedguest} I cant invite you`);
}
console.log("Invitation only for two guests");
guestList.forEach(lasttwo => console.log(`Luckiliy ${lasttwo}, You are still invited for dinner`));
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);