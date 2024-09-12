import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
