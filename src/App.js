import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import UserContext from './UserContext';

import Header from "./Header"
import Menu from "./Menu"
import LogIn from "./LogIn"
import SingUp from "./SignUp"
import Habits from "./Habits"
import Today from "./Today"
import Historic from "./Historic"



export default function App () {

    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <LogIn />
                    </Route>
                    <Route path="/cadastro">
                        <SingUp />
                    </Route>
                    <Route path="/hoje">
                        <Header />
                        <Today />
                        <Menu />
                    </Route>
                    <Route path="/habitos">
                        <Header />
                        <Habits />
                        <Menu />
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    )
}