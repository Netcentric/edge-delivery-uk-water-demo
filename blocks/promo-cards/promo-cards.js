export default function decorate(block) {
  const elements = Array.from(block.children);

  elements.forEach((element) => {
    const cardElements = Array.from(element.children);
    const contentElements = Array.from(cardElements[1]?.children);
    const url = contentElements[0]?.innerText;
    const link = document.createElement('a');



    contentElements[0]?.remove();
    element.classList.add('promo-card');
    cardElements[0].classList.add('promo-card-image');
    cardElements[1].classList.add('promo-card-content');
    link.href = url;
    element.parentNode.insertBefore(link, element);
    link.appendChild(element);
  });
}