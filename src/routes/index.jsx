import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RequireAuth from "../hoc/RequireAuth";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const router =  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RequireAuth/>}>
        <Route index path="/signin" element={<SignIn/>}></Route>
    </Route>,
     <Route path="/dashboard" element={<Dashboard/>}></Route>
))


export default router