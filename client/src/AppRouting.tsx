import { Router, Route, Switch } from 'wouter';
import Home from './pages/Home';
import Aboutus from './pages/AboutUs';
import Navigation from './widgets/Navigation';
import Footer from './widgets/Footer';
import SingleProduct from './pages/SingleProduct';
import Promotions from './pages/Promotions';
import PageNotFound from './pages/PageNotFound';
import Categories from './pages/Categories';
import SingleCategory from './pages/SingleCategory';
import Login from './pages/Login';
import Register from './pages/Register';
import Myaccount from './pages/MyAccount';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function AppRouting() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nosotros" component={Aboutus} />
        <Route path="/carrito" component={Cart} />
        <Route path="/producto/:id" component={SingleProduct} />
        <Route path="/pedidos" component={Orders} />
        <Route path="/contacto" component={Contact} />
        <Route path="/cuenta" component={Myaccount} />
        <Route path="/promociones" component={Promotions} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/categorias" component={Categories} />
        <Route path="/categorias/:id" component={SingleCategory} />
        <Route component={PageNotFound} />
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
