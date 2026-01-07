import React from 'react';

 function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm'>
            <div className='container'>
                
                <a className='navbar-brand fw-bold' href = "/">
                    DevCollab
                </a>

                <button 
                   className='navbar-toggler'
                   type = "button"
                   data-bs-toggle = "collapse"
                   data-bs-target = "#devcollabNavbar"
                   >
                    <span className='navbar-toggler-icon'></span>
                   </button>

                   <div className='collapse navbar-collapse' id = "devcollabNavbar">
                    <div className = "ms-auto d-flex gap-2 mt-3 mt-lg-0">
                        <button className='btn btn-outline-primary'>
                            Login
                        </button>

                        <button className='btn btn-primary'>
                            Sign Up
                        </button>
                    </div>
                   </div>

            </div>
        </nav>
    );
 }

 export default Navbar;