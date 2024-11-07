const getPath = () => {
  const path = window.location.pathname
  if (path === '/') {
    return ['Home', 'Services', 'Water', 'Water supply', 'Water pressure'];
  }
  return path.split('/').filter((item) => item !== '');
}

export default function decorate(block) {
  const title = block.querySelector('p');
  const breadcrumb = document.createElement('div');
  const path = getPath();
  const list = document.createElement('ul');

  path.forEach((item, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    if (index < path.length - 1) {
      a.href = '#';
      a.innerText = item;
      li.append(a)
    } else {
      li.innerText = item;
    }


    list.append(li);
  });

  breadcrumb.className = 'breadcrumb-content'
  breadcrumb.innerHTML = `<h1>${title?.innerText}</h1>`;

  block.innerHTML = '';
  breadcrumb.prepend(list);
  block.append(breadcrumb);
}
