function handleButtonClick(section) {
  const scrollY = document.querySelector('section').getBoundingClientRect().height;
  window.scrollTo({
    top: scrollY,
    behavior: 'smooth'
  })
  // section.scrollIntoView({block: "center", behavior: "smooth"});
}

function scrollAnimation() {
  var section = document.getElementById("section-2");

  document.querySelector('.arrow-down').removeAttribute('href');
  document.body.addEventListener('click',function scroll(evt){
    const target = evt.target.closest('.arrow-down');
    if (!target) return;
    evt.preventDefault();
    handleButtonClick(section);
  });
}

scrollAnimation();