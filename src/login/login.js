const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Validation
const btn = document.querySelector('#btnLogin');
const form = document.querySelector('form');

btn.addEventListener("click", () => {
	const user = document.querySelector('#user').value;
	const pass = document.querySelector('#pass').value;
	if(user == "kharin" && pass == "sweetseventeen"){
		// alert('Login Berhasil');
		swal.fire({
			icon: 'success',
			title: 'Login Berhasil',
			showConfirmButton: false
		});
		form.reset();
		setTimeout(function() {
			window.location = "../cake/cake.html";
			return false;
		}, 1000);
	} else if(user == "" && pass != ""){
		// alert('Username masih kosong');
		swal.fire({
			icon: 'error',
			title: 'Login Gagal',
			text: 'Username masih kosong !'
		});
		form.reset();
	} else if(pass == "" && user != ""){
		// alert('Password masih kosong');
		swal.fire({
			icon: 'error',
			title: 'Login Gagal',
			text: 'Password masih kosong !'
		});
		form.reset();
	} else if(user == "" || pass == ""){
		// alert('Username dan password masih kosong');
		swal.fire({
			icon: 'error',
			title: 'Login Gagal',
			text: 'Username dan password masih kosong !'
		});
		form.reset();
	} else{
		// alert('Login Gagal');
		swal.fire({
			icon: 'error',
			title: 'Login Gagal',
			text: 'Username dan password salah !'
		});
		form.reset();
	}
});

// Show and Hide Pass
const pass = document.querySelector('#pass');
const icon = document.querySelector('.icon-eye');
const showPass = document.querySelector('#show');
const hidePass = document.querySelector('#hide');

icon.addEventListener("click", () => {
	if(pass.type === 'password'){
		pass.setAttribute('type', 'text');
		showPass.classList.add('hide');
		showPass.style.display = 'block';
		hidePass.style.display = 'none';
	} else {
		pass.setAttribute('type', 'password');
		showPass.classList.remove('hide');
		showPass.style.display = 'none';
		hidePass.style.display = 'block';
	}
});