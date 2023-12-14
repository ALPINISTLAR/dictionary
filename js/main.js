document.addEventListener('DOMContentLoaded', function () {

  const form = document.querySelector('form');


  form.addEventListener('submit', function (event) {

    event.preventDefault();

    const englishInput = document.getElementById('english');
    const englishValue = englishInput.value;


    const uzInput = document.getElementById('uz');
    const uzValue = uzInput.value;


    if (englishValue && uzValue) {

      const wordListNew = document.getElementById('word-list-new');

      const newLi = document.createElement('li');


      const controlDiv = document.createElement('div');
      controlDiv.id = 'control';

      wordListNew.appendChild(newLi);

      newLi.textContent = `${englishValue} - ${uzValue}`;

      newLi.appendChild(controlDiv);

      controlDiv.innerHTML = `
      <button class="btn-w" id="right">➡️</button>
      <button class="btn-w" id="left">⬅️</button>
      <button class="btn-w" id="delete">❌</button>
      `;

      englishInput.value = '';
      uzInput.value = '';
    }
  });


  document.addEventListener('click', function (event) {
    if (event.target.id === 'right') {

      const closestLi = event.target.closest('li');
      if (closestLi) {

        const wordListKnown = document.getElementById('word-list-known');
        wordListKnown.appendChild(closestLi);
      }
    }
  });


  document.addEventListener('click', function (event) {
    if (event.target.id === 'left') {

      const closestLi = event.target.closest('li');
      if (closestLi) {

        const wordListNew = document.getElementById('word-list-new');
        wordListNew.appendChild(closestLi);
      }
    }
  });


  document.addEventListener('click', function (event) {
    if (event.target.id === 'delete') {

      const closestLi = event.target.closest('li');
      if (closestLi) {

        closestLi.remove();
      }
    }
  });
});
