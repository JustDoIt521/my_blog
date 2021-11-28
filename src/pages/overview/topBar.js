import React  from "react";

import { Link } from 'react-router-dom'

class TopBar extends React.Component {
    render() {
        return (
            <div className="topBar">
                <Link to={"/articleList"}>articleList</Link>
                <Link to={"/aboutMe"}>forme</Link>
            </div>
        )
    }
}

export default TopBar