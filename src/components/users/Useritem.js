import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Useritem=({user:{login, avatar_url}})=> {
  
     return (
        <div className="card text-center">
            <img src={avatar_url} 
                alt="User Image" 
                className='round-img'
                style= {{backgroundColor:'red'}}/>
            <h3>{login}</h3>
            <div>
                <Link to={`/users/${login}`}
                    className="btn btn-dark btn-sm my-1">More
                </Link>
            </div>
        </div>
    )
}
 
       


Useritem.propTypes={
    user: PropTypes.object.isRequired, 
}
export default Useritem