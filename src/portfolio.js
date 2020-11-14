
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Cedric MANOUAN",
  title: "Hi all, I'm Cedric",
  subTitle: emoji("A passionate Data Scientist and Data evangelist 🚀 having an experience in computer vision and Natural Language Processing tasks. I am a Pytorch and Tensorflow fan for deep learning and an pythonic man."),
  resumeLink: "https://drive.google.com/file/d/1HSbhUeFxUbMY7gO5fmswY64qoyM4wCwZ/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/dric2018",
  linkedin: "https://www.linkedin.com/in/cédric-pascal-emmanuel-manouan-ba9ba1181/",
  gmail: "manouancedric@gmail.com",
  gitlab: "#",
  facebook: "https://web.facebook.com/cedric.manouan.9",
  medium: "https://medium.com/@manouancedric",
  stackoverflow: "https://stackoverflow.com/users/11967726/cedric-manouan",
  instagram : "https://www.instagram.com/i_am_zeustron.ai/",
  twitter : "https://twitter.com/cedric_manouan",

  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "VERY PASSIONATE DATA SCIENTIST AND DEVELOPER WHO WANTS TO PUSH BOUNDARIES OF AI RESEARCH ESPECIALLY IN AFRICA",
  skills: [
    emoji("⚡ Machine/Deep Learning models development for Vision or NLP"),
    emoji("⚡ Responsive and data efficient web app development"),
    emoji("⚡ Integration of third party services such as Dialogflow"),
    emoji("⚡ Backend development with Javascript & python")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },

    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
  
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "Mac OS",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Dakar institue of technology (DIT)",
      logo: require("./assets/images/ditLogo.png"),
      subHeader: "Master of Science in Computer Science : Artificial Intelligence",
      duration: "December 2020 - Ortober 2023",
      desc: "",
      descBullets: [
        //"",
      ]
    },
    {
      schoolName: "Ecole Supérieure Africaine des TIC",
      logo: require("./assets/images/esaticLogo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science : Systems, Networking and Telecommunications",
      duration: "September 2016 - April 2020",
      desc: "Obtained with honors. Took courses about Software Engineering, Operating Systems, Operation Research, Markov processes ...",
      descBullets: [
        `
        For my end of cycle project, I have been asked to work on a numeric solution which could help farmers to improve their procuction and reduce the painfulness of their work.
        As a solution, I proposed an IoT system able to take data from a cassava crop by the use of sensors and feed them to a machine learning model 
        (a regression model) to get a prediction about the amount of cassava tubers that could be harvested.
        `,
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Nodejs",
      progressPercentage: "70%"
    },
    {
      Stack: "Python programming",
      progressPercentage: "90%"
    },

    {
      Stack: "Machine/Deep learning",
      progressPercentage: "80%"
    },

    {
      Stack: "Data visualization",
      progressPercentage: "69%"
    },

    {
      Stack: "Cloud computing",
      progressPercentage: "60%"
    },

    {
      Stack: "Pytorch",
      progressPercentage: "85%"
    },

    {
      Stack: "Tensorflow",
      progressPercentage: "70%"
    }
  ]
};


//  top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data scientist / ML engineer & researcher",
      company: "Futurafric IA",
      companylogo: require("./assets/images/futurafricLogo.png"),
      date: "June 2018 – Present",
      desc: "Internship",
      descBullets: [
        "Web development",
        "Machine/Deep Learning model development",
        "Cloud computing",
        "Process automation",
        "Research"
      ]
    },
    {
      role: "Software developer",
      company: "PSNDEA",
      companylogo: require("./assets/images/psndeaLogo.jpg"),
      date: "April 2019 – July 2019",
      desc: "End of cycle internship",
      descBullets: [
        "Networking management",
        "Software development",
        "Internet of Things"
      ]
    },
    {
      role: "University ambasador",
      company: "Zindi",
      companylogo: require("./assets/images/zindiLogo.png"),
      date: "June 2020 - Present",
      desc: "Building AI/Data science community in Côte d'Ivoire by sharing knowlegde and compite on data science competitions."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "dric2018", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "#",
      title: "Computer vision with small datasets",
      description: "How to build accurate deep learning models with limited datasets?"
    },
    {
      url: "#",
      title: "AI for audio analysis",
      description: "Step by step implementation of a deep learning solution to classify audio data."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅 LOL"),

  talks: [
    {
      title: "Data science on the zindi platform",
      subtitle: "AI Abidjan dev Conference keynote ",
      slides_url: "https://drive.google.com/file/d/1d00PYiTTSEJjiAZAge-xG1wNJvM4fm2n/view?usp=sharing",
      event_url: "https://www.youtube.com/watch?v=nhMs-FaaOyU"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: ["#"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all...even for lunch",
  number: ["+221 78 596 89 83 ", "/ +225 41 59 06 67"],
  email_address: "manouancedric@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "cedric_manouan"

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, podcastSection, bigProjects, achievementSection, blogSection, talkSection, contactInfo , twitterDetails};
