import { getItens, incrementItens, decrementItens } from "../../services/index.js";

export const Quantity = () => {

    const container = document.querySelectorAll(".itens-to-update");

    const frameOptions = (item, id) => {
        container.forEach((input) => {
            input.innerHTML += `
        <option class="item-to-update" value="${id}">${item.Marca}</option>
        `
        })
    };

    getItens().then((snapshot) => {
        snapshot.forEach((product) => {
          frameOptions(product.data(), product.id);
        });
    });

    document.querySelector(".increment")
    .addEventListener("click", () => {
       const id = document.querySelector(".increment-select").value
       const qty = document.querySelector(".increment-qty").value
       
       if(id !== "none" && qty.lenght !== 0){
           incrementItens(id, qty)
       }
    });  
    document.querySelector(".decrement")
    .addEventListener("click", () => {
       const id = document.querySelector(".decrement-select").value
       const qty = document.querySelector(".decrement-qty").value
       
       if(id !== "none" && qty.lenght !== 0){
           decrementItens(id, qty)
       }
    });   
}