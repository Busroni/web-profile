import React from "react";
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import HobiesInterest from "./HobiesInterest";


class ProfileApp extends React.Component {
    constructor(props) {
        super(props);
    }


render() {
    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
            <div className="navbar-app bg-slate-950 text-white p-5 pl-20">
                <h1 className="font-[Open_Sans] font-black text-4xl ">BSRNDSG</h1>
            </div>
            <div className="p-20">
                <Profile />
                <Education />
                <Experience />
                <HobiesInterest />
            </div>
            <div className="bg-slate-950 text-white text-center p-5">
                <h1>Copyright Busroni Ahmad Safrizal</h1>
            </div>
            

        </div>
    );
}
}

export default ProfileApp;