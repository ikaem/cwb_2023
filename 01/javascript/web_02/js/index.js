// import ConceptModel from '../js/models/concept_model.js';
// import constants from '../js/constants.js';

// // state
const concepts = [];

// // Get elements
const modal = document.getElementById('myModal');
const openModalButton = document.querySelector('.manipulation__add-button');
const sumbitButton = document.querySelector('.modal__submit');
const closeModalButton = document.querySelector('.modal__close');
const modalNewConceptForm = document.getElementById('concept-form');
// const modalConceptNameInput = document.getElementById('concept-name');

const conceptsList = document.querySelector('.concepts__list');

// // Attach event listeners
openModalButton.onclick = toggleModal;
closeModalButton.onclick = toggleModal;
// modalNewConceptForm.onsubmit = handleFormSubmit;
window.onclick = closeModal;

function renderAllConcepts() {
  console.log('all concepts: ', concepts);

  for (let i = 0; i < concepts.length; i++) {
    const liElement = document.createElement('li');

    const textElement = document.createElement('p');
    const deleteButton = document.createElement('button');

    const currentConcept = concepts[i];

    textElement.textContent = currentConcept;
    deleteButton.textContent = 'Delete';

    liElement.appendChild(textElement);
    liElement.appendChild(deleteButton);

    conceptsList.appendChild(liElement);
  }
}

sumbitButton.addEventListener('click', function (event) {
  event.preventDefault();

  console.log('eventer', event);
  event.target.innerHTML = 'burek';

  const input = document.querySelector('#concept-name');

  const conceptNew = input.value;
  concepts.push(conceptNew);

  console.log('input value:', conceptNew);

  renderAllConcepts();

  // console.log(input);
});

// // Toggle the modal's visibility
function toggleModal() {
  console.log('clicked');

  if (modal.style.display === 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
    modalConceptNameInput.focus(); // F
  }
}

function closeModal(event) {
  console.log({ event, window });
  if (event.target !== modal) {
    return;
  }
  modal.style.display = 'none';
}

// // Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const conceptName = document.getElementById('concept-name').value;
  const newConcept = new ConceptModel(
    conceptName,
    constants.newConcept,
    Date.now(),
    []
  );

  concepts.push(newConcept);
  renderConcepts();

  modalNewConceptForm.reset();
  toggleModal();
}

// // Render all concepts in the concepts list
function renderConcepts() {
  const conceptsList = document.querySelector('.concepts__list');
  conceptsList.innerHTML = '';

  console.log(concepts);

  concepts.forEach((concept, index) => {
    const conceptStatus = concept.status;

    const listItem = document.createElement('li');
    listItem.className = 'concepts__item';

    const content = document.createElement('div');
    content.className =
      'concepts__content' +
      (concept.status === constants.learnedConcept ? ' done' : '');

    const subtitle = document.createElement('h3');
    subtitle.className = 'concepts__subtitle';
    subtitle.textContent = concept.name;

    const learnedButton = document.createElement('button');
    const statusGlyph = conceptStatus == constants.newConcept ? 'done' : 'undo';

    learnedButton.className = 'concepts__learned-button';
    learnedButton.innerHTML = `<i class="material-icons">${statusGlyph}</i>`;

    learnedButton.addEventListener('click', (event) => {
      toggleConceptStatus(index);
    });

    content.appendChild(subtitle);
    content.appendChild(learnedButton);
    listItem.appendChild(content);
    conceptsList.appendChild(listItem);
  });
}

// // mark concept as done

// function toggleConceptStatus(conceptIndex) {
//   const currentConcept = concepts[conceptIndex];
//   const status = currentConcept.status;

//   concepts[conceptIndex].status =
//     status == constants.learnedConcept
//       ? constants.newConcept
//       : constants.learnedConcept;

//   renderConcepts();
// }

const container = document.querySelector('.container');

// tasks

// select all elemtns
// add events listenrs
// manipulate lements on click
// change color
// change text color
// hide it
// hide another element
