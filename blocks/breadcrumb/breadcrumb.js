export default function decorate(block) {
  const title = block.querySelector('p');
  block.innerHTML = `
    <div class="breadcrumb-content">
        <h1>${title?.innerText}</h1>
    </div>`;
}
