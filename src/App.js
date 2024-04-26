import ImageSlider from "./image-slider";

function App() {
  return (
    <div className="App">
      <ImageSlider
        url={
          "https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_SesfDz1OJYdQTAYGeaKCwyVI5PXKApk1pPltZcilrMuaQxHsKQRaQUg45pwvJbK2"
        }
      />
    </div>
  );
}

export default App;
