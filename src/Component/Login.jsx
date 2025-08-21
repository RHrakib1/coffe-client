import React from 'react'

export default function Login() {
    const handlelogin = e => {
        e.preventDefault()
        const netdata = e.target
        const email = netdata.email.value
        const password = netdata.password.value
        const objdata = { email, password }
        console.log(objdata)
    }
    return (
        <div>
            <form onSubmit={handlelogin} className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Log in to access your personalized dashboard and exclusive content.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
