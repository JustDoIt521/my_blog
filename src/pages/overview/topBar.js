import React  from "react";

import { Link } from 'react-router-dom'

class TopBar extends React.Component {
    render() {
        return (
            <div className="topBar">
                <Link to="/articleList"></Link>
                <Link tp="forMe"></Link>
            </div>
        )
    }
}

export default TopBar