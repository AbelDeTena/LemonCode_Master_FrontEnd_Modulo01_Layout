
const interruptor = document.getElementById('interruptor');
const resultDiv = document.querySelector('.result');

interruptor.addEventListener('change', function() {
    if (this.checked) {
      resultDiv.classList.remove('result');
      resultDiv.classList.add('result-b');
    } else {
      resultDiv.classList.remove('result-b');
      resultDiv.classList.add('result');
    }
  });