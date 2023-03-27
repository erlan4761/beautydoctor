const open_pop_up= document.getElementById('open_pop_up');
const closePopup = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

open_pop_up.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopup.addEventListener('click', () => {
        popUp.classList.remove('active');
})



const opp= document.getElementById('opp');
const pupclose = document.getElementById('pupclose');
const pup = document.getElementById('pup');

opp.addEventListener('click', function(e){
    e.preventDefault();
    pup.classList.add('active');
})

pupclose.addEventListener('click', () => {
        pup.classList.remove('active');
})



  AOS.init(
    {
        once: true
    }
  );

