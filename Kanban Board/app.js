const cards = document.querySelectorAll('.card');
const columns = document.querySelectorAll('.column');

cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

columns.forEach(column => {
  column.addEventListener('dragover', dragOver);
  column.addEventListener('dragenter', dragEnter);
  column.addEventListener('dragleave', dragLeave);
  column.addEventListener('drop', drop);
});

let draggedCard = null;

// Ask ChatGPT: Why is setTimeout used here?
function dragStart(event) {
  draggedCard = event.target;
  setTimeout(() => {
    event.target.style.display = 'none';
  }, 0);
}

function dragEnd() {
  draggedCard.style.display = 'block';
  draggedCard = null;
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.target.classList.add('hovered');
}

function dragLeave(event) {
  event.target.classList.remove('hovered');
}

function drop(event) {
  event.target.classList.remove('hovered');
  if (event.target.classList.contains('card')) {
    event.target.parentNode.appendChild(draggedCard);
  } else {
    event.target.appendChild(draggedCard);
  }
}