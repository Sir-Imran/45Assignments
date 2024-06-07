let current_users = ["usman", "ali", "Khalid", "Noman"]
let new_users = ["Hamza", "Sidra", "Iqra", "Saba", "Ali", "usman"]
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already used`)
    }else{
        console.log(`this username ${new_one_user} is available`)
    }

    })