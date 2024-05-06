import React, { useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/apis/get/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("error");
      });
  };
  return (
    <div>
      <h2>Data</h2>
      <button onClick={fetchData}>Click</button>
      {data && (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
export default MyComponent;
