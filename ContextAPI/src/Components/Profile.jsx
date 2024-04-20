import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) return <div>please Login</div>

    return (
        <div>
            Welcome {user.username}
        </div>
    )
}

export default Profile
