import React, {Fragment} from 'react';


const PageError = () => {

  
    return (
        <Fragment>
            <h1 className="text-primary x-large">
                <i className="fas fa-exclamation-circle"></i> Error: Page Not Found!
            </h1>
            <p clasName="large"> UH OH! 404 Error - Page not found. Click the button to go back to safety &nbsp; &nbsp; <a href="./" className="btn btn-dark"> Go Back Home!</a></p> 
        </Fragment>
    );
};


export default PageError