import React from "react";
import "../assets/styles/components-styles/ProjectItem.scss";
import Highlight from "./Highlight";
import StackItem from "./StackItem";
import LinkButton from "./LinkButton";

type ProjectItemProps = {
  project: {
    id: number;
    title: string;
    imageSrc: string;
    stack: string[];
    description: string;
    linkLive?: string;
    linkRepo: string;
  };
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { title, imageSrc, stack, description, linkLive, linkRepo } = project;

  return (
    <article className="project">
      <h3>{title}</h3>
      <img src={imageSrc} alt="project" />
      <ul className="project__stack">
        {stack.map((item, index) => (
          <StackItem key={index}>{item}</StackItem>
        ))}
      </ul>
      <p>{description}</p>
      <div className="project__links-container">
        <LinkButton className="project__link" href={linkRepo}>
          See details
        </LinkButton>
        {linkLive && (
          <LinkButton className="project__link" href={linkLive}>
            Link demo
          </LinkButton>
        )}
        <Highlight className="project__highlight" />
      </div>
    </article>
  );
};

export default ProjectItem;
