import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {withRouter} from 'react-router';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Register = async(e) =>{
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            history.push("/");
        } catch (error){
            if (error.response) {
               setMsg(error.response.data.msg);
            }
            
        }
    }

    return (
        <section className="hero has-background-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="column is-centered">
                        <div className="column is-4-desktop">
                            <p className="has-text-centered">{msg}</p>
                            <form onSubmit={Register} className="box">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name" 
                                        value={name} onChange={(e) => setName(e.target.value)}/>
                                        
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email"
                                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="Password" 
                                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        
                                    </div>
                                </div>    
                                <div className="field">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="Confirm Password" 
                                        value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                                    </div>
                                </div>      
                                <div className="field">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>                 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter (Register);