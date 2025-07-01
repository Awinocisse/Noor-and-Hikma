const scrollUpBtn = document.getElementById('scrollup');


// Afficher le bouton seulement quand on descend un peu
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }
});

 scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
 });