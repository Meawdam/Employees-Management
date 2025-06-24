export default function Employees() {
  return (
    <>
      <button id="showData" className="btn btn-primary">
        Show employee(s)
      </button>
      <hr />
      <ul className="list-unstyled">
        <li className="d-flex justify-content-between align-items-center m-3 p-3 border rounded shadow-sm">
          <p>Name : John</p>
          <p>Position : Manager</p>
          <p>Wage : 30,000</p>
          <img src="/public/man.svg" alt="man" height={100}/>
        </li>
        <li className="d-flex justify-content-between align-items-center m-3 p-3 border rounded shadow-sm">
          <p>Name : John</p>
          <p>Position : Manager</p>
          <p>Wage : 30,000</p>
          <img src="/public/man.svg" alt="man" height={100}/>
        </li>
      </ul>
    </>
  );
}
