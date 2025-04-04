export const projects = [
  {
    id: 1,
    title: "Kanban Board",
    imageSrc: "https://i.ibb.co/kJ0hyN4/kanbanmockup.png",
    stack: ["React", "Redux", "Styled-Components"],
    description:
      "It is a Kanban Board, a visual organization tool, where tasks can be added, filtered, removed, and moved between columns. Each column has a task limit, and if the limit is exceeded, a modal with a message will appear. Tasks can be assigned a color theme, priority, and user. Filtering options are available based on priority and user. The board utilizes Local Storage to store data.",
    linkLive: "https://annakrolikowska.github.io/kanban-board/",
    linkRepo: "https://github.com/annakrolikowska/kanban-board",
  },
  {
    id: 5,
    title: "Rick and Morty",
    imageSrc: "https://i.ibb.co/QvXwc4gG/ricknmorty.webp",
    stack: ["Angular", "RxJS", "TypeScript"],
    description:
      "This Angular app uses the Rick and Morty API, featuring Characters, Episodes, and Locations tabs. Logged-in users can access a Watch List to create watchlists and add episodes, marking them as watched or removing them. Authentication is via Firebase, with Google Sign-In support. Watchlists are stored in Firestore.",
    linkRepo: "https://github.com/annakrolikowska/angular-rnm",
  },

  {
    id: 2,
    title: "Portfolio Website",
    imageSrc: "https://i.ibb.co/8ScndXx/portfolio.webp",
    stack: ["TypeScript", "React", "SCSS"],
    description:
      "This is my portfolio website that I created using TypeScript, React, and SCSS. The website has a simple design that I previously prepared in Figma. It features a pastel color scheme, and the color theme of the website can be changed according to preferences, with options including pink, blue, green, and orange. The website showcases my skills and highlights a few selected projects.",
    linkLive: "https://annakrolikowska.github.io/portfolio/",
    linkRepo: "https://github.com/annakrolikowska/portfolio",
  },
  {
    id: 3,
    title: "Domek Mazury - commercial website",
    imageSrc: "https://i.ibb.co/5YgD5zF/domekmokap.png",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "I created a rental cottage landing page using HTML, CSS, and JavaScript. It features a dynamic image gallery with a slider, expandable sections for additional information, and an email message form for inquiries. This project was one of my early endeavors in web development, showcasing my skills in creating engaging and functional interfaces.",
    linkLive: "https://annakrolikowska.github.io/mazury-website/",
    linkRepo: "https://github.com/annakrolikowska/mazury-website",
  },
  {
    id: 4,
    title: "Food Order App",
    imageSrc: "https://i.ibb.co/hx6NGJ3/formmokappng.png",
    stack: ["Typescript", "React", "React-Router"],
    description:
      "This application allows users to place food orders. The form includes the following inputs: dish name, preparation time, and dish type (pizza, sandwich, or soup). Depending on the selected type, additional inputs are displayed. The form data is submitted via a POST request as JSON.  React Final Form is used for efficient form handling.",
    linkLive: "https://annakrolikowska.github.io/food-order-form/",
    linkRepo: "https://github.com/annakrolikowska/food-order-form",
  },
];
