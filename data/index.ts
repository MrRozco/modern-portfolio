export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize customer service and quality, fostering strong relationships with clients.",
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
      title: "Passionate self-taught developer.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently learning to build a PERN stack app.",
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
      title: "Travel Site - React App",
      des: "IN this project, I worked on making reusable components for the site and used Tailwind CSS for styling.",
      img: "/travelSite.png ",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://mrrozcotravelsite.netlify.app/",
    },
    {
      id: 2,
      title: "BestEats - Uber Eats Clone",
      des: "After learning React,  I gave it a try by building a clone of the Uber Eats homepage. Take a look! ",
      img: "/bestEatsReact.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://besteats-portfolio-piece.netlify.app/",
    },
    {
      id: 3,
      title: "E-commerce - HTML, CSS, & JS site",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/ecommerceHtml.png",
      iconLists: ["/html-5-svgrepo-com.svg", "/css-3-svgrepo-com.svg"],
      link: "https://mrrozco.github.io/E-commerce/",
    },
    {
      id: 4,
      title: "PERN Stack App - E-commerce Site",
      des: "With headless CMS. Coming soon! ",
      img: "/comingsoon.jpg",
      iconLists: ["/next.svg", "/tail.svg"],
      link: "/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        `I am excited to recommend my colleague and friend, Bryan, who I worked with at Daxko. Bryan is a determined and skilled problem-solver, excelling in HTML, CSS, JavaScript, JQuery, PHP, and WordPress. Their dedication to learning and expanding their skill set has been impressive, and they have often come to our team's rescue with their expertise. Bryan is not only a valuable team member but also a wonderful person with a bright future. I highly recommend Bryan for any endeavor they pursue, as they are a talented individual destined for great success.`,
      name: "Luke Pennington",
      title: "Senior Web Developer at Daxko",
    },
    {
      quote: `I worked with Bryan for approximately a year at Daxko. When he first assumed the position, there was a significant learning curve, but he quickly grasped the intricacies of the role. Not only did he exhibit a remarkable ability to learn swiftly in a fast-paced environment, but he also consistently demonstrated a strong work ethic. Having him on the team was a valuable asset, especially when it came to efficiently resolving tickets. I wholeheartedly endorse him for any job, particularly for roles that require a dedicated team player. He is truly exceptional!`,
      name: "Amanda Watson",
      title: "Website Support Specialist at Daxko",
    },
    {
      quote: `Bryan is a delight to work with. He is a genuinely kind and patient individual and is a very quick learner who can hit the ground running with little instruction. Bryan is a skilled web developer and would be an asset to any team who would be fortunate enough to have him on board. I recommend Bryan for all of your WordPress and web development needs`,
      name: "Vincent D'Amico",
      title: "Web Developer at Daxko",
    }
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer",
      desc: "Assisted in the development of full-stack applications using Next.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Website Support Manager",
      desc: "Managed a team of web developers, providing support to clients and ensuring timely delivery.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "CMS and Ticket Management",
      desc: "Worked with Wordpress, and managed tickets and projects using Asana, Jira, and Salesforce.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Web Platforms and Technologies",
      desc: "Have experience building sites and LPs in Webflow, GHL, Hubspot, and other platforms.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      src: 'https://github.com/MrRozco'
    },
    {
      id: 3,
      img: "/link.svg",
      src: 'https://www.linkedin.com/in/bryan-orozco-5132891b5/'
    },
  ];