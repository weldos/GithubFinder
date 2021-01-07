import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <h1>About React</h1>
            <p>App to search Github Users</p>
            <strong> Version 2.0</strong>

            <div className="card grid-1">
            
                <h3>Changelog:</h3> 
                <p><strong>v1.0 - </strong> Initial Site</p>
                <p><strong>v2.0 - </strong> All 'Class Based Components' have been changed into 'Functional Components' using react hooks</p>
                
            </div>
        </Fragment>
    )
}

export default About