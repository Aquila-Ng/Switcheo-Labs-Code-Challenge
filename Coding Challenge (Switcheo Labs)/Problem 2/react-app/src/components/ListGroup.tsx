import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "Los Angeles", "Tokyo", "London", "Paris"];

  if (items.length === 0) 
  return(
  <>
    <h1>
      <p>No Item Found!</p>
    </h1>
  </>);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
