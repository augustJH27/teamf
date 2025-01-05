import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/layout/Navbar';
import Homepage from './components/layout/Homepage';
import MovieDetails from './components/movies/MovieDetails';
import SearchMovie from './components/search/SearchMovie';
import AboutPage from './components/layout/AboutPage';
import Login from './components/user/Login';
import Footer from './components/layout/Footer';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/milan-tv/:id" component={MovieDetails} />
        <Route path="/search" component={SearchMovie} />
        <Route path="/Account" component={Login} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;