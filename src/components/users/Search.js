import React, {useState, useContext} from 'react';
import githubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';




//functional component
const Search =()=> {

    
    const githubUseContext = useContext(githubContext);
    const alertContext = useContext(AlertContext);

    //Define state
    const [text, setText] = useState('')
 
  
    const onChange = (e) => {
        //this.setState({ [e.target.name]: e.target.value })
        setText(e.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light')
        } else {
            console.log(text);
            githubUseContext.searchUsers(text);
        }

    }

   
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

                {githubUseContext.users.length > 0 && (<button className="btn btn-light btn-block" onClick={githubUseContext.clearUsers}>Clear</button>)}

            </div>
        );
    
}



export default Search
