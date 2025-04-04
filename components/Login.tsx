'use client'
import { useState } from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    const [authenticating, setAuthenticating] = useState(false)

    const {signup, login} = useAuth()

    async function handleSubmit(){
        if(!email || !password || password.length < 6) return
        
        setAuthenticating(true)

        try {
            if(isRegister){
                console.log('Signing up a new user');
                await signup(email, password)
            } else {
                console.log('Logging in existing user');
                await login(email, password)
            }
        } catch (error) {
            console.error((error as Error).message);
        } finally{
            setAuthenticating(false)
        }
    }

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4">
            <h3 className="text-4xl sm:text-5xl md:text-6xl">
                {isRegister ? 'Register' : 'Log In'}
            </h3>
            <p>You&#39;re only one step away</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="max-w-[400px] w-full mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none" placeholder="Email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)}  className="max-w-[400px] w-full mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none" placeholder="Password" type='password' />
            <div className="max-w-[400px] w-full mx-auto">
                <Button clickHandler={handleSubmit} text={authenticating ? "Submitting" : 'Submit'} full />
            </div>
            <p className="text-center">{isRegister ? 'Already have an account? ' : 'Don\'t have an account? '} 
                <button onClick={() => setIsRegister(!isRegister)} className="text-indigo-600">
                    {isRegister ? 'Sign In' : 'Sign Up'}
                </button>
            </p>
        </div>
    );
}

export default Login;