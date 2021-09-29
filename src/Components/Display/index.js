import { useState } from "react";
import DisplayEntry from "../DisplayEntry";
import DisplayOut from "../DisplayOut";
import Form from "../Form";

const Display = () => {
  const [showDisplay, setShowDisplay] = useState(true);
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  return (
    <div>
      <Form transactions={transactions} setTransactions={setTransactions} />
      {showDisplay ? (
        <DisplayEntry
          transactions={transactions}
          setShowDisplay={setShowDisplay}
        />
      ) : (
        <DisplayOut
          transactions={transactions}
          setShowDisplay={setShowDisplay}
        />
      )}
      <span>Todas movimentacoes</span>
      <ul>
        {transactions.map((fruit, index) => (
          <li key={index}>
            <span>
              Nome:{fruit.name}, qtd: {fruit.quantity}, preco: R$ {fruit.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
