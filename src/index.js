import React from 'react'

import ReactDom from 'react-dom'

import { HashRouter as Router, Route } from 'react-router-dom'

import Overview from '@pages/overview/index.js'

ReactDom.render(
    <Router>
        <Route path="/" component={ Overview }></Route>
    </Router>,
    document.getElementById('root')
)