import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import RequireAuth from "../hoc/RequireAuth";

export const routes = createBrowserRouter(createRoutesFromElements([

    //Private Routes
    <Route path="/" element={<RequireAuth/>}></Route>,
    //Public Routes
    <Route path="/signin" element={<SignIn/>}></Route>,
    <Route path="/signup" element={<SignUp/>}></Route>
]))


