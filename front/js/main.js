document.getElementById('header').innerHTML = `<nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
<a class="navbar-brand" href="../front/index.html">
  <img class="primary-icon" src="../front/images/logo.jpg" width= "80" height="80"/>
</a>
<div class="collapse navbar-collapse" id="collapsibleNavId">
  <ul class="navbar-nav me-auto mt-2 mt-lg-0">
    <li class="nav-item">
      <a class="nav-link active" href="#" aria-current="page">Inicio<span class="visually-hidden">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://eldesinformado.netlify.app/index.html">Nuestra pagina de noticias</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
      <div class="dropdown-menu" aria-labelledby="dropdownId">
        <a class="dropdown-item" href="../front/productos.html">Revistas a la venta</a>
      </div>
    </li>
  </ul>
  <form class="d-flex my-2 my-lg-0">
    <input class="form-control me-sm-2" type="text" placeholder="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</div>
</nav>`