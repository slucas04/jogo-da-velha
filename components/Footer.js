const Footer = () => {
    return (
      <footer 
        className="mt-auto d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mb-0"
        style={{
          backgroundColor: "#28242c",
          color: "#fff",
          padding: "1rem"
        }}
      >
        <div className="col-md-4 d-flex align-items-center">
          <a 
            href="/" 
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img src='/img/logo.png' alt="Logo" />
          </a>
          <p style={{ color: "white", marginTop: "1rem" }}>
            © 2025 Samuel Lucas
          </p>
        </div>
  
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="https://github.com/slucas04">
              <img className="bi" width="24" height="24" src="/img/github.png" alt="GitHub" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://www.linkedin.com/in/samuellucas-dev/">
              <img className="bi" width="24" height="24" src="/img/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="mailto:slucas0730@gmail.com">
              <img className="bi" width="24" height="24" src="/img/gmail.png" alt="Gmail" />
            </a>
          </li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;
  