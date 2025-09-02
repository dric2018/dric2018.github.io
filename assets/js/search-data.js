// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "projects and publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Below is my short resume. You can find the detailed version in the attached PDF to your right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-l-39-intelligence-artificielle-à-l-39-africaine",
        
          title: "L&#39;Intelligence Artificielle à l&#39;Africaine",
        
        description: "L&#39;IA qui correspondra à nos réalité",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/une-ia-africaine/";
          
        },
      },{id: "post-ensuring-africa-s-workforce-drives-shared-prosperity",
        
          title: "Ensuring Africa’s Workforce Drives Shared Prosperity",
        
        description: "A commentary about Africa&#39;s potential for tech talents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/african-talents/";
          
        },
      },{id: "post-digital-umuganda-2025-kinyarwanda-asr-hack",
        
          title: "Digital Umuganda 2025 Kinyarwanda ASR Hack",
        
        description: "An example EDA and implementation of data modules to facilitate participation in ASR hackathon.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/jupyter-notebook/";
          
        },
      },{id: "news-côte-d-ivoire-unveils-national-data-governance-amp-ai-strategies",
          title: '🇨🇮 Côte d’Ivoire Unveils National Data Governance &amp;amp; AI Strategies',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-global-ai-summit-on-africa",
          title: '🌍 Global AI Summit on Africa',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%6E%6F%75%61%6E%63%65%64%72%69%63@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dric2018", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/cpem", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/cmDrStrange", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
