import React from 'react';
import {Link} from 'react-router-dom';

import Task from '../pages/Task'

export default function Login(){
    return(
        <form>
            <label>
                <p>Username</p>
                <input type="text"/>
            </label>
            <label>
                <p>Password</p>
             <input type="password"/>
            </label>
            <div>
                <Link to='/Task'>
                    <button>Submit</button>
                </Link>
            </div>
        </form>
    )
}