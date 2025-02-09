import React from 'react'

class HobiesInterest extends React.Component {

    render() {
        return(
            <div>
                <div className="bg-slate-200 -mt-15 p-20 pb-30">
                    <h1 className="text-5xl mt-10  mb-20 font-black" > Hobies & Interest</h1>
                    <div className="grid grid-cols-5 text-2xl items-center  gap-10 text-center text-slate-800">
                        <div className="items-center justify-center bg-slate-50 rounded-2xl"><span class="material-symbols-outlined scale-[5] mb-15">headphones</span><h1>Music</h1></div>
                        <div className="items-center justify-center bg-slate-50 rounded-2xl"><span class="material-symbols-outlined scale-[5] mb-15">videogame_asset</span><h1>Gamingt</h1></div>
                        <div className="items-center justify-center bg-slate-50 rounded-2xl"><span class="material-symbols-outlined scale-[5] mb-15">phishing</span><h1>Fishing</h1></div>
                        <div className="items-center justify-center bg-slate-50 rounded-2xl"><span class="material-symbols-outlined scale-[5] mb-15">sprint</span><h1>Running</h1></div>
                        <div className="items-center justify-center bg-slate-50 rounded-2xl"><span class="material-symbols-outlined scale-[5] mb-15">draw</span><h1>Drawing</h1></div>

                    </div>
                </div>
            </div>


        );
    }
}

export default HobiesInterest;