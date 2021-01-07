import React, { Fragment, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import githubContext from '../../context/github/githubContext'

const Singleuser =({ match }) => {
    const githubUseContext = useContext(githubContext);

    const {userdetails, getUser} =  githubUseContext
    
    useEffect(() => {
        getUser(match.params.login);
        console.log(match.params.login)    
    }, [])
    
        const{avatar_url, hireable , name ,  location , bio, html_url, login , company , blog, followers, following}= userdetails;
        return (
                <Fragment>
                    <Link to="/" className="btn btn-light ">Back to search</Link>
                    Hireable:{' '}
                    {hireable?<i className='fas fa-check text-success'></i>:<i className='fas fa-times-circle text-danger'></i>}

                    {/* 2nd Row */}

                    <div className="card grid-2">

                        {/* 1st Column */}
                        <div className="all centre">
                            <img src={avatar_url} className="round-img" style= {{width:'150px'}} alt="" />
                            <h1>{name}</h1>
                            
                            <ul>
                                <li>
                                    {location &&(
                                        <Fragment>
                                        <strong>Location: </strong>
                                        {location}
                                        </Fragment>
                                    )}
                                </li>
                                <li>
                                    {following &&(
                                        <Fragment>
                                        <strong>Following: </strong>
                                        {following}
                                        </Fragment>
                                    )}
                                </li>
                                <li>
                                    {followers &&(
                                        <Fragment>
                                        <strong>Followers: </strong>
                                        {followers}
                                        </Fragment>
                                    )}
                                </li>

                            </ul>

                         </div>
                    
                        



                        {/* 2nd Column */}
                    
                            {/*Bio*/}
                            <div>
                                {bio && (
                                    <Fragment>
                                        <h3>Bio</h3>
                                        <p>{bio}</p>
                                    </Fragment>
                                )}

                            
                            
                                
                                <ul>
                                    {/*username*/}
                                    <li>
                                        {login &&(
                                            <Fragment>
                                            <strong>Username: </strong>
                                            {login}
                                        </Fragment>
                                    )}
                                    </li>


                                    {/*company*/}   
                                    <li>
                                        {company &&(
                                            <Fragment>
                                            <strong>Company: </strong>
                                            {company}
                                        </Fragment>
                                    )}
                                    </li>  


                                    {/*Blog*/}
                                    <li>
                                        {blog &&(
                                            <Fragment>
                                            <strong>Blog: </strong>
                                            {blog}
                                        </Fragment>
                                    )}
                                    </li>  
                                
                                    {/*Visiting Profile Button*/}
                                    <a href={html_url} className="btn btn-dark"> Visit Github Profile</a>
                                
                                 </ul>
                    
                    
                            </div>
                    </div>      
                    
                    
                </Fragment>
            
        )
    
}

export default Singleuser
