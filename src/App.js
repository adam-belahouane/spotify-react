import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicPlayer from './components/MusicPlayer';
import SideNav from './components/SideNav';
import Homepage from './components/HomePage';


function App() {
  return (
    <>
    <SideNav/>
    <Homepage/>

    <MusicPlayer/>
    </>
  );
}

export default App;
