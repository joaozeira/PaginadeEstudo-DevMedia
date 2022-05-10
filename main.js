
function openFlight() {
    const flight = document.getElementById('content-flight');
    flight.classList.add('active');
    const hotel = document.getElementById('content-hotel');
    hotel.classList.remove('active');
    const rental = document.getElementById('content-rental');
    rental.classList.remove('active');
}

function openHotel() {
    const flight = document.getElementById('content-flight');
    flight.classList.remove('active');
    const hotel = document.getElementById('content-hotel');
    hotel.classList.add('active');
    const rental = document.getElementById('content-rental');
    rental.classList.remove('active');
}

function openRental() {
    const flight = document.getElementById('content-flight');
    flight.classList.remove('active');
    const hotel = document.getElementById('content-hotel');
    hotel.classList.remove('active');
    const rental = document.getElementById('content-rental');
    rental.classList.add('active');
}



