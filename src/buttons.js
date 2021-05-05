import { register } from "./pages/register/register.js";
import { formInfo } from "./pages/register/index.js";
import { store } from "./pages/store/store.js";
import { Itens } from "./pages/store/index.js";
import { quantity } from "./pages/quantity/quantity.js";
import { Quantity } from "./pages/quantity/index.js";

export const listenerButton = (eventClick) => {
  const app = document.querySelector(".main-app");
  const path = eventClick.path[0];
    if (path.innerHTML === "Cadastrar"){
      app.innerHTML = register;
      formInfo();
    }
    if (path.innerHTML === "Estoque"){
      app.innerHTML = store;
      Itens();
    }
    if (path.innerHTML === "Entrada | Saída"){
      app.innerHTML = quantity;
      Quantity();
    }
};
