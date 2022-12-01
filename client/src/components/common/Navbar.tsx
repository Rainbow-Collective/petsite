import React, { Dispatch, SetStateAction, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { IdentityContext } from "../../context/identityContext";
import { IdentityContextType } from "../types";

export default function Navbar() {
    const history = useHistory();
    const context = useContext(IdentityContext) as IdentityContextType;


    return (
        <nav>
            <div className="display: flex; align-items: center; justify-content: center; p-10">
                <NavLink to="/"><button className="p-2 hover:bg-slate-400 ">[Home]</button></NavLink>
                {/* <NavLink to="/account"><button className="p-2 hover:bg-slate-400">Account</button></NavLink> */}
                {/* <NavLink to="#"><button className="p-2 hover:bg-slate-400">Visit Pets</button></NavLink> */}
                {context.name !== "" ?
                    <NavLink to="#" onClick={() => { context.onLogout(); history.push("/"); }}><button className="p-2 hover:bg-slate-400">[Logout]</button></NavLink> :
                    <NavLink to="/Auth"><button className="p-2 hover:bg-slate-400">[Log In or Sign Up]</button></NavLink>}
            </div>
        </nav>
    );
}