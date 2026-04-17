function Projects() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Mis Proyectos</h2>

      <div className="row">

        {/* PROYECTO 1 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://www.lawebdelprogramador.com/usr/43000/43585/56348c932ead2-codigo-sistema-matricula-VB-2010-2.png"
              className="card-img-top"
              alt="Sistema de matrícula"
            />
            <div className="card-body">
              <h5 className="card-title">Sistema de Matrícula</h5>
              <p className="card-text">
                Aplicación para gestionar matrículas escolares usando Java y estructuras de datos.
              </p>

              <button className="btn btn-primary me-2">
                Ver proyecto
              </button>

              <button className="btn btn-outline-secondary">
                Código
              </button>
            </div>
          </div>
        </div>

        {/* PROYECTO 2 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://sebastianpendino.com/wp-content/uploads/2017/01/web-travel-agency-agencia-de-viajes-online.png"
              className="card-img-top"
              alt="Página de turismo"
            />
            <div className="card-body">
              <h5 className="card-title">Página de Turismo</h5>
              <p className="card-text">
                Sitio web interactivo con mapa turístico y sistema de usuarios.
              </p>

              <button className="btn btn-primary me-2">
                Ver proyecto
              </button>

              <button className="btn btn-outline-secondary">
                Código
              </button>
            </div>
          </div>
        </div>

        {/* PROYECTO 3 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://www.trecebits.com/wp-content/uploads/2020/09/Recetas-de-bebidas-745x445.jpg"
              className="card-img-top"
              alt="App juguería"
            />
            <div className="card-body">
              <h5 className="card-title">App para Juguería</h5>
              <p className="card-text">
                Aplicación móvil desarrollada con enfoque en experiencia de usuario.
              </p>

              <button className="btn btn-primary me-2">
                Ver proyecto
              </button>

              <button className="btn btn-outline-secondary">
                Código
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;