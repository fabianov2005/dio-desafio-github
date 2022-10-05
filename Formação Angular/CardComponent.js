class CardComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(this.build());
    // shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');

    const cardLeft = document.createElement('div');
    cardLeft.setAttribute('class', 'card-left');

    const cardRight = document.createElement('div');
    cardRight.setAttribute('class', 'card-right');

    const spanCardLeft = document.createElement('span');
    spanCardLeft.textContent =
      'By ' + (this.getAttribute('texto') || 'Minha Cidade Recife');

    const imgCardLeft = document.createElement('img');
    imgCardLeft.setAttribute('src', './Recife.jpg');

    const cabecalho = document.createElement('h1');
    cabecalho.textContent = 'Recife - A veneza brasileira';

    const paragrafo = document.createElement('p');
    paragrafo.textContent =
      'Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industrys standard dummy text<br /> ever since the 1500s, when an unknown printer took a galley';

    spanCardLeft.appendChild(imgCardLeft);
    cardLeft.appendChild(spanCardLeft);
    cardLeft.appendChild(cabecalho);
    cardLeft.appendChild(paragrafo);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {}
}

customElements.define('card-component', CardComponent);
