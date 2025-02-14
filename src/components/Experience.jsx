import React from "react";

class Experience extends React.Component{

    render() {
        return (
        <div className="Experience-Language text-white flex flex-col md:flex-row gap-10 md:gap-20 -m-4 justify-center">
        <div className="Experience bg-slate-600 p-6 md:p-15">
            <h1 className="font-black text-4xl md:text-5xl pb-5 mb-7">Experience</h1>
            <h1 className="text-2xl font-extrabold">
            <span className="mr-3">&#9679;</span> 2021-2022
            </h1>
            <h2 className="mb-5">Ditalent by Kominfo. IT Support Google</h2>
            <h1 className="text-2xl font-extrabold">
            <span className="mr-3">&#9679;</span> 2021-2022
            </h1>
            <h2 className="mb-5">Ditalent by Kominfo. IT Support Google</h2>
            <h1 className="text-2xl font-extrabold">
            <span className="mr-3">&#9679;</span> 2021-2022
            </h1>
            <h2 className="mb-5">Ditalent by Kominfo. IT Support Google</h2>
        </div>

        <div className="Language bg-slate-500 p-6 md:p-20">
            <h1 className="font-black text-4xl md:text-5xl pb-5 mb-7">Language</h1>
            <h2 className="font-semibold text-3xl">Indonesia</h2>
            <h2 className="font-thin text-xl mb-3">Native</h2>
            <h2 className="font-semibold text-3xl">English</h2>
            <h2 className="font-thin text-xl mb-3">Fluent</h2>
            <h2 className="font-semibold text-3xl">Javanese</h2>
            <h2 className="font-thin text-xl mb-3">Native</h2>
        </div>
        </div>


        );
    }

}

export default Experience;