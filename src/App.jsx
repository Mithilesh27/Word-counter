import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [countwords, setCountWords] = useState(0);
  const handleCount = (e) => {
    setText(e.target.value);
    let words = e.target.value.trim().split(/\s+/);
    setCountWords(words.length);
    if (e.target.value == "") {
      setCountWords(0);
    }
  };
  return (
    <>
      <div className="word-container">
        <h1>Responsive Word Counter</h1>
        <textarea
          name=""
          id=""
          cols="50"
          rows="10"
          value={text}
          onChange={handleCount}
        ></textarea>
        <p>Word Count:{countwords}</p>
      </div>
    </>
  );
}

export default App;
