import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './TodoApp.css'
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ListTodosComponent from './ListTodosComponent';
import LogoutComponent from './LogoutComponent';
import ErrorComponent from './ErrorComponent';
import { FooterComponent } from './FooterComponent';
import HeaderComponent from './HeaderComponent';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/welcome/:username" element={<WelcomeComponent />} />
                    <Route path="/todos" element={<ListTodosComponent />} />
                    <Route path="/logout" element={<LogoutComponent />} />
                    <Route path="*" element={<ErrorComponent />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}