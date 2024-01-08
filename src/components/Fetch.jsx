import { useEffect, useState } from "react";

function Fetch() {
  const [apidata, setApidata] = useState("");
  const [update, setUpdate] = useState(false);
  useEffect(function () {
    async function fetching() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      setApidata(data);
      console.log(data);
      console.log(update);
    }
    fetching();
  }, []);

  function handleUpdate() {
    setUpdate((update) => !update);
  }
  return (
    <div>
      <p>{apidata.title}</p>
      <button onClick={handleUpdate}>reload</button>;
    </div>
  );
}

export default Fetch;
