function Way3(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>You have {cars.length} cars in your garage.</h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Way3 cars={cars} />);

/* Note: If cars.length > 0 is equates to true, the expression after && will render.
   If evaluated false then the expression after && will not render. Remember the
   Component is written inside the curly braces. */