import { Router, Route, Switch } from 'wouter';
import Home from './pages/Home';
import Aboutus from './pages/AboutUs';
import Navigation from './widgets/Navigation';
import Footer from './widgets/Footer';
import SingleProduct from './pages/SingleProduct';

function AppRouting() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nosotros" component={Aboutus} />
        <Route path="/carrito" component={Aboutus} />
        <Route path="/producto/:id" component={SingleProduct} />
        <Route path="/pedidos" component={Aboutus} />
        <Route path="/perfil" component={Aboutus} />
        <Route path="/promociones" component={Aboutus} />
        <Route path="/login" component={Aboutus} />
        <Route path="/register" component={Aboutus} />
      </Switch>

      <Footer />
    </Router>

    /*
      #######################################
      # Jc Johan desarrollo ésta aplicación #
      #######################################
    */

  );
}

export default AppRouting;
