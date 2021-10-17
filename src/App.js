import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicPlayer from './components/MusicPlayer';
import SideNav from './components/SideNav';
import Homepage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AlbumPage from './components/AlbumPage';


function App() {
  return (
    <>
    <Router>
    <SideNav/>
      <Switch>
        <Route path="/homepage" component={Homepage} />
        <Route path="/album/:albumId" component={AlbumPage}/>
        <Route path="/artist/:artistId" />
        <Route render={() => <Redirect to="/homepage" />} />
       </Switch>
    <MusicPlayer/>
    </Router>
    

    </>
  );
}

export default App;
