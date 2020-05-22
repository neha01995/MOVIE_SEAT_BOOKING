const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
// console.log(typeof ticketPrice);



// update total value and count value
function updateSelectedCount(){
    // this give nodeList of seats that u are selecting
    const selectedSeats= document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats);

    // const seatsIndex = [...selectedSeats].map(function(seat){
    //     return [...seats].indexOf(seat);
    // })

    const seatsIndex = [...selectedSeats].map(seat=>
        [...seats].indexOf(seat)
    );
    // console.log(seatsIndex);

    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    const selectedSeatsCount= selectedSeats.length;
    // console.log(selectedSeatsCount);

    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount*ticketPrice;
}

//movie click event
movieSelect.addEventListener('change',e =>{
    ticketPrice= +e.target.value;

    setMovieData(e.target.selectedIndex, e.target.value);
    // console.log(ticketPrice);
    updateSelectedCount();
});

//seats which are selected and not occupied
container.addEventListener('click',e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();

    }
    
})