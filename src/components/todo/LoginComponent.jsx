import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {

    const [username, setUsername] = useState("minh")
    const [password, setPassword] = useState("")

    const [authenSuccess, setAuthenSuccess] = useState(false)
    const [authenFail, setAuthenFail] = useState(false)

    const naviagte = useNavigate()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (username === "minh" && password === "123") {
            setAuthenSuccess(true)
            setAuthenFail(false)
            naviagte(`/welcome/${username}`)
        } else {
            setAuthenSuccess(false)
            setAuthenFail(true)
        }
    }

    return (
        <div className="Login">
            {authenSuccess && <div className="successMessage">Success</div>}
            {authenFail && <div className="errorMessage">Error</div>}
            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}