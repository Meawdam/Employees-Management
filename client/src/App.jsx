import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Employees from "./components/Employees.jsx";
import Footer from "./components/Footer.jsx";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/employees");
      if (!response.ok) {
        throw new Error("Bad response from server");
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addEmployees = async (employee) => {
    try {
      const option = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      };
      const response = await fetch("http://localhost:3000/employees", option);
      if (!response.ok) throw await response.text;
      await fetchData();
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateWage = async (id, wage) => {
    try {
      const option = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id, wage}),
      };
      const response = await fetch(`http://localhost:3000/employees/${id}`, option);
      if (!response.ok) throw await response.text();
      await fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEm = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "DELETE",
      });
      const msg = await response.text();
      if (!response.ok) throw new Error(msg);
      await fetchData();
    } catch (error) {
      console.error(error.message);
    }
  };

  if (error) {
    return (
      <h1 className="container d-flex justify-content-center text-danger">
        ❌ Error: {error}
      </h1>
    );
  }

  if (!data) {
    return (
      <h1 className="container d-flex justify-content-center">Loading...</h1>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
        <Header />
        <hr />
      </div>

      <main className="flex-grow-1">
        <div className="container py-4">
          <Form onAdd={addEmployees} />
          <hr />
          <Employees data={data} onUpdate={updateWage} onDelete={deleteEm} />
        </div>
      </main>

      <footer className="bg-dark text-light p-5">
        <div className="container text-center">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
