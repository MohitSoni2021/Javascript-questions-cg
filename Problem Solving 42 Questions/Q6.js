function checkLogin(username, password) {
    const predefinedUsername = "admin";
    const predefinedPassword = "1234";

    if (username === predefinedUsername && password === predefinedPassword) {
        console.log("Login successful.");
    } else {
        console.log("Login failed.");
    }
}


checkLogin("admin", "1234");
checkLogin("user", "1234");
checkLogin("admin", "wrong");
