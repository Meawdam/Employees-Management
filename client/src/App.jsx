import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Employees from "./components/Employees.jsx";
import Footer from "./components/Footer.jsx";

function App() {
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
          <Employees />
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
