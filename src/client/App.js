import React, {Fragment} from 'react'
// import "./css/App.css"
import {Header, Content, Footer} from './Components'

export default class App extends React.Component{
    render(){
        return(
            <Fragment>
                <Header/>
                <Content/>
                <Footer/>
            </Fragment>
        )
    }
}