const educations = () => ([
    {
      id: 1,
      year: "2019-2024",
      detail: "S1 Informatika UPN Veteran Yogyakarta",
    },
    {
      id: 2,
      year: "2015-2018",
      detail: "SMA Negeri 3 Boyolali",
    },
    {
      id: 3,
      year: "2013-2015",
      detail: "SMP Negeri 3 Boyolali",
    },
  ]);

  const skills = () => ([
    {
      id: 1,
      part: "Programming",
      details: "PHP, Javascript, C++, Python",
    },
    {
      id: 2,
      part: "UIUX",
      details: "Figma, AdobeXD",
    },
    {
      id: 3,
      part: "Graphic Design",
      details: "AdobeIllustration, Photoshop, CorelDraw, Canva",
    },
    {
      id: 4,
      part: "Video Editing",
      details: "Adobe Premiere Pro, Capcut",
    },
  ]);
  
  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
  }
  
  export { educations, skills, showFormattedDate };
  