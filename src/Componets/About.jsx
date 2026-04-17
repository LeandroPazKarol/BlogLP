function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* TEXTO */}
        <div className="col-lg-6">
          <h2 className="fw-bold mb-3">Sobre mí</h2>

          <h4 className="">
            Karol Andrea Leandro Paz
          </h4>

          <p className="text-muted">
            Soy estudiante de Ingeniería de Software apasionada por el desarrollo web 
            y la creación de soluciones tecnológicas que aporten valor. Me interesa 
            combinar la programación con la educación, buscando siempre aprender 
            nuevas herramientas y mejorar mis habilidades en el desarrollo frontend 
            y backend.
          </p>

          <p className="text-muted">
            Me considero una persona responsable, creativa y con muchas ganas de 
            crecer profesionalmente, enfrentando nuevos retos y participando en 
            proyectos que me permitan seguir evolucionando en el mundo de la tecnología.
          </p>

          {/* HABILIDADES */}
          <div className="mt-3">
            <span className="badge bg-primary me-2">React</span>
            <span className="badge bg-secondary me-2">Java</span>
            <span className="badge bg-success me-2">MySQL</span>
            <span className="badge bg-dark me-2">HTML</span>
            <span className="badge bg-info text-dark me-2">CSS</span>
          </div>

          <button className="btn btn-outline-primary mt-3">
            Descargar CV
          </button>
        </div>

        {/* TARJETAS */}
        <div className="col-lg-6">
          <div className="row">

            <div className="col-md-6 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title"> Desarrollo Web</h5>
                  <p className="card-text">
                    Creación de aplicaciones web modernas con React.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title"> Educación</h5>
                  <p className="card-text">
                    Interés en enseñar y compartir conocimiento.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Proyectos</h5>
                  <p className="card-text">
                    Desarrollo de soluciones prácticas e innovadoras.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title"> Objetivo</h5>
                  <p className="card-text">
                    Crecer profesionalmente como ingeniera de software.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default About;