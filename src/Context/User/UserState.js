import React, { useState } from 'react'
import UserContext from './UserContext';

export default function UserState(props) {

    const [User, setUser] = useState({});

    const fetchUser = async () => {
        try {
            const response = await fetch(`http://localhost:3001/profile/fetchuser`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            })
            if (response.status === 200) {
                setUser(await response.json());
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider value={{User, fetchUser, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
