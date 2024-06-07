function make_shirt (size: String = "Large", printMessage: String = "I love typescript"){
console.log(`Creating a ${size} shirt with the ${printMessage} print on the shirt`)
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love jawascript");