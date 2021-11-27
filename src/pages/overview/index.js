import React from 'react'

import TopBar from './topBar'

class Overview extends React.Component {
    render() {
        return (
            <div className="overview">
                <TopBar/>
                <div className="content">content-area</div>
            </div>
        )
    }
}

export default Overview