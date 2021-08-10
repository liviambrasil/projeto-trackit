import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import UserContext from './context/UserContext';

import Header from "./Header"
import Menu from "./Menu"
import LogIn from "./LogIn"
import SingUp from "./SignUp"
import Habits from "./Habits"
import Today from "./Today"
import Historic from "./Historic"

export default function App () {

    const [todayHabits, setTodayHabits] = useState([])
    const [porcentage, setPorcentage] = useState(0)
    const [newHabit, setNewHabit] = useState("")
    const [habitDays, setHabitDays] = useState([])
    const [habits, setHabits] = useState([])
    const [config, setConfig] = useState()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))

    return (

        <UserContext.Provider value={  {user, setUser, 
                                        todayHabits, setTodayHabits, 
                                        porcentage, setPorcentage,
                                        newHabit, setNewHabit, 
                                        habitDays, setHabitDays, 
                                        habits, setHabits,
                                        config, setConfig}}>
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
                    <Route path="/historico">
                        <Header />
                        <Historic />
                        <Menu />
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    )
}