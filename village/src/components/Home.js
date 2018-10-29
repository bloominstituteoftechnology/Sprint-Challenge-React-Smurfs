import React from 'react'

const Home = props => {
    const routeToVillage = event => {
        event.preventDefault()
        props.history.push('/village')
    }
    return (
        <div className="Home">
        <div className="villageButtonDiv">
        <button className="villageButton" onClick={routeToVillage}>Enter Smurf Village</button>
        </div>
        
        </div>
    )
}

export default Home