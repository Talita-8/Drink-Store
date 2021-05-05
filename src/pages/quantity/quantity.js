export const quantity = `
<div class="quantity-area">
<h1> Atualize a quantidade de produtos que já estão no estoque</h1>
  <section class="itens-container">
  <div class="qty-container">
  <h2>Entrada</h2>
   <select class="register-input itens-to-update increment-select" name="">
      <option value="none">Selecione o item</option>
   </select>
   <input class="register-input increment-qty" min="0" type="number" placeholder="Digite a quantidade">
   <input class="register-input send-info increment" type="submit" value="Enviar">

  <h2>Saída</h2>
   <select class="register-input itens-to-update decrement-select" name="">
      <option value="none">Selecione o item</option>
   </select>
   <input class="register-input decrement-qty" min="0" type="number" placeholder="Digite a quantidade">
   <input class="register-input send-info decrement" type="submit" value="Enviar">
  </div>
  </section>
</div>
`