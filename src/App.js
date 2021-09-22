import { useState } from "react";
import Title from "./components/title/Title";
import Filter from "./components/filter/Filter";
import Story from "./components/story/Story";
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
    [
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/1.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/2.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/3.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/4.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/5.jpg",
    ],
    [
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/1.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/2.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/3.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/4.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/5.jpg",
    ],
    [
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/1.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/2.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/3.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/4.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/5.jpg",
    ],
    [
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/1.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/2.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/3.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/4.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/5.jpg",
    ],
    [
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/1.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/2.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/3.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/4.jpg",
      "https://raw.githubusercontent.com/yaswanth-git/summachar/main/src/photos/5.jpg",
    ],
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
              index={index}
              modelNumber={modelNumber}
              setModelNumber={setModelNumber}
              isFirst={index === 0}
              isLast={index === stories.length - 1}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
