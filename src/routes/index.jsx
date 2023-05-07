import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import RequireAuth from "../hoc/RequireAuth";
import Dashboard from "../pages/Dashboard";
import Confirm from "../pages/Confirm";
import Calculator from "../pages/Calculator";

export const routes = createBrowserRouter(createRoutesFromElements([

    //Private Routes
    <Route path="/" element={<RequireAuth/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path="/calculate" element={<Calculator/>}></Route>
    </Route>,
    //Public Routes
    <Route path="/signin" element={<SignIn/>}></Route>,
    <Route path="/signup" element={<SignUp/>}></Route>,
    <Route path="/confirm" element={<Confirm/>}></Route>,
]))


