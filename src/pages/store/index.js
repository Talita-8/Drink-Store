import { getItens } from "../../services/index.js";

export const Itens = () => {

  const frameStore = (item) => {
      
    const container = document.querySelector(".itens-container");
    if (item.Tipo_do_Produto === "cerveja") {
      container.innerHTML += `
    <div class="each-item">
        <h1>${item.Marca}</h1>
        <ul>
            <li>${item.Tipo_do_Produto}</li>
            <img class="image" src="../../images/beer.jpg"" alt="drink-photo">
            <li>R$ ${item.Preço}</li>
            <li>Qtd: ${item.Qtd}</li>
        </ul>
    </div>
    `;
    }
    if (item.Tipo_do_Produto === "refrigerante") {
      container.innerHTML += `
        <div class="each-item">
            <h1>${item.Marca}</h1>
            <ul>
                <li>${item.Tipo_do_Produto}</li>
                <img class="image" src="../../images/refri.jpg" alt="drink-photo">
                <li>R$ ${item.Preço}</li>
                <li>Qtd: ${item.Qtd}</li>
            </ul>
        </div>
        `;
    }
    if (item.Tipo_do_Produto === "outros") {
      container.innerHTML += `
        <div class="each-item">
            <h1>${item.Marca}</h1>
            <ul>
                <li>${item.Tipo_do_Produto}</li>
                <img class="image" src="../../images/drinks.jpg" alt="drink-photo">
                <li>R$ ${item.Preço}</li>
                <li>Qtd: ${item.Qtd}</li>
            </ul>
        </div>
        `;
    }
  };

  getItens().then((snapshot) => {
    snapshot.forEach((product) => {
      frameStore(product.data());
    });
  });
};
