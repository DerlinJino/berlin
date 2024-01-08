import { useState } from "react";

function UpdateForm({ detail, setDetails }) {
  const { name, age, address, key } = detail;

  const [updateName, setUpdateName] = useState(name);

  const [updateAge, setUpdateAge] = useState(age);

  const [updateAddress, setUpdateAddress] = useState(address);

  function updateDetails(e) {
    e.preventDefault();
    setDetails((details) =>
      details.map((detail) =>
        detail.key === key
          ? {
              ...detail,
              name: updateName,
              age: updateAge,
              address: updateAddress,
            }
          : detail
      )
    );
  }
  return (
    <div>
      <form action="" onSubmit={updateDetails}>
        <h3>Updating Form</h3>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={updateName}
          onChange={(e) => setUpdateName(e.target.value)}
        />
        <label htmlFor="">Age</label>
        <input
          type="text"
          value={updateAge}
          onChange={(e) => setUpdateAge(e.target.value)}
        />
        <label htmlFor="">Address</label>
        <input
          type="text"
          value={updateAddress}
          onChange={(e) => setUpdateAddress(e.target.value)}
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default UpdateForm;
