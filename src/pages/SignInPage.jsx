import React from 'react';

const SignInPage = () => {

    return(
        <div className="container text-center py-5">

            <div className="row d-flex justify-content-center">

                <div className="col-sm-4 shadow p-3 mb-5 bg-white rounded">

                    <h1 className="h3 my-3 fw-normal">Sign In</h1>

                    <p className="text-muted">Sign Up with your social media account</p>
                    
                    <div className="my-3">
                        <a href={`${process.env.REACT_APP_API_URL}/auth/facebook`} className="btn btn-primary">
                            <i className="bi bi-facebook me-3"></i> 
                            Sign Up with Facebook
                        </a>
                    </div>

                    <div className="my-3">
                        <a href={`${process.env.REACT_APP_API_URL}/auth/google`} className="btn btn-danger">
                            <i className="bi bi-google me-3"></i>
                            Sign Up with Google
                        </a>
                    </div>

                </div>

            </div>
  
        </div>
    )

}

export default SignInPage;