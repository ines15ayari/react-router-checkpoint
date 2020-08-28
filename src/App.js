import React from 'react'
import Home from './Home'
import { Route,Switch,Link } from 'react-router-dom';
import MovieTeaser from './components/MovieTeaser'


export default function App() {
    return (
        <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={MovieTeaser} />
      </Switch>
        </div>
    )
}
