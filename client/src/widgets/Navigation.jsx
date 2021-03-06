import { useEffect } from "react";
import "../styles/_widgetNavigation.css";
import { Link } from "wouter";

const Navigation = () => {
  useEffect(() => {
    const btnDepartamentos = document.getElementById("btn-departamentos"),
      btnCerrarMenu = document.getElementById("btn-menu-cerrar"),
      grid = document.getElementById("grid"),
      contenedorEnlacesNav = document.querySelector(
        "#menu .contenedor-enlaces-nav"
      ),
      contenedorSubCategorias = document.querySelector(
        "#grid .contenedor-subcategorias"
      ),
      esDispositivoMovil = () => window.innerWidth <= 800;

    btnDepartamentos.addEventListener("mouseover", () => {
      if (!esDispositivoMovil()) {
        grid.classList.add("activo");
      }
    });

    grid.addEventListener("mouseleave", () => {
      if (!esDispositivoMovil()) {
        grid.classList.remove("activo");
      }
    });

    document.querySelectorAll("#menu .categorias a").forEach((elemento) => {
      elemento.addEventListener("mouseenter", (e) => {
        if (!esDispositivoMovil()) {
          document
            .querySelectorAll("#menu .subcategoria")
            .forEach((categoria) => {
              categoria.classList.remove("activo");
              if (categoria.dataset.categoria === e.target.dataset.categoria) {
                categoria.classList.add("activo");
              }
            });
        }
      });
    });

    // EventListeners para dispositivo movil.
    document
      .querySelector("#btn-menu-barras")
      .addEventListener("click", (e) => {
        e.preventDefault();
        if (contenedorEnlacesNav.classList.contains("activo")) {
          contenedorEnlacesNav.classList.remove("activo");
          document.querySelector("body").style.overflow = "visible";
        } else {
          contenedorEnlacesNav.classList.add("activo");
          document.querySelector("body").style.overflow = "hidden";
        }
      });

    // Click en boton de todos los departamentos (Para version movil).
    btnDepartamentos.addEventListener("click", (e) => {
      e.preventDefault();
      grid.classList.add("activo");
      btnCerrarMenu.classList.add("activo");
    });

    // Boton de regresar en el menu de categorias
    document
      .querySelector("#grid .categorias .btn-regresar")
      .addEventListener("click", (e) => {
        e.preventDefault();
        grid.classList.remove("activo");
        btnCerrarMenu.classList.remove("activo");
      });

    document.querySelectorAll("#menu .categorias a").forEach((elemento) => {
      elemento.addEventListener("click", (e) => {
        if (esDispositivoMovil()) {
          contenedorSubCategorias.classList.add("activo");
          document
            .querySelectorAll("#menu .subcategoria")
            .forEach((categoria) => {
              categoria.classList.remove("activo");
              if (categoria.dataset.categoria === e.target.dataset.categoria) {
                categoria.classList.add("activo");
              }
            });
        }
      });
    });

    // Boton de regresar en el menu de categorias
    document
      .querySelectorAll("#grid .contenedor-subcategorias .btn-regresar")
      .forEach((boton) => {
        boton.addEventListener("click", (e) => {
          e.preventDefault();
          contenedorSubCategorias.classList.remove("activo");
        });
      });

    btnCerrarMenu.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll("#menu .activo").forEach((elemento) => {
        elemento.classList.remove("activo");
      });
      document.querySelector("body").style.overflow = "visible";
    });
  }, []);

  return (
    <nav className="menu" id="menu">
      <div className="contenedor contenedor-botones-menu">
        <button id="btn-menu-barras" className="btn-menu-barras">
          <i className="fas fa-bars" />
        </button>
        <button id="btn-menu-cerrar" className="btn-menu-cerrar">
          <i className="fas fa-times" />
        </button>
      </div>
      <div className="contenedor contenedor-enlaces-nav">
        <div className="btn-departamentos" id="btn-departamentos">
          <p>
            Todos los <span>Departamentos</span>
          </p>
          <i className="fas fa-caret-down" />
        </div>
        <div className="enlaces">
          <Link href="/">
            <a>Inicio</a>
          </Link>

          <Link href="/nosotros">
            <a>Nosotros</a>
          </Link>

          <Link href="/promociones">
            <a>Promociones</a>
          </Link>

          <Link href="/contacto">
            <a>Cont??ctanos</a>
          </Link>
        </div>
      </div>
      <div className="contenedor contenedor-grid">
        <div className="grid" id="grid">
          <div className="categorias">
            <button className="btn-regresar">
              <i className="fas fa-arrow-left" /> Regresar
            </button>
            <h3 className="subtitulo">Categorias</h3>

            <Link href="/categorias/1">
              <a href="#" data-categoria="tecnologia-y-computadoras">
                Su??teres <i className="fas fa-angle-right" />
              </a>
            </Link>

            <Link href="/categorias/2">
              <a href="#" data-categoria="libros">
                Joggers <i className="fas fa-angle-right" />
              </a>
            </Link>

            <Link href="/categorias/3">
              <a href="#" data-categoria="ropa-y-accesorios">
                Shorts <i className="fas fa-angle-right" />
              </a>
            </Link>

            <Link href="/categorias/4">
              <a href="#" data-categoria="hogar-y-cocina">
                Crop Tops <i className="fas fa-angle-right" />
              </a>
            </Link>

            <Link href="/categorias/5">
              <a href="#" data-categoria="juegos-y-juguetes">
                Conjuntos <i className="fas fa-angle-right" />
              </a>
            </Link>

            <Link href="/categorias/6">
              <a href="#" data-categoria="salud-y-belleza">
                Franelas <i className="fas fa-angle-right" />
              </a>
            </Link>

            <Link href="/categorias/7">
              <a href="#" data-categoria="alimentos-y-bebidas">
                Gorras <i className="fas fa-angle-right" />
              </a>
            </Link>
          </div>
          <div className="contenedor-subcategorias">
            <div
              className="subcategoria "
              data-categoria="tecnologia-y-computadoras"
            >
              <div className="enlaces-subcategoria">
                <button className="btn-regresar">
                  <i className="fas fa-arrow-left" />
                  Regresar
                </button>
                <h3 className="subtitulo">Su??teres</h3>

                <a href="#">Hombres</a>
                <a href="#">Damas</a>
                <a href="#">Ni??os</a>
              </div>
              <div className="banner-subcategoria">
                <a href="#">
                  <img src="/img/tecnologia-banner-1.png" alt="" />
                </a>
              </div>
              <div className="galeria-subcategoria">
                <a href="#">
                  <img src="/img/tecnologia-galeria-1.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/tecnologia-galeria-2.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/tecnologia-galeria-3.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/tecnologia-galeria-4.png" alt="" />
                </a>
              </div>
            </div>
            <div className="subcategoria" data-categoria="libros">
              <div className="enlaces-subcategoria">
                <button className="btn-regresar">
                  <i className="fas fa-arrow-left" />
                  Regresar
                </button>

                <h3 className="subtitulo">Joggers</h3>

                <a href="#">Top Sellers</a>
                <a href="#">...</a>
                <a href="#">...</a>
                <a href="#">...</a>
              </div>

              <div className="banner-subcategoria">
                <a href="#">
                  <img src="/img/libros-banner-1.png" alt="" />
                </a>
              </div>

              <div className="galeria-subcategoria">
                <a href="#">
                  <img src="/img/libros-galeria-1.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/libros-galeria-2.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/libros-galeria-3.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/libros-galeria-4.png" alt="" />
                </a>
              </div>
            </div>

            <div className="subcategoria" data-categoria="ropa-y-accesorios">
              <div className="enlaces-subcategoria">
                <button className="btn-regresar">
                  <i className="fas fa-arrow-left" />
                  Regresar
                </button>

                <h3 className="subtitulo">Shorts</h3>

                <a href="#">Ropa</a>
                <a href="#">Zapatos</a>
                <a href="#">Accesorios</a>
                <a href="#">Relojes</a>
              </div>
              <div className="banner-subcategoria">
                <a href="#">
                  <img src="/img/ropa-banner-1.png" alt="" />
                </a>
              </div>
              <div className="galeria-subcategoria">
                <a href="#">
                  <img src="/img/ropa-galeria-1.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/ropa-galeria-2.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/ropa-galeria-3.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/ropa-galeria-4.png" alt="" />
                </a>
              </div>
            </div>
            <div className="subcategoria" data-categoria="hogar-y-cocina">
              <div className="enlaces-subcategoria">
                <button className="btn-regresar">
                  <i className="fas fa-arrow-left" />
                  Regresar
                </button>
                <h3 className="subtitulo">Crop Tops</h3>
                <a href="#">...</a>
                <a href="#">...</a>
                <a href="#">...</a>
              </div>
              <div className="banner-subcategoria">
                <a href="#">
                  <img src="/img/hogar-banner-1.png" alt="" />
                </a>
              </div>
              <div className="galeria-subcategoria">
                <a href="#">
                  <img src="/img/hogar-galeria-1.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/hogar-galeria-2.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/hogar-galeria-3.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/hogar-galeria-4.png" alt="" />
                </a>
              </div>
            </div>
            <div className="subcategoria" data-categoria="juegos-y-juguetes">
              <div className="enlaces-subcategoria">
                <button className="btn-regresar">
                  <i className="fas fa-arrow-left" />
                  Regresar
                </button>
                <h3 className="subtitulo">Conjuntos</h3>
                <a href="#">Hombres</a>
                <a href="#">Mujeres</a>
                <a href="#">Ni??os</a>
              </div>
              <div className="banner-subcategoria">
                <a href="#">
                  <img src="/img/juegos-banner-1.png" alt="" />
                </a>
              </div>
              <div className="galeria-subcategoria">
                <a href="#">
                  <img src="/img/juegos-galeria-1.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/juegos-galeria-2.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/juegos-galeria-3.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/juegos-galeria-4.png" alt="" />
                </a>
              </div>
            </div>
            <div className="subcategoria" data-categoria="salud-y-belleza">
              <div className="enlaces-subcategoria">
                <button className="btn-regresar">
                  <i className="fas fa-arrow-left" />
                  Regresar
                </button>
                <h3 className="subtitulo">Franelas</h3>
                <a href="#">Hombres</a>
                <a href="#">Mujeres</a>
                <a href="#">Ni??os</a>
              </div>
              <div className="banner-subcategoria">
                <a href="#">
                  <img src="/img/belleza-banner-1.png" alt="" />
                </a>
              </div>
              <div className="galeria-subcategoria">
                <a href="#">
                  <img src="/img/belleza-galeria-1.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/belleza-galeria-2.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/belleza-galeria-3.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/belleza-galeria-4.png" alt="" />
                </a>
              </div>
            </div>
            <div className="subcategoria" data-categoria="alimentos-y-bebidas">
              <div className="enlaces-subcategoria">
                <button className="btn-regresar">
                  <i className="fas fa-arrow-left" />
                  Regresar
                </button>
                <h3 className="subtitulo">Gorras</h3>
                <a href="#">Planas</a>
                <a href="#">...</a>
              </div>
              <div className="banner-subcategoria">
                <a href="#">
                  <img src="/img/comida-banner-1.png" alt="" />
                </a>
              </div>
              <div className="galeria-subcategoria">
                <a href="#">
                  <img src="/img/comida-galeria-1.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/comida-galeria-2.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/comida-galeria-3.png" alt="" />
                </a>
                <a href="#">
                  <img src="/img/comida-galeria-4.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
