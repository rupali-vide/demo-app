
function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={handleClick}>Click  me</button>
    </div>
  );
}

export default App;
