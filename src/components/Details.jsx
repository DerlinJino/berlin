import DetailsItem from "./DetailsItem";

function Details({ details, setDetails }) {
  const detailArr = details;
  return (
    <ul>
      {detailArr.map((detail) => (
        <DetailsItem
          setDetails={setDetails}
          detail={detail}
          key={detail.name}
        />
      ))}
    </ul>
  );
}

export default Details;
