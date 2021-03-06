import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
export default class Routerview extends Component {

    render() {
        const { routes } = this.props
        return (
            <Switch>
                {routes.map((item, index) => {
                    if (!item.redirect) {
                        return <Route key={index} path={item.path} render={(props) => {
                            return <item.component path={item.children} {...props}></item.component>
                        }}></Route>
                    } else {
                        return <Redirect from={item.path} to={item.redirect} key={index}></Redirect>
                    }
                })}
            </Switch>
        )
    }
}
