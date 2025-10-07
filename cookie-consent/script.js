const declineButton = document.getElementById('decline-cookies');
const acceptButton = document.getElementById('accept-cookies');
const cookiesBody = document.querySelector('.cookies-body');
const cookiesAccepted = localStorage.getItem('cookiesAccepted');
const cookiesDeclined = localStorage.getItem('cookiesDeclined');

if (cookiesAccepted) {
    cookiesBody.style.display = 'none';
} else if (cookiesDeclined) {
    cookiesBody.style.display = 'none';
}

acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', true);
    cookiesBody.style.display = 'none';
});

declineButton.addEventListener('click', () => {
    localStorage.setItem('cookiesDeclined', true);
    cookiesBody.style.display = 'none';
});