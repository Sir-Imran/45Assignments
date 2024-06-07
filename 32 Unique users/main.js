var current_users = ["usman", "ali", "Khalid", "Noman"];
var new_users = ["Hamza", "Sidra", "Iqra", "Saba", "Ali", "usman"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already used"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
