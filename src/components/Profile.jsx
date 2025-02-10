import React from "react";

class Profile extends React.Component {
    

    render() {

        return(
            <div className="profile mt-20 p-20">
            <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-5 items-center">
              {/* Bagian Teks */}
              <div className="md:col-span-2 p-5 text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-5">
                  Hello, I'm Busroni
                </h1>
                <p className="text-sm mb-10  sm:text-base md:text-lg leading-relaxed">
                  I am a software developer focusing on frontend development.  
                  I am a software developer focusing on frontend development.  
                  I am a software developer focusing on frontend development.  
                </p>
                <div className="bg-slate-600 text items-center font-bold flex justify-center p-3 w-80 rounded-2xl text-white">
                    <a>Linked.in/busroni-a.s</a>
                </div>
              </div>
          
              {/* Bagian Gambar/Profile */}
              <div className="flex flex-col items-center p-5">
                <div className="bg-green-50 w-32 h-60 sm:w-40 sm:h-40 md:w-48 md:h-48  items-center">
                  {/* Placeholder untuk gambar profile */}
                  <span className="text-gray-400">Profile Image</span>
                </div>
                <button className="bg-slate-500 text-white px-17 py-2 shadow-md transition">
                  Contact
                </button>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Profile;