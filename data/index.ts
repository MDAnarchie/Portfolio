import { url } from "inspector";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building on my StarHub app",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "StarHub - One stop shop for all your space needs",
      des: "A full-stack app that allows users to check all the latest space news, launches, and community of space enthusiasts.",
      img: "/p1.png",
      iconLists: ["/re.svg", "/tail.svg", "/firebase.svg", "/firestore.svg"],
      link: "https://github.com/E05-A/StarHub",
    },
    {
      id: 2,
      title: "CineMate - a movie tracker app",
      des: "A SPA that allows users to search for movies, add them to their watchlist, and rate them.",
      img: "/p2.png",
      iconLists: ["/re.svg", "/tail.svg", "/node.svg"],
      link: "https://cinebuddy.netlify.app/",
    },
    {
      id: 3,
      title: "Trending Blend",
      des: "a Blog Type website based on my traveling experiences and interests in technologies.",
      img: "/p3.png",
      iconLists: ["/html.svg", "/css.svg", "/javascript.svg"],
      link: "https://github.com/MDAnarchie/TrendingBlend",
    },
    {
      id: 4,
      title: "Neo-Berlin - a text-based adventure game",
      des: "A text-based adventure game where decisions matter.",
      img: "/p4.png",
      iconLists: ["/javascript.svg", "/node.svg"],
      link: "https://github.com/AndreiMarasoiuDogarescu/Neo-Berlin",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Andrei was exceptionally professional, helpful, and dedicated during our collaboration. His strong work ethic and eagerness to follow directions made him a valuable partner. If you are looking for a web developer for your future projects, Andrei's commitment and skills will ensure outstanding results.",
      name: "Marian Arsene",
      title: "Senior QA Analyst at Ubisoft",
      img: "/marian.png" 
    },
    {
      quote:
        "Andrei's enthusiasm for the field was clear in the countless times he shared the new technologies he was exploring. Andrei possesses a keen eye for website design and is eager to implement the best technologies to create smooth, visually appealing user experiences.",
      name: "Alexandru Andronachi",
      title: "Technology Analyst at BearingPoint",
      img: "/alex.png"
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "ubisoft",
      img: "/ubi.svg",
      nameImg: "/ubiName.svg",
    },
    {
      id: 2,
      name: "ea",
      img: "/EA.svg",
      nameImg: "/eaName.svg",
    },
    {
      id: 3,
      name: "dci",
      img: "/dci.svg",
      nameImg: "/dciName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Full-Stack Developer",
      desc: "Assisted in the development of a web-based platform using React.js and TailwindCSS.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "QA Analyst",
      desc: "Tested and reviewed code to ensure the highest quality of the final product was delivered.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "DCI Tutor",
      desc: "Served as a tutor, providing support to students in need of assistance.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Video Game Tester",
      desc: "Tested video games to ensure they were free of bugs and glitches.                      ",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/AndreiMarasoiuDogarescu",
      hoverColor: "#333",
    },
    {
      id: 2,
      img: "/link.svg",
      url: "https://www.linkedin.com/in/andrei-marasoiu/",
      hoverColor: "#1DA1F2",
    },
  ];