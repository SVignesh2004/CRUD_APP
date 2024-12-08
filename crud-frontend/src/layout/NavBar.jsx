import { Link } from "react-router-dom"


function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">FullStack CRUD_Operation</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <Link className="btn text-bg-primary btn-btn-outline-light" to="/adduser">ADD USER</Link>
  </div>
</nav>
    </div>
  )
}

export default NavBar