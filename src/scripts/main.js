'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.classList = `notification ${type}`;
  body.lastElementChild.before(div);
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  h2.className = 'title';
  h2.textContent = title;
  h2.style.whiteSpace = 'nowrap';
  div.append(h2);
  p.innerText = description;
  div.append(p);

  setTimeout(() => {
    div.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');