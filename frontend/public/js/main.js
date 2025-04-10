const btnRally = document.querySelector('.btnRallyes');

btnRally.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'http://localhost:5500/frontend/public/pages/compet.html';
});
