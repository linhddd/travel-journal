import './App.css';
import Top from "./Top"
import Card from "./Card"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Top />
      {cards}
    </div>
  );
}

export default App;
