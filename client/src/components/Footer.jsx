export default function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container text-center small">
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.github.com/meawdam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info text-decoration-none"
          >
            Meawdam
          </a>
        </p>
        <p>Styled with Bootstrap 5</p>
        <p>
          SVGs from{" "}
          <a
            href="https://www.svgrepo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info text-decoration-none"
          >
            svgrepo.com
          </a>
        </p>
      </div>
    </footer>
  );
}
