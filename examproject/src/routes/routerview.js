import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

export default class Routerview extends Component {

    render() {
        const { routes } = this.props;
        let routeArr = routes.filter(item=> !item.redirect) || routes.children
        let redirectArr = routes.filter(item=> 
            item.redirect).map((item,index)=>
                <Redirect key={index} from={item.path} to={item.redirect}/>) 
        // console.log('redirectArr..................',redirectArr);
        console.log('routeArr....................',routeArr);
        return (
            <Switch>
                {
                    routeArr.length!=0 && routeArr.map((item,index)=><Route key={index} path={item.path } render={(props)=>{
                        // console.log('item.................',item)
                        if(item.component){
                           return <item.component {...props} children={item.children}/>;
                        }
                        return <Routerview routes = {item.children}/>
                    } }/>).concat(redirectArr) 
                }
            </Switch>
        )
    }
}
