import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import axios from "axios";

const App = () => {
  const [set, setSet] = useState("");
  const [rarity, setRarity] = useState("");
  const [queryResults, setQueryResults] = useState([]);

  const sets = ["khm", "neo", "znr"]; // Example sets
  const rarities = ["common", "uncommon", "rare", "mythic"];

  // Function to generate the Scryfall API query
  const fetchCards = async () => {
    let query = `https://api.scryfall.com/cards/search?q=`;
    if (set) query += `set%3A${set}+`;
    if (rarity) query += `rarity%3A${rarity}`;

    try {
      const response = await axios.get(query);
      setQueryResults(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>MTG Card Search</h1>
      
      <Dropdown label="Set" options={sets} selectedValue={set} onChange={setSet} />
      <Dropdown label="Rarity" options={rarities} selectedValue={rarity} onChange={setRarity} />
      
      <button onClick={fetchCards}>Search</button>

      <div>
        <h2>Results</h2>
        {queryResults.length > 0 ? (
          <ul>
            {queryResults.map((card) => (
              <li key={card.id}>
                <img src={card.image_uris?.small} alt={card.name} />
                {card.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default App;

