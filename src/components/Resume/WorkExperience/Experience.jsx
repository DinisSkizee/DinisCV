import { Skills } from "../Timeline/Skills";

const Experience = () => {
  return (
    <div className="text-graywhite flex flex-col gap-2">
      <div className="text-white flex flex-col">
        <div>
          <h2 className="text-greeny font-bold">
            Graduate Full-Stack Software Engineer
          </h2>
          <h2>{`Accenture, Remote (Edinburgh)`}</h2>
        </div>
        <div className="italic">December 2022 - Present</div>
      </div>
      <div>
        Accenture is a global consulting & technology company known for its
        expertise in helping businesses with digital transformation.
      </div>
      <div className="flex flex-col gap-6">
        {/* Bootcamp */}
        <li className="ml-3 list-disc">
          Completed a 3 Month Bootcamp, usually collaborating with other
          graduates to develop projects using Agile methodologies, with a final
          in-person presentation.
          <div className="mt-2 flex flex-wrap gap-2">
            <Skills color="bgBlue" work={true}>
              Javascript
            </Skills>
            <Skills color="bgBlue" work={true}>
              Node.js
            </Skills>
            <Skills color="bgBlue" work={true}>
              React
            </Skills>
            <Skills color="bgBlue" work={true}>
              MySQL
            </Skills>
            <Skills color="bgBlue" work={true}>
              AWS
            </Skills>
            <Skills color="bgBlue" work={true}>
              Docker
            </Skills>
            <Skills color="bgBlue" work={true}>
              Postman
            </Skills>
            <Skills color="bgBlue" work={true}>
              Collaboration
            </Skills>
            <Skills color="bgBlue" work={true}>
              Proactivity
            </Skills>
            <Skills color="bgBlue" work={true}>
              Communication
            </Skills>
          </div>
        </li>

        {/* Tech4Good */}
        <li className="ml-3 list-disc">
          Got involved in a Tech4Good charity project and took a leadership
          role, where I supported and guided the team on a daily basis.
          <br />
          <p className="mt-2">
            Presented results and ideas and questions to the client in
            conversations and lead the product presentation.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Skills color="bgBlue" work={true}>
              Javascript
            </Skills>
            <Skills color="bgBlue" work={true}>
              React
            </Skills>
            <Skills color="bgBlue" work={true}>
              Tailwind
            </Skills>
            <Skills color="bgBlue" work={true}>
              Material UI
            </Skills>
            <Skills color="bgBlue" work={true}>
              Styled-Components
            </Skills>
            <Skills color="bgBlue" work={true}>
              Leadership
            </Skills>
            <Skills color="bgBlue" work={true}>
              Ownership
            </Skills>
            <Skills color="bgBlue" work={true}>
              Collaboration
            </Skills>
            <Skills color="bgBlue" work={true}>
              Proactivity
            </Skills>
            <Skills color="bgBlue" work={true}>
              Communication
            </Skills>
          </div>
        </li>

        {/* Major Client */}
        <li className="ml-3 list-disc">
          Joined a major project for a UK client, proactively contributed to the
          development, took ownership of a product and created initiatives and
          activities within the project.
          <div className="mt-2 flex flex-col gap-2">
            <p>
              Co-created the People Champions group to recognize project members
              and organized social activities.
            </p>
            <p>
              Took ownership of a substantial product, set up the GitHub repo,
              implemented GitHub Actions, created AWS CDK code using typescript
              for a lambda function, and developed necessary APIs, created the
              front-end journeys and necessary backend logic.
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            <Skills color="bgBlue" work={true}>
              Typescript
            </Skills>
            <Skills color="bgBlue" work={true}>
              Golang
            </Skills>
            <Skills color="bgBlue" work={true}>
              AWS
            </Skills>
            <Skills color="bgBlue" work={true}>
              AWS CDK
            </Skills>
            <Skills color="bgBlue" work={true}>
              Lambda
            </Skills>
            <Skills color="bgBlue" work={true}>
              API Gateway
            </Skills>
            <Skills color="bgBlue" work={true}>
              CloudWatch Logs
            </Skills>
            <Skills color="bgBlue" work={true}>
              Confluence
            </Skills>
            <Skills color="bgBlue" work={true}>
              Jira
            </Skills>
            <Skills color="bgBlue" work={true}>
              Leadership
            </Skills>
            <Skills color="bgBlue" work={true}>
              Ownership
            </Skills>
            <Skills color="bgBlue" work={true}>
              Collaboration
            </Skills>
            <Skills color="bgBlue" work={true}>
              Proactivity
            </Skills>
            <Skills color="bgBlue" work={true}>
              Communication
            </Skills>
            <Skills color="bgBlue" work={true}>
              Initiative
            </Skills>
            <Skills color="bgBlue" work={true}>
              Problem-Solving
            </Skills>
            <Skills color="bgBlue" work={true}>
              Fast Progression
            </Skills>
          </div>
        </li>

        {/* Recognition */}
        <li className="ml-3 list-disc">
          Received recognition from the{" "}
          <span className="text-white">Delivery Lead</span>,{" "}
          <span className="text-white">Product Owner</span>,{" "}
          <span className="text-white">Scrum Master</span>{" "}
          <span className="text-white">Tech Lead</span> and the entire team.
          <div className="mt-2 flex flex-wrap gap-1">
            <Skills color="bgBlue" work={true}>
              Star of the Month
            </Skills>
            <Skills color="bgBlue" work={true}>
              Ownership
            </Skills>
            <Skills color="bgBlue" work={true}>
              Leadership
            </Skills>
            <Skills color="bgBlue" work={true}>
              Collaboration
            </Skills>
            <Skills color="bgBlue" work={true}>
              Proactivity
            </Skills>
            <Skills color="bgBlue" work={true}>
              Communication
            </Skills>
            <Skills color="bgBlue" work={true}>
              Initiative
            </Skills>
            <Skills color="bgBlue" work={true}>
              Problem-Solving
            </Skills>
          </div>
        </li>

        {/* Project Delivery */}
        <li className="ml-3 list-disc">
          Took ownership on ensuring delivery tasks and documentation were
          fulfilled, created diagrams, tracked progress, and collaborated with
          the team/cross-team.
          <div className="mt-2 flex flex-wrap gap-1">
            <Skills color="bgBlue" work={true}>
              Jira
            </Skills>
            <Skills color="bgBlue" work={true}>
              Confluence
            </Skills>
            <Skills color="bgBlue" work={true}>
              Leadership
            </Skills>
            <Skills color="bgBlue" work={true}>
              Collaboration
            </Skills>
            <Skills color="bgBlue" work={true}>
              Proactivity
            </Skills>
            <Skills color="bgBlue" work={true}>
              Communication
            </Skills>
            <Skills color="bgBlue" work={true}>
              Initiative
            </Skills>
            <Skills color="bgBlue" work={true}>
              Problem-Solving
            </Skills>
          </div>
        </li>

        {/* Impact Company-Wide */}
        <li className="ml-3 list-disc">
          Made a significant impact company-wide as a Software Engineer.
          <div className="mt-2 flex flex-wrap gap-1">
            <Skills color="bgBlue" work={true}>
              Leadership
            </Skills>
            <Skills color="bgBlue" work={true}>
              Ownership
            </Skills>
            <Skills color="bgBlue" work={true}>
              Fast Progression
            </Skills>
            <Skills color="bgBlue" work={true}>
              Collaboration
            </Skills>
            <Skills color="bgBlue" work={true}>
              Proactivity
            </Skills>
            <Skills color="bgBlue" work={true}>
              Communication
            </Skills>
            <Skills color="bgBlue" work={true}>
              Initiative
            </Skills>
          </div>
        </li>

        <li className="ml-3 list-disc">
          Participated in the Recordings of the Accenture Early Talent 2024
          Recruitment program where I shared my experiences as a graduate at
          Accenture.
          <div className="mt-2 flex flex-wrap gap-1">
            <Skills color="bgBlue" work={true}>
              Proactivity
            </Skills>
            <Skills color="bgBlue" work={true}>
              Communication
            </Skills>
            <Skills color="bgBlue" work={true}>
              Initiative
            </Skills>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Experience;
