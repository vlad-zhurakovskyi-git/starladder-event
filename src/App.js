import Header from "./components/Header";
import './styles/common.scss'
import Banner from "./components/Banner";
import Events from "./components/Events";

function App() {
  return (
    <div className="page">
      <Header/>
      <Banner/>
      <Events/>
    </div>
  );
}

export default App;
