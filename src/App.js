import { useState } from "react";
import "./App.css";
import ImageDisplayComponent from "./Components/ImageDisplayComponent/ImageDisplayComponent";
import ImageUpload from "./Components/ImageUploadComponent/ImageUploadComponent";
import NavComponent from "./Components/NavComponent/NavComponent";

function App() {
  const [imageList, setImageList] = useState([]);
  return (
    <div className="App">
      <header>
        <NavComponent />
      </header>
      <div className="main-container">
        <ImageDisplayComponent imageList={imageList} />
        <ImageUpload setImageList={setImageList} />
      </div>
    </div>
  );
}

export default App;
