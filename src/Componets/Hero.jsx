import foto from '../assets/IMG-20240414-WA0046.jpg';

function Hero() {
  return (
    <div className="container">
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        
        <div className="row align-items-center">

          <div className="col-lg-6">
            <h1 className="display-4 fst-italic">
              Karol Andrea Leandro Paz
            </h1>

            <p className="lead my-3">
              Soy estudiante de Ingeniería de Software | Desarrollo Web | Educación | UTP
            </p>

            <p className="lead mb-0">
              <button className="btn btn-link text-body-emphasis fw-bold p-0">
                Conóceme un poco más...
              </button>
            </p>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src={foto}
              alt="perfil"
              className="img-fluid rounded"
              style={{ maxHeight: "400px" }}
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;