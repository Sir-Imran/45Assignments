// Define a function to creat a car object

function creat_car(manufecturer, model, ... options){

    let car ={
        manufecturer: manufecturer,
        model: model
    };

    options.forEach(option =>{
 
        let [key, value] = option.split(":");

        car[key.trim()] =value.trim()
    });

    return car;
}

let my_car = creat_car("Toyota", "Corrola", "colour: Blak", "sunroof: true");
console.log(my_car);