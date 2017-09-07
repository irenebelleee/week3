import React from 'react'
import chart from './chart.png'

class Research extends React.Component {

    render () {
        return(
            <div>
                <h1> Research</h1>
                <h2> from 300 surveys </h2>
                <img src={chart} className="center"/>
            </div>

        )
    }
}

export default Research