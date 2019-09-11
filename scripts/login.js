var storageUser = "";
var storagePass = "";

// firebase.auth().onAuthStateChanged(function(user) {
// 	var dialog = document.querySelector('#login-dailog');
// 	if (user) {
// 	    // User is signed in.
// 	    // document.getElementById('login-layout').style.display = 'none';
// 		alert("User is signed in");
// 	    dialog.showModal();
// 	} else {
// 	    // No user is signed in.
// 		if(!dialog.showModal){
// 			dialogPolyfill.registerDialog(dialog);
// 		}
// 		// Now dialog acts like a native <dialog>.
// 		alert("User is not signed in");
// 		dialog.showModal();
// 	}

// });

function SignOut(){
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
		    // User is signed in.
		    // document.getElementById('login-layout').style.display = 'none';
			firebase.auth().signOut();
			console.log(user);
		} else {
		    // No user is signed in
		    // document.getElementById('nameTest').innerHTML = "";
			alert("User is not signed in");
			window.location.reload();
		}

	});
}

function SignIn(){
	var accounts = {};
	accounts.username = document.getElementById('username').value;
	accounts.password = document.getElementById('password').value;
	// accRef = firebase.database().ref('Users');
	// accRef.on('value', function(getData){

	const auth = firebase.auth();
	auth.signInWithEmailAndPassword(accounts.username, accounts.password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode, errorMessage);
		// ...
	});
	accounts.username = accounts.username.replace(accounts.username, "");
	accounts.password = accounts.password.replace(accounts.password, "");
		// console.log(getData.val());
		// var name = document.getElementById('nameTest');
		// var retrieve = getData.val();
		// var keys = Object.keys(retrieve);
		// for(i = 0; i < keys.length; i++){
		// 	var k = keys[i];
		// 	var user = retrieve[k].username;
		// 	var pass = retrieve[k].password;
		// 	console.log(user, pass);
		// 	console.log(accounts.username);
		// 	var accErr = document.getElementById('login-error');
		// 	var success = document.getElementById('login-success');
			// if(user != accounts.username && pass != accounts.password){
			// 	return accErr.innerHTML = "This account is not in the database";
			// }
			// else{
				// firebase.auth().onAuthStateChanged(function(userAuth) {
				// 	if (userAuth) {
				// 	    // User is signed in.
				// 	    // document.getElementById('login-layout').style.display = 'none';
				// 		window.open("user_page.html");
				// 	} else {
				// 	    // No user is signed in.
				// 		// Now dialog acts like a native <dialog>.
				// 		console.log(userAuth);
				// 		alert("User is now signed in");
				// 		window.open("user_page.html");
				// 	}

				// });				
			// success.innerHTML = "";
			// accErr.innerHTML = "";
		// }

	// });

}

function UserLogin(){
	firebase.auth().onAuthStateChanged(function(userAuth) {
		var x = document.getElementById('nameTest');
		var name, email, photoUrl, uid, emailVerified;
		if (userAuth) {
			// User is signed in.
			// document.getElementById('login-layout').style.display = 'none';
			var user = firebase.auth().currentUser;
			if (user != null) {
				name = user.displayName;
				email = user.email;
				photoUrl = user.photoURL;
				emailVerified = user.emailVerified;
				uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
			                   // this value to authenticate with your backend server, if
			                   // you have one. Use User.getToken() instead.
			    console.log(name,email,uid);
			    x.innerHTML = email;
			}
		} else {
			// No user is signed in.
			// Now dialog acts like a native <dialog>.
			console.log(userAuth);
		}

	});

	// x.innerHTML = localStorage.storageUser;
	//document.getElementById('nameTest').innerHTML = x;
}

function LoadOnce(){
	location.reload();
}


function Register(){
	var accounts = {};
	accounts.username = document.getElementById('regUser').value;
	accounts.password = document.getElementById('regPass').value;
	console.log(accounts.username);
	const auth = firebase.auth();
	firebase.auth().createUserWithEmailAndPassword(accounts.username, accounts.password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode, errorMessage);
		// ...
	});

	if(accounts.username != "" && accounts.password != ""){
		// var success = document.getElementById('login-success');
		// success.innerHTML = "This account is now registered";
		// var userKey = firebase.database().ref().child('Users').push().key;
		// var updates = {};
		// updates['/Users/' + userKey] = accounts;
		// return firebase.database().ref().update(updates);
	}
	else{
		alert("please fill out username and password");
	}
}

// function LoginDialogLoad(){
// 	var dialog = document.querySelector('#login-dailog');
// 	dialog.showModal();
// 	firebase.auth().onAuthStateChanged(function(userAuth) {
// 		if (userAuth) {
// 			// User is signed in.
// 			// document.getElementById('login-layout').style.display = 'none';
// 			window.open("user_page.html");
// 			console.log(userAuth);
// 		} else {
// 			// No user is signed in.
// 			// Now dialog acts like a native <dialog>.
// 			console.log(userAuth);
// 		}

// 	});
// }

function RegisterDialogLoad(){
	// var dialog = document.querySelector('#reg-dailog');
	// dialog.showModal();
	firebase.auth().onAuthStateChanged(function(userAuth) {
		if (userAuth) {
			var user = firebase.auth().currentUser;
			var userId = user.uid;
			// User is signed in.
			firebase.database().ref('users/' + userId).set({
				email: user.email
			});
			console.log(userAuth);
		} else {
			// No user is signed in.
			// Now dialog acts like a native <dialog>.
			console.log(userAuth);
		}

	});
}

function LoginDialogLoad(){
	// var dialog = document.querySelector('#login-dailog');
	// dialog.showModal();
	var modal = document.getElementById('myModal');
	modal.style.display = "block";
	firebase.auth().onAuthStateChanged(function(userAuth) {
		if (userAuth) {
			var user = firebase.auth().currentUser;
			var userId = user.uid;
			// User is signed in.
			// window.open("redirect.html");
			window.open("redirect.html");
			firebase.database().ref('users/' + userId).set({
				email: user.email
			});
			console.log(userAuth);
		} else {
			// No user is signed in.
			// Now dialog acts like a native <dialog>.
			console.log(userAuth);
		}

	});
}

function CloseRegDialog(){
	var dialog = document.querySelector('#reg-dailog');
	dialog.close();
}

function CloseLoginDialog(){
	var dialog = document.querySelector('#login-dailog');
	dialog.close();
}