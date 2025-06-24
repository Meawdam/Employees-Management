import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Employees from "./components/Employees.jsx";
import Footer from "./components/Footer.jsx";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // ✅ เพิ่ม error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://aes.shenlu.me/api/v1/species");
        if (!response.ok) {
          throw new Error("Bad response from server");
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <h1 className="container d-flex justify-content-center text-danger">❌ Error: {error}</h1>;
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
          <Form />
          <hr />
          <Employees data={data} />
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
