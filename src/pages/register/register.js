export const register = `
<div class="register-area">
<form>
    <label>
        Marca e ml
        <p class="alert alert-brand"></p>
        <input class="register-input brand" placeholder="Ex.: Brahma 350ml" type="text">
    </label>
    <label>
        Preço
        <p class="alert alert-price"></p>
        <input class="register-input price" type="number" placeholder="Ex:3,50">
    </label>
     
   <p class="alert alert-type"></p>
    <select class="register-input type" name="Tipo">
        <option value="none">Escolha o tipo</option>
        <option value="cerveja">Cerveja</option>
        <option value="refrigerante">Refrigerante</option>
        <option value="outros">Outras</option>
   </select>
    <label>
    Quantidade
    <p class="alert alert-qty"></p>
    <input class="register-input qtd" type="number">
   </label>
    <input class="register-input send-info" type="submit" value="Enviar">
</form>
</div>
`;
