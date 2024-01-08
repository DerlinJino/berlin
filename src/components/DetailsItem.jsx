import { useState } from "react";
import UpdateForm from "./UpdateForm";

function DetailsItem({ detail, setDetails }) {
  const [updating, setUpdating] = useState(false);
  const { name, age, address, key } = detail;

  function handleDelete(k) {
    setDetails((detatil) => detatil.filter((d) => d.key !== k));
  }
  function handleview(k) {
    setDetails((detail) => detail.filter((d) => d.key === k));
  }
  return (
    <div>
      <p>id:{key}</p>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Address:{address}</p>
      <button onClick={() => setUpdating((updating) => !updating)}>
        update
      </button>
      <button onClick={() => handleDelete(key)}>Delete</button>
      <button onClick={() => handleview(key)}>view</button>
      <hr />
      {updating && <UpdateForm detail={detail} setDetails={setDetails} />}
    </div>
  );
}

export default DetailsItem;
