var userNames = ["Ali", "Hamza", "Admin", "Kamran", "Noman"];
userNames.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
