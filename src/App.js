import { useState } from "react";
import Title from "./components/title/Title";
import Filter from "./components/filter/Filter";
import Story from "./components/story/Story";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import "./App.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState(0);
  const [modelNumber, setModelNumber] = useState(null);
  const filtersList = [
    "All",
    "Coronavirus",
    "India",
    "World",
    "Business",
    "Science&Tech",
    "Politics",
    "Sports",
    "Trivia",
  ];
  const stories = [
    [photo1, photo2, photo3, photo4, photo5],
    [photo1, photo2, photo3, photo4, photo5],
    [photo1, photo2, photo3, photo4, photo5],
    [photo1, photo2, photo3, photo4, photo5],
    [photo1, photo2, photo3, photo4, photo5],
  ];
  return (
    <div className="App">
      <Title setFilter={setFilter} />
      <Filter
        filtersList={filtersList}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="content">
        {stories.map((e, index) => (
          <>
            <Story
              key={index}
              slides={e}
              modelNumber={modelNumber}
              setModelNumber={setModelNumber}
              isFirst={modelNumber === 0}
              isLast={modelNumber === stories.length - 1}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
