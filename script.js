const d = document;

let inicial = 90;

d.addEventListener('click', e => {
  if (e.target.matches('.grid')) {
    e.target.style.transform = `scale(.8) rotate(${inicial}deg)`;
    let imagenes = e.target.querySelectorAll('img');
    imagenes.forEach(el => {
      el.style.setProperty('--g', `-${inicial}deg`);
    });
    inicial += 45;
  }
});
