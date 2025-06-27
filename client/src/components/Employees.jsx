import Employee from "./Employee";
import { useState, useEffect } from "react";

export default function Employees({ data, onUpdate, onDelete }) {
  
  const [show, setShow] = useState(true);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {show? 'Hide Employee(s)' : 'Show Employee(s)'}
      </button>
      <hr />
      <ul className="list-unstyled">
      {show && data.map((element) => {
        return <Employee key={element.id} data={element} onUpdate={onUpdate} onDelete={onDelete}/>
      }) }
      </ul>

    </>
  );
}