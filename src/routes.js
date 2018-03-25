import * as React from 'react'
import { Route } from 'react-router-dom'
import App from './App.js'

const renderComponent = (component) => {
  return React.createElement(component)
}

const PropsRoute = ({ component }) => {
  return <Route render={renderComponent(component)} />
}

export const routes = (props) => {
  return (
    <PropsRoute exact path='/' component={App} />
    // <PropsRoute path='/Profile' component={Profile} />
    // <PropsRoute path='/Host' component={HostanEvent} />
  )
}
