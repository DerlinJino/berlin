import { useState } from "react";
import Details from "./Details";
import shortid from "shortid";
function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState([]);

  function submitDetails(e) {
    e.preventDefault();
    let key = shortid.generate();
    setDetails([...details, { name, age, address, key }]);
    setName("");
    setAge("");
    setAddress("");
  }
  console.log(details);

  return (
    <div>
      <form action="" onSubmit={submitDetails}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">Age</label>
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">Address</label>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <Details details={details} setDetails={setDetails} />
    </div>
  );
}

export default Form;
