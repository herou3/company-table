import React from "react"
import Users from "./components/layouts/users"
import Login from "./components/layouts/login"
import Home from "./components/layouts/home"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/navBar"

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={Users} />
      </Switch>
    </div>
  )
}

export default App
