function Contact() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Contáctame</h2>

      {/* 🎠 CAROUSEL */}
      <div
        id="carouselContact"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner text-center">

          <div className="carousel-item active">
            <h4 className=""> Desarrollo Web con pasión</h4>
          </div>

          <div className="carousel-item">
            <h4 className="text-success"> Siempre aprendiendo nuevas tecnologías</h4>
          </div>

          <div className="carousel-item">
            <h4 className="text-danger"> Buscando crecer profesionalmente</h4>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselContact"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselContact"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* 💳 REDES */}
      <div className="row text-center">

        {/* EMAIL */}
        <div className="col-md-4 mb-3">
          <div className="card shadow h-100 border-0">
            <div className="card-body">
              <h5>Email</h5>
              <p className="text-muted">karol@example.com</p>
              <a href="mailto:karol@example.com" className="btn btn-primary">
                Escribir
              </a>
            </div>
          </div>
        </div>

        {/* LINKEDIN */}
        <div className="col-md-4 mb-3">
          <div className="card shadow h-100 border-0">
            <div className="card-body">
              <h5>LinkedIn</h5>
              <p className="text-muted">Conecta conmigo</p>
              <a href="#" className="btn btn-primary">
                Ver perfil
              </a>
            </div>
          </div>
        </div>

        {/* GITHUB */}
        <div className="col-md-4 mb-3">
          <div className="card shadow h-100 border-0">
            <div className="card-body">
              <h5> GitHub</h5>
              <p className="text-muted">Mira mis proyectos</p>
              <a href="#" className="btn btn-primary">
                Ver repos
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Contact;