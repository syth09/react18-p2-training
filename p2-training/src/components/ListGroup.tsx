function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // Stored the condition in a separate variables or constants
  //   const message = items.length === 0 ? <p>No item found</p> : null;

  // Stored it inside a function
  //   const getMessage = () => {
  //     items.length === 0 ? <p>No item found</p> : null;
  //   };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
