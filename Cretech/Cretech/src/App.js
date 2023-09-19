import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';
import './assets/vendors/bootstrap/css/bootstrap.min.css'
import './assets/vendors/fontawesome/css/all.min.css'
import './assets/vendors/jarallax/jarallax.css'
import './assets/vendors/animate/animate.min.css'
import './assets/vendors/owl-carousel/assets/owl.carousel.min.css'
import './assets/vendors/owl-carousel/assets/owl.theme.default.min.css'
import './assets/vendors/cretech-icons/style.css'
import './assets/vendors/youtube-popup/youtube-popup.css'
import './assets/css/cretech.css'

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
