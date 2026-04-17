function NavBar() {
  return (
    <div className="container">
      <header className="border-bottom lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">

          <div className="col-4 pt-1">
            <a className="link-secondary" href="/">
              Subscribe
            </a>
          </div>

          <div className="col-4 text-center">
            <a
              className="blog-header-logo text-body-emphasis text-decoration-none"
              href="/"
            >
              Mi blog Personal
            </a>
          </div>

          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="link-secondary" href="/" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <path d="M21 21l-5.2-5.2"></path>
              </svg>
            </a>

            <a className="btn btn-sm btn-outline-secondary" href="/">
              Seguime
            </a>
          </div>

        </div>
      </header>

      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-between">

          <a className="nav-item nav-link active text-black" href="/">Inicio</a>
          <a className="nav-item nav-link text-black" href="/">Sobre Mi</a>
          <a className="nav-item nav-link text-black" href="/">Pasatiempos</a>
          <a className="nav-item nav-link text-black" href="/">Habilidades</a>
          <a className="nav-item nav-link text-black" href="/">Proyectos</a>
          <a className="nav-item nav-link text-black" href="/">Voluntariados</a>
          <a className="nav-item nav-link text-black" href="/">Aventuras</a>
          <a className="nav-item nav-link text-black" href="/">Redes Sociales</a>

        </nav>
      </div>
    </div>
  );
}

export default NavBar;