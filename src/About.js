import React from 'react'
import moma from './moma.jpg'

class About extends React.Component {

    render () {
        return(
        <div>
            <h1> Are you too shy to speak English? </h1>
            <img src={moma} className="center"/>
        </div>

        )
    }
}

export default About