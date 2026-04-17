function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container">
        <div className="row">

          {/* INFO */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Karol Andrea</h5>
            <p className="text-muted">
              Estudiante de Ingeniería de Software apasionada por el desarrollo web y la tecnología.
            </p>
          </div>

          {/* ENLACES */}
          <div className="col-md-4 mb-3">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-light">Inicio</a></li>
              <li><a href="#" className="text-decoration-none text-light">Sobre mí</a></li>
              <li><a href="#" className="text-decoration-none text-light">Proyectos</a></li>
              <li><a href="#" className="text-decoration-none text-light">Contacto</a></li>
            </ul>
          </div>

          {/* REDES */}
          <div className="col-md-4 mb-3">
            <h5>Redes</h5>
            <a href="#" className="text-light me-3">Instagram</a>
            <a href="#" className="text-light me-3">Tik Tok</a>
            <a href="#" className="text-light me-3">Facebook</a>
            <a href="#" className="text-light me-3">WhatsApp</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;