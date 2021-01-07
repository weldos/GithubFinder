import React, { useContext } from 'react'
import Useritem from './Useritem';
import Spinner from '../layout/Spinner'
import githubContext from "../../context/github/githubContext"



const Users = () => {
    const githubUseContext = useContext(githubContext);
    const {users, loading} = githubUseContext;
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>

                {users.map(user => (
                    // <div key={user.id}>{user.login}</div>
                    <Useritem key={user.id} user={user} />
                ))}
            </div>
        )
    }

}


const userStyle={
    display:'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'

}
export default Users
