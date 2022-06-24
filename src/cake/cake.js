const btnLeft= document.querySelector('#btnLeft');
const btnRight= document.querySelector('#btnRight');

btnLeft.addEventListener("click", () => {
    // alert('Tidak Suka');
		swal.fire({
            // Emot sedih
			icon: 'error',
			title: 'Yahh jelek yahh',
			showConfirmButton: false
		});    
		setTimeout(function() {
			window.location = "../404/404.html";
			return false;
		}, 1000);
})

btnRight.addEventListener("click", () => {
    // alert('Suka');
		swal.fire({
			icon: 'success',
			title: 'Yeayy Terima Kasihhh ',
			showConfirmButton: false
		});
		setTimeout(function() {
			window.location = "../card/card.html";
			return false;
		}, 1000);
})