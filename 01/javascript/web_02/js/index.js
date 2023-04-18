import ConceptModel from '../models/concept_model.js';

// state
const concepts = [];

// Get elements
const modal = document.getElementById('myModal');
const openModalButton = document.querySelector('.manipulation__add-button');
const closeModalButton = document.querySelector('.modal__close');
const modalNewConceptForm = document.getElementById('concept-form');
const modalConceptNameInput = document.getElementById('concept-name');

// Attach event listeners
openModalButton.onclick = toggleModal;
closeModalButton.onclick = toggleModal;
modalNewConceptForm.onsubmit = handleFormSubmit;
window.onclick = closeModal;

// Toggle the modal's visibility
function toggleModal() {
  if (modal.style.display === 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
    modalConceptNameInput.focus(); // F
  }
}

function closeModal(event) {
  if (event.target !== modal) {
    return;
  }
  modal.style.display = 'none';
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  var conceptName = document.getElementById('concept-name').value;
  var newConcept = new ConceptModel(conceptName, 'New', Date.now(), []);

  concepts.push(newConcept);
  renderConcepts();

  modalNewConceptForm.reset();
  toggleModal();
}

// Render all concepts in the concepts list
function renderConcepts() {
  const conceptsList = document.querySelector('.concepts__list');
  conceptsList.innerHTML = '';

  concepts.forEach((concept) => {
    const listItem = document.createElement('li');
    listItem.className = 'concepts__item';

    const content = document.createElement('div');
    content.className = 'concepts__content';

    const subtitle = document.createElement('h3');
    subtitle.className = 'concepts__subtitle';
    subtitle.textContent = concept.name;

    const learnedButton = document.createElement('button');
    learnedButton.className = 'concepts__learned-button';
    learnedButton.innerHTML = '<i class="material-icons">undo</i>';

    content.appendChild(subtitle);
    content.appendChild(learnedButton);
    listItem.appendChild(content);
    conceptsList.appendChild(listItem);
  });
}
