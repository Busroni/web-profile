import React from 'react'

class HobiesInterest extends React.Component {

    render() {
        return(
            <div>
            <div className="bg-slate-200 -mt-10 p-10 md:p-20 pb-20">
                <h1 className="text-4xl md:text-5xl mt-5 mb-10 font-black text-center">
                Hobbies & Interests
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-xl md:text-2xl gap-5 md:gap-10 text-center text-slate-800">
                <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-5 shadow-md">
                    <span className="material-symbols-outlined text-6xl mb-5">headphones</span>
                    <h1>Music</h1>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-5 shadow-md">
                    <span className="material-symbols-outlined text-6xl mb-5">videogame_asset</span>
                    <h1>Gaming</h1>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-5 shadow-md">
                    <span className="material-symbols-outlined text-6xl mb-5">phishing</span>
                    <h1>Fishing</h1>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-5 shadow-md">
                    <span className="material-symbols-outlined text-6xl mb-5">sprint</span>
                    <h1>Running</h1>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-5 shadow-md">
                    <span className="material-symbols-outlined text-6xl mb-5">draw</span>
                    <h1>Drawing</h1>
                </div>
                </div>
            </div>
            </div>



        );
    }
}

export default HobiesInterest;