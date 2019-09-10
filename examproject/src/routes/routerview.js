import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

export default class Routerview extends Component {

    render() {
        const { routes } = this.props;
        let routeArr = routes.filter(item=> !item.redirect) ;
        let redirectArr = routes.filter(item=> item.redirect).map((item,index)=> 
            <Redirect form={item.path} key={index} to={item.redirect}/>)
        return (
            <Switch>
                {
                    routeArr && routeArr.map((item,index)=>{
                        if (item.path){
                            return <Route path={item.path} key={index} render={(props)=>{
                                if (item.children){
                                    return <item.component {...props} children={item.children}/>
                                }else{
                                    return <item.component {...props}/>
                                }
                            }}></Route>                            
                        }else if(item.children && item.children.length){
                            return item.children.map(item=> 
                                <Route path={item.path} render={(props)=><item.component {...props}/>}/>
                            )
                        }
                    }).concat(redirectArr)
                }
            </Switch>
        )
    }
}
