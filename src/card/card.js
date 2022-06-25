const scriptURL = 'https://script.google.com/macros/s/AKfycbysm-FgD66iFh1RA8jV7P-E5V6rRWnGievxG6ioa030vpb0_IP59EVlPf_zn46Ecg7HDg/exec';
const form = document.forms['submit-wish'];
const btnSubmit = document.querySelector('#btnSubmit');

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        swal.fire({
			icon: 'success',
			title: 'Berhasil Terkirim',
            text: 'Semoga Apa Yang Kamu Inginkan Tercapai Ayangg'
		})
        form.reset()
    })
    .catch(error => {
        swal.fire({
			icon: 'error',
			title: 'Gagal Terkirim',
            text: 'Minta tolong diisi lagi dong ayangg'
		})
        form.reset()
    })
})