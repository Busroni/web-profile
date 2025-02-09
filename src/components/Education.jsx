import React from "react";
import EduItem from "./EduItem";

class Education extends React.Component {

    render() {
        return (
            <div className="bg-slate-800 p-10 md:p-20 text-white flex flex-col">

            {/* Bagian Education & Skills (Grid Responsive) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {/* Education Section */}
                <div className="md:col-span-2">
                <h1 className="font-black text-4xl md:text-5xl pb-5">Education</h1>

                <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-5 text-xl md:text-2xl font-black">
                    <div className="flex items-center gap-x-2">
                        <span className="w-3 h-3 bg-white rounded-full inline-block"></span>2019-2024
                    </div>
                    <p className="text-base md:text-lg font-normal">S1-Informatika UPN Veteran Yogyakarta</p>

                    <div className="flex items-center gap-x-2">
                        <span className="w-3 h-3 bg-white rounded-full inline-block"></span>2015-2018
                    </div>
                    <p className="text-base md:text-lg font-normal">SMA Negeri 3 Boyolali</p>

                    <div className="flex items-center gap-x-2">
                        <span className="w-3 h-3 bg-white rounded-full inline-block"></span>2013-2015
                    </div>
                    <p className="text-base md:text-lg font-normal">SMP Negeri 3 Boyolali</p>
                    </div>

                </div>

                {/* Skills Section */}
                <div>
                <h1 className="text-4xl md:text-5xl font-black pb-5">Technical Skill</h1>
                <EduItem />
                {/* <div className="grid grid-cols-2 gap-4 font-semibold">
                    <div className="bg-lime-500 p-2 rounded-lg text-center">SKILLSKILL</div>
                    <div className="bg-lime-500 p-2 rounded-lg text-center">SKILLSKILL</div>
                    <div className="bg-lime-500 p-2 rounded-lg text-center">SKILLSKILL</div>
                    <div className="bg-lime-500 p-2 rounded-lg text-center">SKILLSKILL</div>
                </div> */}
                </div>

            </div>

            </div>

        );
    }
}
export default Education;