import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    //Step-9: Here we want access the user Object from the UserContext, so we use useContext:
    const {user} = useContext(UserContext)

    if (!user) return <div>Please Login!</div>

    return <div>Welcome {user.username}</div>
}

export default Profile