import { register } from "../../services/index.js";

export const formInfo = () => {
  document.querySelector(".send-info").addEventListener("click", (e) => {
    e.preventDefault();
    let type = document.querySelector(".type").value;
    let brand = document.querySelector(".brand").value;
    let price = document.querySelector(".price").value;
    let qtd = document.querySelector(".qtd").value;

    if (type == "none") {
      document.querySelector(".alert-type").innerHTML = "Escolha um tipo";
    }
    if (brand.length == 0) {
      document.querySelector(".alert-brand").innerHTML = "Digite a marca";
    }
    if (price.length == 0) {
      document.querySelector(".alert-price").innerHTML = "Digite o preço";
    }
    if (qtd.length == 0) {
      document.querySelector(".alert-qty").innerHTML = "Digite a quantidade";
    } else {
      document.querySelectorAll(".alert").forEach((alert) => {
        alert.innerHTML = "";
      });
      register(type, brand, price, qtd);
    }
  });
};
