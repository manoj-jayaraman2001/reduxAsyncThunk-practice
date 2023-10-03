import ClipLoader from "react-spinners/ClipLoader";
function Spinner() {
  return (
    <ClipLoader
      color={"#000000"}
      loading={true}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Spinner;
