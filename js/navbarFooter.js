const navbar = document.getElementById("navbar");
const footer = document.getElementById("footer");

//Se crea un función para actualizar el navbar de manera dinámica según el estado del usuario, es decir, si ha iniciado sesión o no.

function actualizarNavbar() {
    const sesionIniciada = localStorage.getItem('sesionIniciada');
    const currentPage = window.location.pathname.split('/').pop();  // aquí se obtinee el nombre del archivo actual
    let navbarContent =`
    
    <link rel="stylesheet" href="./css/styles.css">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container" style="">
      <a class="navbar-brand" href="./index.html"><img src="./assets/LogoAkamika_fondo.png" style="max-width: 95px;" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg">
          <li class="nav-item">
            <a class="nav-link  ${currentPage === 'index.html' ? 'active' : ''}" aria-current="page" href="./index.html">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${currentPage === 'cremas.html' ? 'active' : ''}"   href="./cremas.html">Cremas artesanales</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${currentPage === 'shampoo.html' ? 'active' : ''}" href="./shampoo.html">Shampoo artesanal</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle ${currentPage === 'jabones.html' ? 'active' : ''}" href="./jabones.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Jabones Artesanales
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item ${currentPage === 'jabones.html' ? 'active' : ''}" href="./jabones.html">Exfoliantes</a></li>
              <li><a class="dropdown-item ${currentPage === 'jabones.html' ? 'active' : ''}" href="./jabones.html">Faciales</a></li>
              <li><a class="dropdown-item ${currentPage === 'jabones.html' ? 'active' : ''}" href="./jabones.html">Corporal</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item ${currentPage === 'jabones.html' ? 'active' : ''}" href="./jabones.html">De temporada</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link ${currentPage === 'contactanos.html' ? 'active' : ''}" href="./contactanos.html">Contáctanos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${currentPage === 'terapia.html' ? 'active' : ''}" href="./terapia.html">Terapia Belleza Facial</a>
          </li>

          <li class="nav-item">
            <a class="nav-link ${currentPage === 'carrito.html' ? 'active' : ''}" href="./carrito.html"><img src="./assets/carrito-de-compras.png" alt="" class="icon-carrito"></a>
          </li>
        `;
           

        if (sesionIniciada) {
            navbarContent += `
                <div class="dropdown">
                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person-circle"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" id="logoutButton" href="#">Cerrar sesión</a></li>
                    </ul>
                </div>`;
        } else {
            navbarContent += `
                <a href="./iniciosesion.html"><img src="./assets/acceso.png" style="margin-top: 7px; margin-bottom: 7px; margin-right: 7px; margin-left: 7px"  alt="" class="icon-carrito" </a>
                `;
        }
    
        navbarContent += `</ul></div></div></div></nav>`;
    
        navbar.innerHTML = navbarContent;
    
        // Evento para cerrar sesión
        if (sesionIniciada) {
            document.getElementById('logoutButton').addEventListener('click', () => {
                localStorage.removeItem('sesionIniciada');
                actualizarNavbar(); // Actualiza el navbar
                Swal.fire({
                    title: 'Sesión cerrada',
                    text: 'Has cerrado sesión correctamente.',
                    icon: 'info',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = './index.html'; // Redirigir a la página de inicio
                });
            });
        }
    
}

// Llama a actualizarNavbar al cargar la página
document.addEventListener('DOMContentLoaded', actualizarNavbar);

footer.insertAdjacentHTML("beforeend", `
        <footer class="footer">
        <div class="containerfooter">
            <div class="footer-row">
                <div class="footer-links">
                    
                    <ul>
                      <h4>Akami-Ka</h4>
                        <li><a href="./index.html">Nosotros</a></li>
                        <li><a href="./cremas.html">Nuestros Productos</a></li>
                        <li><a href="./contactanos.html">Contáctanos</a></li>
                        <li><a href="./politicaprivacidad.html">Política de Privacidad</a><li></li>
                    </ul>
                </div>      

                <div class="footer-links">
                    
                    <ul>
                      <h4>Ayuda</h4>
                        <li><a href="./carrito.html">Compras</a></li>
                        <li><a href="./carrito.html">Estatus de orden</a></li>
                        <li><a href="./carrito.html">Pago</a></li>
                    </ul>
                </div> 
                
                <div class="footer-links">
                    
                    <ul>
                      <h4>Tienda</h4>
                        <li><a href="./cremas.html">Cremas naturales</a></li>
                        <li><a href="./jabones.html">Jabones artesanales</a></li>
                        <li><a href="./shampoo.html">Shampoo</a></li>
                    </ul>
                </div>      

                <div class="footer-links">
                    <div class="social-links">
                      <ul>
                        <h4>Siguenos</h4>
                        <li style="display:flex; justify-content: center;">
                          <a href="https://wa.me/15520629274?text=¡Hola,%20Quiero%20más%20información%20acerca%20de%20tus%20productos%20artesanales.%20En%20especial%20sobre:%20...!"><img  src="./assets/whatsapp_bn.png" class="icon-link" alt=""></a>
                        <a href=""><img  src="./assets/facebook_bn.png" class="icon-link" alt=""></a>
                        <a href=""><img  src="./assets/youtube_bn.png" class="icon-link" alt=""></a>
                        <a href=""><img  src="./assets/instagram_bn.png" class="icon-link" alt=""></a>
                      </li>
                    </ul>
                      
                        
                    </div>
                </div>      
            </div>
        </div>
    </footer>`)