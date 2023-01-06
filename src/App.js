import "./App.css";
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import Slider from './components/slider/Slider'
import Compare from './components/Compare/Compare'
import Products from './components/products/Products'
import View from './components/viewers/View'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Compare />
      <Products />
      <View />
      <Footer />
    </div>
  );
}

export default App;
