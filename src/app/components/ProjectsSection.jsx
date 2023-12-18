"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Email Spam Classifier",
    description: "Made an email classifier using Machine Learning models which predicts whether the email is spam or not",
    image: "/images/projects/emailspam.PNG",
    tag: ["All"],
    gitUrl: "https://github.com/Hkagliwal",
    previewUrl: "https://github.com/Hkagliwal/Email-SMS_Spam-_Classifier",
  },
  {
    id: 2,
    title: "Car Rental",
    description: "User need to create or login using the account created.A session is maintained throughout till the user is logged in. A web page opens where there are multiple web pages and user can also book a car by filling up the form in the website.",
    image: "/images/projects/carrental.PNG",
    tag: ["All"],
    gitUrl: "https://github.com/Hkagliwal",
    previewUrl: "https://github.com/Hkagliwal/CarRentalSystem/tree/master",
  },
  {
    id: 3,
    title: "Generating a bill",
    description: "In this project user needs to enter a pre-defined password to grant access. Then select a car from a set of options in which car specs are also given and them fill some details. A bill will be generated that tells the cost for renting a car",
    image: "/images/projects/bill.PNG",
    tag: ["All"],
    gitUrl: "https://github.com/Hkagliwal",
    previewUrl: "https://github.com/Hkagliwal/Generating-a-bill",
  },
  // {
  //   id: 4,
  //   title: "React Portfolio Website",
  //   description: "This is my portfolio website by through this website you can connect with me and you also watch my Tech journey. In this project we are using HTML, CSS, JAVASCRIPT, REACT.JS, NODE.JS.",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/mrnavi16",
  //   previewUrl: "https://github.com/mrnavi16",
  // },
  // {
  //   id: 5,
  //   title: "Razorpay Website Clone",
  //   description: "Secure Payment Processing, User-Friendly interface, Responsive Design, Seamless integration, Animations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/mrnavi16",
  //   previewUrl: "https://github.com/mrnavi16",
  // },
  // {
  //   id: 6,
  //   title: "Weather-App",
  //   description: "A Weather forcasting Website that takes Location from the users and tells the weather of that location. It is also able to find the weather forcast of any location thats given by the user",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/mrnavi16",
  //   previewUrl: "https://github.com/mrnavi16",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        /> */}
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
