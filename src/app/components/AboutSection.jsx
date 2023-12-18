"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++</li>
        <li>Java</li>
        {/* <li>PostgreSQL</li>
        <li>Sequelize</li> */}
        <li>Python</li>
        <li>Data Science</li>
        <li>Machine Learning </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li> <p>2021-2024</p>PURSUING MCA FROM NIT RAIPUR</li>
        <li> <p>2018-2021</p>COMPLETED MY B.Sc. FROM COTTON UNIVERSITY IN STATISTICS</li>
        <li> <p>2018</p>COMPLETED MY 10+2 FROM GYAN EDUCATIONAL INSTITUTE GUWAHATI (CBSE BOARD)</li>
        <li> <p>2016</p>COMPLETED MY 10TH FROM DON BOSCO SCHOOL GUWAHATI (CBSE BOARD)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Introduction to Machine Learning</li>
        <li>SQL</li>
        <li>Microsoft Excel: Begineer to Advanced</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li> AIR 757 in Codekaze conducted by Coding Ninjas</li>
        <li> 5 stars in Hackerrank Problem Solving & C++</li>
        <li> Solved 500+ coding questions</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Enthusiastic and a highly motivated student with good learning aptitude and communication skills, who likes to take
            initiative and seek out new challenges. I am able to work well both in a team environment as well as using own
            initiative. Proficient in a range of modern technologies C/C++, Java and Python with an interest in Machine Learning, 
            Data Science & Statistics.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
