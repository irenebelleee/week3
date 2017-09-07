import React from 'react'
import world from './world.jpg'

class Inspiration extends React.Component {

    render () {
        return(
            <div>
                <h1> English connects the world together </h1>
                <img src={world} className="center"/>
            </div>

        )
    }
}

export default Inspiration