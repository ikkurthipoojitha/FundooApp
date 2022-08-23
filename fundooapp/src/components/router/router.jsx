import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from "../dashboard/dashboard";
import Signin from "../signin2/signin2";
import Signup from "../signup2/signup2";

function RouterOne(){
    return (
        <div>
            <Router>
            <Routes>
                <Route exact path = '/' element = {<Signin />} />
                <Route  path = '/Signup' element = {<Signup />} />
                <Route  path = '/dashboard' element = {<Dashboard />} />

            </Routes>
            </Router>
        </div>
    )
}
export default RouterOne