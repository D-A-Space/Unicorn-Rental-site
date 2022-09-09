const registerationForm = document.getElementById("registerationForm");
const loginForm = document.getElementById("loginForm");

let allUsers = [];

class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = btoa(password);
	}
}
