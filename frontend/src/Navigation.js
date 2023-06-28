import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from './contexts/CurrentUser';

function Navigation() {

    const history = useHistory()

    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <>
                <li style={{ float: 'right' }}>
                    <button className='warning ml-3 btn btn-danger' onClick={() => {
                        localStorage.removeItem('token')
                        setCurrentUser(null)
                        history.push('/login')
                    }
                    }>Log Out</button>
                </li>
                <li style={{ float: 'right' }}>
                    Logged in as {currentUser.firstName} {currentUser.lastName}
                </li>
            </>

        )
    }

    return (
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => history.push("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places")}>
                        Places
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places/new")}>
                        Add Place
                    </a>
                </li>
                {loginActions}
            </ul>
        </nav>
    )
}

export default Navigation;