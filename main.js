const btnFlight = document.getElementById('btn-flight');
const btnHotel = document.getElementById('btn-hotel');
const btnRental = document.getElementById('btn-rental');

function btnToggleFlight() {
    const toggleFlight = document.getElementById('toggleflight');
    toggleFlight.classList.add('active')
    const toggleHotel = document.getElementById('togglehotel');
    toggleHotel.classList.remove('active')
    const toggleRental = document.getElementById('togglerental');
    toggleRental.classList.remove('active')
}
function btnToggleHotel() {
    const toggleFlight = document.getElementById('toggleflight');
    toggleFlight.classList.remove('active')
    const toggleHotel = document.getElementById('togglehotel');
    toggleHotel.classList.add('active')
    const toggleRental = document.getElementById('togglerental');
    toggleRental.classList.remove('active')
}
function btnToggleRental() {
    const toggleFlight = document.getElementById('toggleflight');
    toggleFlight.classList.remove('active')
    const toggleHotel = document.getElementById('togglehotel');
    toggleHotel.classList.remove('active')
    const toggleRental = document.getElementById('togglerental');
    toggleRental.classList.add('active')
}

btnFlight.addEventListener('click', btnToggleFlight);
btnHotel.addEventListener('click', btnToggleHotel);
btnRental.addEventListener('click', btnToggleRental);

