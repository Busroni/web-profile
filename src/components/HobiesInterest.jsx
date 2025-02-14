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
                    <span className="material-symbols-outlined text-2xl mb-2">headphones</span>
                    <h1 className="font-bold">Music</h1>
                    <h4 className="text-sm">Listening to indie, pop, and lo-fi music helps me stay motivated and enhances my productivity in both work and life.</h4>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-5 shadow-md">
                    <span className="material-symbols-outlined text-2xl mb-2">videogame_asset</span>
                    <h1 className="font-bold">Gaming</h1>
                    <h4 className="text-sm">Exploring vast open worlds in RPGs and solving intricate puzzles keeps me engaged and sharpens my critical thinking.</h4>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-5 shadow-md">
                    <span className="material-symbols-outlined text-2xl mb-2">phishing</span>
                    <h1 className="font-bold">Fishing</h1>
                    <h4 className="text-sm">Fishing is my way of relieving stress, allowing me to relax and enjoy peaceful moments outdoors.</h4>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-5 shadow-md">
                    <span className="material-symbols-outlined text-2xl mb-2">sprint</span>
                    <h1 className="font-bold">Running</h1>
                    <h4 className="text-sm">Running is my favorite sport, helping me build stamina, relieve stress, and maintain a healthy lifestyle.</h4>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-5 shadow-md">
                    <span className="material-symbols-outlined text-2xl mb-2">draw</span>
                    <h1 className="font-bold">Drawing</h1>
                    <h4 className="text-sm">I enjoy sketching and illustrating as a way to express my creativity and refine my artistic skills</h4>
                </div>
                </div>
            </div>
            </div>



        );
    }
}

export default HobiesInterest;