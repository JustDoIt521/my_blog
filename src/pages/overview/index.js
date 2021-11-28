import React from 'react'

import TopBar from './topBar'

import ArticleList from '../articleList'
import AboutMe from '../aboutMe'

import { Switch, Route, Redirect} from 'react-router-dom'

class Overview extends React.Component {
    render() {
        return (
            <div className="overview">
                <TopBar/>
                <div className="content">
                    <Switch>
                        <Route path="/aboutMe" component={ AboutMe }></Route>
                        <Route path="/articleList" component={ ArticleList }></Route>
                        <Redirect from="/" to="/articleList"></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Overview