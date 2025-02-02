import React from 'react';
const Landing = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <div className="row w-100">
        {/* Heading Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
          <h1 className="display-4 fw-bold mb-3 fs-6rem" style={{color:'blueviolet'}}>
            Quiz Time
          </h1>
          <p className="lead text-muted fs-3">
            Test your knowledge, challenge yourself, and have fun!
          </p>
          
        </div>

        {/* Image Section */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img 
            src="/qiztime.gif" 
            alt="Rocket" 
            className="img-fluid"  
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
