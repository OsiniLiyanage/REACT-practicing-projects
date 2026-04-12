import useCounter from "../hooks/useCounter";

function CustomerHookEx2() {
  const { count, increment, decrement } = useCounter(5);
  return (
    <div>
      <h5>Customer Hook Ex 2</h5>
      <h2>Count : {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
    
  );
}

export default CustomerHookEx2;
