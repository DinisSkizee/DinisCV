import { useThemeStore } from "../../../store/store";
import { SkillsSquare } from "../../Global/SkillsSquare";

const Experience = () => {
  const { theme } = useThemeStore((state) => state);
  return (
    <div className="text-graywhite flex flex-col gap-2">
      <div
        className={`${
          theme === "dark" ? "text-white" : "text-bgDarkBlue"
        } flex flex-col`}
      >
        <div>
          <h2 className="text-greeny font-bold">
            Graduate Full-Stack
            <br className="visible md:hidden" /> Software Engineer
          </h2>
          <h2>Accenture, Remote (Edinburgh)</h2>
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
            <SkillsSquare color="bgBlue" work={true}>
              Javascript
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Node.js
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Express
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              React
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              MySQL
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              AWS (Amazon Web Services)
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              AWS CDK
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Docker
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Postman
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Collaboration
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Proactivity
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Communication
            </SkillsSquare>
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
            <SkillsSquare color="bgBlue" work={true}>
              Javascript
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              React
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Vite
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Tailwind CSS
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Material UI
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Styled Components
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Leadership
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Ownership
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Collaboration
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Proactivity
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Communication
            </SkillsSquare>
          </div>
        </li>

        {/* Major Client */}
        <li className="ml-3 list-disc">
          Joined a project for a UK postal services client, proactively
          contributed to the development, took ownership of a product and
          created initiatives and activities within the project.
          <div className="mt-2 flex flex-col gap-2">
            <p>
              Co-created the People Champions group to recognize project members
              and organized social activities.
            </p>
            <p>
              Took ownership of a substantial product, set up the GitHub repo,
              implemented GitHub Actions, created AWS CDK code using typescript
              for a lambda function, and developed necessary APIs, created the
              frontend journeys and necessary backend logic.
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            <SkillsSquare color="bgBlue" work={true}>
              Typescript
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Golang
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              AWS (Amazon Web Services)
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              AWS CDK
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Lambda
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              API Gateway
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              CloudWatch Logs
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Confluence
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Jira
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Leadership
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Ownership
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Collaboration
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Proactivity
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Communication
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Initiative
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Problem Solving
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Fast Progression
            </SkillsSquare>
          </div>
        </li>

        {/* Recognition */}
        <li className="ml-3 list-disc">
          Received recognition from the{" "}
          <span
            className={`${theme === "dark" ? "text-white" : "text-bgDarkBlue"}`}
          >
            Delivery Lead
          </span>
          ,{" "}
          <span
            className={`${theme === "dark" ? "text-white" : "text-bgDarkBlue"}`}
          >
            Product Owner
          </span>
          ,{" "}
          <span
            className={`${theme === "dark" ? "text-white" : "text-bgDarkBlue"}`}
          >
            Scrum Master
          </span>{" "}
          <span
            className={`${theme === "dark" ? "text-white" : "text-bgDarkBlue"}`}
          >
            Tech Lead
          </span>{" "}
          and the entire team.
          <div className="mt-2 flex flex-wrap gap-1">
            <SkillsSquare color="bgBlue" work={true}>
              Star of the Month
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Ownership
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Leadership
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Collaboration
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Proactivity
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Communication
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Initiative
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Problem Solving
            </SkillsSquare>
          </div>
        </li>

        {/* Project Delivery */}
        <li className="ml-3 list-disc">
          Took ownership on ensuring delivery tasks and documentation were
          fulfilled, created diagrams, tracked progress, and collaborated with
          the team/cross-team.
          <div className="mt-2 flex flex-wrap gap-1">
            <SkillsSquare color="bgBlue" work={true}>
              Jira
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Confluence
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Leadership
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Collaboration
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Proactivity
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Communication
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Initiative
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Problem Solving
            </SkillsSquare>
          </div>
        </li>

        {/* Impact Company-Wide */}
        <li className="ml-3 list-disc">
          Made a significant impact company-wide as a Software Engineer.
          <div className="mt-2 flex flex-wrap gap-1">
            <SkillsSquare color="bgBlue" work={true}>
              Leadership
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Ownership
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Fast Progression
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Collaboration
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Proactivity
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Communication
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Initiative
            </SkillsSquare>
          </div>
        </li>

        {/* Early Talent Recordings */}
        <li className="ml-3 list-disc">
          Participated in the Recordings of the Accenture Early Talent 2024
          Recruitment program where I shared my experiences as a graduate at
          Accenture.
          <div className="mt-2 flex flex-wrap gap-1">
            <SkillsSquare color="bgBlue" work={true}>
              Proactivity
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Communication
            </SkillsSquare>
            <SkillsSquare color="bgBlue" work={true}>
              Initiative
            </SkillsSquare>
          </div>
        </li>

        {/* UK Energy & Gas Client */}
        <li className="ml-3 list-disc">
          As a Full-Stack Developer for a UK Energy & Gas Client, I conducted a
          performance audit and implemented optimizations, balancing these tasks
          with ongoing project development.
          <div className="mt-2 flex flex-col gap-2">
            <p>
              Led a comprehensive audit, significantly enhancing application
              performance by reducing load times by 84% on key pages.
            </p>
            <p>
              Presented a detailed implementation strategy to the client,
              documenting the process and results effectively.
            </p>
            <p>
              Actively contributed to other project releases, suggesting and
              implementing best practices for project efficiency.
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            <SkillsSquare color="bgGreen" work={true}>
              Typescript
            </SkillsSquare>
            <SkillsSquare color="bgGreen" work={true}>
              Node.js
            </SkillsSquare>
            <SkillsSquare color="bgGreen" work={true}>
              React
            </SkillsSquare>
            <SkillsSquare color="bgGreen" work={true}>
              Redux
            </SkillsSquare>
            <SkillsSquare color="bgGreen" work={true}>
              RxJs
            </SkillsSquare>
            <SkillsSquare color="bgGreen" work={true}>
              Scss
            </SkillsSquare>
            <SkillsSquare color="bgGreen" work={true}>
              Performance Optimization
            </SkillsSquare>
            <SkillsSquare color="bgGreen" work={true}>
              Client Presentation
            </SkillsSquare>
            <SkillsSquare color="bgGreen" work={true}>
              Project Documentation
            </SkillsSquare>
            <SkillsSquare color="bgGreen" work={true}>
              Proactivity
            </SkillsSquare>
            <SkillsSquare color="bgGreen" work={true}>
              Problem Solving
            </SkillsSquare>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Experience;
