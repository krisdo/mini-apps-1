//list of cells element
var cells = document.querySelectorAll('td');


//event listener to mark an X on cells when clicked
cells.forEach( (cell) =>{
  cell.addEventListener("click", (event) => {
    event.target.innerText = 'X';
  });
});