import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from "./Header"
import Menu from "./Menu"
import LogIn from "./LogIn"
import SingUp from "./SignUp"
import Habits from "./Habits"
import Today from "./Today"
import Historic from "./Historic"



export default function App () {

    const [token, setToken] = useState("");

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <LogIn setToken={setToken} />
                </Route>
                <Route path="/cadastro">
                    <SingUp />
                </Route>
                <Route path="/hoje">
                    <Today token={token}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}