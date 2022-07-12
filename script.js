const tabsButtonContainer = document.querySelector('.tab__button__container');
const tabs = document.querySelectorAll('.button__tab');
const tabsContent = document.querySelectorAll('.tab__content');
const tab1 = document.querySelector('.tab__content--1');

tabsButtonContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.button__tab'); //to target the button with the icon or any spam that might be together.
  // const clicked = e.target; // would be enough to target the button itself only.
  console.log(clicked); //just to check the state

  if (!clicked) return; //Guard Clause to return in case of null

  //Active Button
  tabs.forEach(t => t.classList.remove('button__tab-active')); //to clear all classes before adding to any
  clicked.classList.add('button__tab-active');

  //Active Content
  tabsContent.forEach(t => t.classList.remove('tab__content-active')); // to clear
  document
    .querySelector(`.tab__content--${clicked.dataset.tab}`)
    .classList.add('tab__content-active');

  if (tab1.matches('.tab__content--1.tab__content-active')) {
    document.querySelector('.body').classList.add('background__pg1');
  } else {
    document.querySelector('.body').classList.remove('background__pg1');
  }
});

const iconArrow = document.querySelector('.icon-arrow-with-circle-up');
const tabContainer = document.querySelector('.tab__button__container');

iconArrow.addEventListener('click', function (e) {
  if (tabContainer.classList.contains('tab__button__container-down')) {
    tabContainer.classList.remove('tab__button__container-down');
    iconArrow.classList.add('icon__rotate');
    return;
  }
  console.log(tabContainer);

  tabContainer.classList.add('tab__button__container-down');
  iconArrow.classList.remove('icon__rotate');
});
