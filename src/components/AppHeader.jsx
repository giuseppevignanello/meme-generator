import React from 'react'

const AppHeader = () => {
    return (
        <div className='app_header bg_main'>
            <nav className="navbar navbar-expand-sm navbar-dark ">
                <div className="container">
                    <div className="logo_image me-3">
                        <img src="/img/trollface.png" alt="trollface" />
                    </div>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item text-white">
                                Meme Generator
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AppHeader