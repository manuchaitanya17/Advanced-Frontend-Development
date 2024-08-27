import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'


//Step-2: Create a Login Component:
function Login() {
    
    /* Step-3: We observe that we need a User Object that stores username and password, so first we have to create a User 
    Object in the Context Object so that it can accessed from any of the Children/Sibling Componenets */
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    // Step-7: Using useContext Hook, we access the setUser function from the UserContext Object:
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        //Step-8: Now we set the User Object from the retrived values of User in the Context Object:
        setUser({username, password})
    }

  return (
    <div>
        <h2>LOGIN</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login