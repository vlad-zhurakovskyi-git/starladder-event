import Header from "./components/Header";
import './styles/common.scss'
import Banner from "./components/Banner";
import Card from "./components/Card";

const matches = [
  {
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'matches',
    status: 'live',
    partner: 'ggbet',
    system: 'bo 3',
    firstTeam: {
      logo: 'albert-warren',
      name: 'Albert Warren',
      outcome: '3.22'
    },
    secondTeam: {
      logo: 'glori-henry',
      name: 'Gloria Henry',
      outcome: '53.22'
    },
  }
];

function App() {
  return (
    <div className="page">
      <Header/>
      <Banner/>
      {
        matches.map((item) => (
          <Card item={item}/>
        ))
      }
      <Card />
    </div>
  );
}

export default App;
