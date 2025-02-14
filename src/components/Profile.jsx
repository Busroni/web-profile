import React, { Component } from "react";
import imageProfile from "../assets/img.png";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, // State untuk popup contact
    };
  }

  togglePopup = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div className="profile p-20 flex flex-col items-center">
        <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-5 items-center">
          {/* Bagian Teks */}
          <div className="md:col-span-2 mb-20 p-5 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-5">
              Hello, I'm Busroni
            </h1>
            <p className="text-sm mb-10 sm:text-base md:text-lg leading-relaxed">
              I am a Front-End Developer with a strong foundation in Informatics, specializing in JavaScript, ReactJS, Laravel, and UI/UX design.
              I have experience working with cross-functional teams using Agile methodologies like SCRUM to develop web-based solutions.
              Passionate about building intuitive and efficient user interfaces while ensuring optimal performance.
              Adaptable, problem-solving oriented, and committed to delivering high-quality projects.
            </p>
            <div className="bg-slate-600 text items-center font-bold flex justify-center p-3 w-80 rounded-2xl text-white">
              <a href="https://www.linkedin.com/in/busroni-as/" target="_blank">Linked.in</a>
            </div>
          </div>

          {/* Bagian Gambar/Profile */}
          <div className="flex flex-col items-center p-5 relative">
            {/* Container untuk posisi popup */}
            <div className="relative">
            <div className="bg-green-50 w-[192px] h-[240px] min-w-[192px] min-h-[240px] flex items-center justify-center">
              <img src={imageProfile} alt="Profile" className="rounded-lg shadow-lg w-full h-full object-cover" />
            </div>

              {/* Popup hanya di atas gambar */}
              {this.state.isOpen && (
                <div className="font-semibold absolute top-65 left-1/2 transform -translate-x-1/2 -translate-y-full bg-slate-100 p-3 rounded-lg shadow-lg border border-blue-200 w-50 text-center transition-opacity animate-fade-in">
                  <h2 className="text-lg font-bold mb-1">Contact Info</h2>
                  <p className="text-gray-800 text-sm">📞 0895 3665 57609</p>
                  <p className="text-gray-800 text-sm">📧 busroni10@gmail.com</p>
                  <p className="text-gray-800 text-sm">📍 Boyolali, Jawa Tengah</p>
                </div>
              )}
            </div>

            {/* Tombol Contact */}
            <button
              className="bg-slate-500 z-10 w-40 text-white px-6 py-2 font-bold shadow-md transition rounded-lg mt-5 hover:bg-slate-700"
              onClick={this.togglePopup}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
