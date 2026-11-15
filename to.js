
let purchaseTracked = false;

function validateCode(event) {
    event.preventDefault();
    const code = document.getElementById('code').value;
    const validCode = "20062000";

    if (code === validCode) {
        localStorage.setItem('isLoggedIn', 'true');
        if (!purchaseTracked && typeof fbq === 'function') {
            purchaseTracked = true;
            fbq('track', 'Purchase', { content_name: 'كتب الحساب الذهني' });
        }
        setTimeout(function () {
            window.location.href = 'https://drive.google.com/drive/folders/1ADSneVH4kVOfw5-hmPqDjdIA5x3WZA0q';
        }, 500);
    } else {
        alert('كود غير صحيح');
    }
    return false;
}

