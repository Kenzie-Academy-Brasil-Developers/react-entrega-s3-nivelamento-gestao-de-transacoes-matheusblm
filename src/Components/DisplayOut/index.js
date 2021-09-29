const DisplayOut = ({ transactions, setShowDisplay }) => {
  const filterOut = transactions.filter((fruit) => fruit.quantity < 0);
  return (
    <div>
      <h1>Saidas</h1>
      <ul>
        {filterOut.map((fruit, index) => (
          <li key={index}>
            <span>
              Nome:{fruit.name}, qtd: {fruit.quantity}, preco: R$ {fruit.price}
            </span>
          </li>
        ))}
        <button onClick={() => setShowDisplay(true)}>Mostrar entradas</button>
      </ul>
    </div>
  );
};

export default DisplayOut;
