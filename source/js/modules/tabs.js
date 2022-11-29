const subscriptionBlock = document.querySelector('.subscription');
const buttons = document.querySelectorAll('.subscription__tab-title-item');
const tabs = document.querySelectorAll('.subscription__tab-list');

const onClickTab = (tabNumber) => {
  buttons.forEach((button) => {
    button.classList.remove('subscription__tab-title-item--active');
  });
  tabs.forEach((tab) => {
    tab.classList.remove('subscription__tab-list--active');
  });
  buttons[tabNumber].classList.add('subscription__tab-title-item--active');
  tabs[tabNumber].classList.add('subscription__tab-list--active');
};

export const changeTab = () => {
  if (subscriptionBlock && buttons.length > 0 && tabs.length > 0) {
    if (buttons.length === tabs.length) {
      subscriptionBlock.classList.add('subscription--JS');
      const prices = subscriptionBlock.querySelectorAll('b');
      prices.forEach((price) => {
        price.dataset.text = price.childNodes[0].nodeValue;
      });
      buttons.forEach((button, key) => {
        button.addEventListener('click', () => {
          onClickTab(key);
        });
      });
    }
  }
};
