import CartWidget from "../CartWidget/CartWidget";
function NavBar()
{
    return (
                <section className="hero is-primary is-medium">
                        <div className="hero-head">
                          <nav className="navbar">
                            <div className="container">
                              <div className="navbar-brand">
                                  <h1 className="title is-1">Ecomerce pre-entrega1</h1>
                                <span className="navbar-burger" data-target="navbarMenuHeroA">
                                </span>
                              </div>
                              <div id="navbarMenuHeroA" className="navbar-menu">
                                <div className="navbar-end">
                                  <a className="navbar-item is-active">
                                    Celulares
                                  </a>
                                  <a className="navbar-item">
                                    Tablets
                                  </a>
                                  <a className="navbar-item">
                                    Notebooks
                                  </a>
                                </div>
                              </div>
                            </div>
                          </nav>
                        </div>
                    <CartWidget/>
                </section>
             );
}

export default NavBar