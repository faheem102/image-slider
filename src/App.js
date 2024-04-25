import ImageSlider from "./image-slider";

function App() {
  return (
    <div className="App">
      <ImageSlider
        url={"https://picsum.phots/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
