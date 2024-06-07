// Define a function with a rest perametter that accept items with the different 
function makeSandWich(...items: string[]){
    console.log("\nmaking sandWich with the following items\n");
    items.forEach(singleitem => console.log(singleitem));

    console.log("\nNow Enjoy SandiWich\n");
}

makeSandWich("Chiken", "Cheez", "Mayo", "Egg");

makeSandWich("Bread", "Butter");

makeSandWich("Bread", "Egg", "Cheez", "Chiken", "Botti");