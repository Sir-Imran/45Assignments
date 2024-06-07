function show_magicians(magicians: string[]){
magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`);
}

let magician_names = ["Harry poter", "Hamza", "Usman"]

let copy_magician_names = magician_names.slice();

let copy_great_magicians = make_great(copy_magician_names);

console.log("orignal array")
show_magicians(magician_names);

console.log("copied array")
show_magicians(copy_great_magicians);