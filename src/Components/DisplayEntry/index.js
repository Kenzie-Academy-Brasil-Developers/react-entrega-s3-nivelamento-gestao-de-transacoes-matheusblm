const DisplayEntry = ({ transactions, setShowDisplay }) => {
  const filterEntry = transactions.filter((fruit) => fruit.quantity > 0);
  return (
    <div>
      <h1>Entradas</h1>
      <ul>
        {filterEntry.map((fruit, index) => (
          <li key={index}>
            <span>
              Nome:{fruit.name}, qtd: {fruit.quantity}, preco: R$ {fruit.price}
            </span>
          </li>
        ))}
        <button onClick={() => setShowDisplay(false)}>Mostrar saidas</button>
      </ul>
    </div>
  );
};

export default DisplayEntry;
