const Acordeon = document.getElementsByClassName('UNO');

for (i=0; i<Acordeon.length; i++) {
  Acordeon[i].addEventListener('click', function () {
    this.classList.toggle('active');
  })
}
