import { useState } from "react";

const Form = ({ transactions, setTransactions }) => {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFruit = {
      name: productName,
      quantity: productQuantity,
      price: productPrice,
    };
    setTransactions([...transactions, newFruit]);
    setProductName("");
    setProductQuantity(0);
    setProductPrice(0);
  };
  return (
    <div>
      <h1>Cadastro de nova Fruta</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
        <input
          type="text"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button type="submit"> Cadastrar</button>
      </form>
    </div>
  );
};

export default Form;
