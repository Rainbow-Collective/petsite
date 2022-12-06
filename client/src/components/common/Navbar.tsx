import React, { Dispatch, SetStateAction, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { IdentityContext } from "../../context/identityContext";
import { IdentityContextType } from "../types";

export default function Navbar() {
    const history = useHistory();
    const context = useContext(IdentityContext) as IdentityContextType;

    //check if logged in
    const amIloggedIn = (context.name !== "" && context.name !== null)

    //buttons if you are logged in
    const logoutButton = <NavLink to="/" onClick={() => { context.onLogout(); history.push("/"); }}><button className="p-2 hover:bg-slate-400">[Logout]</button></NavLink>
    const seePetsButton = <NavLink to="/allpets" ><button className="p-2 hover:bg-slate-400 ">[See All Pets]</button></NavLink>
    //buttons if you are not logged in
    const logInButton = <NavLink to="/Auth"><button className="p-2 hover:bg-slate-400">[Log In or Sign Up]</button></NavLink>;



    return (
        <nav>
            <div className="display: flex; align-items: center; justify-content: center; p-10">
                <NavLink to="/"><button className="p-2 hover:bg-slate-400 ">[Home]</button></NavLink>
                {/* <NavLink to="/account"><button className="p-2 hover:bg-slate-400">Account</button></NavLink> */}
                {/* <NavLink to="#"><button className="p-2 hover:bg-slate-400">Visit Pets</button></NavLink> */}
                {amIloggedIn ? seePetsButton : logInButton}
                {amIloggedIn ? logoutButton : logInButton}
            </div>
        </nav>
    );
}