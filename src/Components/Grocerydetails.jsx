import React, { useState } from "react";
import GroceryItem from "./GroceryItem";

// - **GroceryDetails**
//     - button is only visible if product are not shown and vice versa
//     - on clicking button fetch data from api and map into below container
//     - a `div` tag with `data-cy=container` ( data-cy is similar to id / classname which we give to any of the tags)
//     - the above container should contain all the product details displayed as cards

const Grocerydetails = () => {

  const [data, setData] = useState([])
  const [showDiv, setShowDiv] = useState(false)

  const get_data_from_server = async () => {

    const res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries")
    const { data } = await res.json()

    setData(data)
    console.log(data)
  }

  return (
    <div style={{ textAlign: "center" }}>
      {/* map data to grocery item use className and data-cy as given in problem description  */}
      <h1>Groceries</h1>

      {!showDiv ? (
       <button className="get-groceries" onClick={() => { get_data_from_server(); setShowDiv(true); }} disabled={showDiv}>Get-Groceries</button>
      ) : (
        <div data-cy="container">
        {data.map((item) =>
          <GroceryItem key={item.id} name={item.name} image={item.image} price={item.price} />
        )}
      </div>
      )}

    </div>
  );
};

export default Grocerydetails;
