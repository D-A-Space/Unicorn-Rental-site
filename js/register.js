const register = document.getElementById("register");
const registrationForm = document.getElementById("registrationForm");
const registrationFormModal = document.getElementById("registrationFormModal");
const loginForm = document.getElementById("loginForm");
const loginFormModal = document.getElementById("loginFormModal");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
// var myModal = new bootstrap.Modal(document.getElementById('myModal'), options);

let allUsers = [];

class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = btoa(password);
	}
}

// register function
registrationForm.addEventListener("submit", (e) => {
	e.preventDefault();

	let name = e.target.name.value;
	let email = e.target.email.value;
	let password = e.target.password.value;
	let passwordConfirm = e.target.passwordConfirm.value;

	// check if email already registered
	let registerVerify = true;

	allUsers.forEach((user) => {
		if (email == user.email) {
			registerVerify = false;
		}
	});

	// if verified then register
	if (registerVerify) {
		if (password == passwordConfirm) {
			// registerBtn.addEventListener("click", () => {
			//
			// });
			allUsers.push(new User(name, email, password));
			registrationFormModal.style.display = "none";
			location.reload();
		} else {
			alert("The password does not match");
		}
	} else {
		alert("This email is already registered");
	}

	// save all users to local storage
	saveToLocalStorage();
	// set logged in user to storage
	let lastRegistered = allUsers[allUsers.length - 1];
	let loggedIn = JSON.stringify(lastRegistered);
	localStorage.setItem("Logged In", loggedIn);

	// reset form
	document.forms[0].reset();

	getUser();
});

// login function
loginForm.addEventListener("submit", (e) => {
	e.preventDefault();

	let emailLogin = e.target.emailLogin.value;
	let passwordLogin = e.target.passwordLogin.value;

	// verify if the user is registered

	let loginVerify = false;
	let correctUser;

	allUsers.forEach((user) => {
		if (passwordLogin == atob(user.password) && emailLogin == user.email) {
			loginVerify = true;
			correctUser = user;
		}
	});

	// if verified log them in
	if (loginVerify) {
		console.log(correctUser);
		localStorage.setItem("Logged In", JSON.stringify(correctUser));

		getUser();

		loginFormModal.style.display = "none";
		location.reload();
	} else {
		alert("Wrong Email or Password");
	}

	document.forms[1].reset();
});

function getUser() {
	let loggedInJson = localStorage.getItem("Logged In");
	let loggedIn = JSON.parse(loggedInJson);

	if (loggedIn != null) {
		let p = document.createElement("p");
		p.innerHTML = `Hello ${loggedIn.name}`;
		register.after(p);

		register.innerHTML = "Logout";
		register.setAttribute("href", "");
		register.addEventListener("click", (e) => {
			e.preventDefault();

			localStorage.removeItem("Logged In");
			p.style.display = "none";
			register.innerHTML = "Register";
			register.setAttribute("href", "#registrationFormModal");
		});
	}
}

function saveToLocalStorage() {
	localStorage.setItem("users", JSON.stringify(allUsers));
}

function getFromLocal() {
	let jsonArr = localStorage.getItem("users");
	let userArr = JSON.parse(jsonArr);

	if (userArr != null) {
		allUsers = userArr;
	}
}

getFromLocal();
getUser();
