let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');

uno.addEventListener('mouseover', ()=>{
    card1.innerHTML = "Basic Design & Technology";
});
uno.addEventListener('mouseout', ()=>{
    card1.innerHTML = "";
});
dos.addEventListener('mouseover', ()=>{
    card2.innerHTML = "Thrift & Consignment Store";
});
dos.addEventListener('mouseout', ()=>{
    card2.innerHTML = "";
});
tres.addEventListener('mouseover', ()=>{
    card3.innerHTML = "Burner Phones 4Sale";
});
tres.addEventListener('mouseout', ()=>{
    card3.innerHTML = "";
});
