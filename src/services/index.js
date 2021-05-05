const db = firebase.firestore();

export const register = (type, brand, price, qtd) => {
  const numPrice = Number(price);
  const numQtd = Number(qtd);

  db.collection("Produtos")
    .add({
      Tipo_do_Produto: `${type}`,
      Marca: `${brand}`,
      Preço: numPrice,
      Qtd: numQtd,
    })
    .then(() => {
      alert("Item cadastrado!");
    })
    .catch((error) => {
      alert(
        "Houve algum problema, recarregue a página e tente novamente: ",
        error
      );
    });
};

export const getItens = () => {
  return db
    .collection("Produtos")
    .where("Qtd", ">", 0)
    .orderBy("Qtd", "desc")
    .get();
};

export const incrementItens = (id, qty) => {
  return db
    .collection("Produtos")
    .doc(`${id}`)
    .update({
      Qtd: firebase.firestore.FieldValue.increment(+qty),
    })
    .then(() => alert("Quantidade atualizada"));
};

export const decrementItens = (id, qty) => {
  return db
    .collection("Produtos")
    .doc(`${id}`)
    .update({
      Qtd: firebase.firestore.FieldValue.increment(-qty),
    })
    .then(() => alert("Quantidade retirada do estoque"));
};
