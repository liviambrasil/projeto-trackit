import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./Header"
import Menu from "./Menu"
import LogIn from "./LogIn"
import SingUp from "./SignUp"
import Habits from "./Habits"
import Today from "./Today"
import Historic from "./Historic"



export default function App () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <LogIn />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}