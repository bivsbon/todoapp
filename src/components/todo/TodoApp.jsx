import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent />}></Route>
                    <Route path="/login" element={<LoginComponent />}></Route>
                    <Route path="/welcome" element={<WelcomeComponent />}></Route>
                    <Route path="*" element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {

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
            naviagte("/welcome")
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

function WelcomeComponent() {
    return (
    <div className="Welcome">
        Welcome Component
    </div>
    )
}

function ErrorComponent() {
    return (
    <div className="Welcome">
        404
    </div>
    )
}