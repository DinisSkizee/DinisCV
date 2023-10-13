import { useThemeStore } from "../../../../store/store";
import { SkillsSquare } from "../../../Global/SkillsSquare";

const Skills = () => {
  const { theme } = useThemeStore((state) => state);
  return (
    <div
      className={`${
        theme === "dark" ? "text-white" : "text-bgDarkBlue"
      } mt-8 w-fit`}
    >
      <h1 className="font-semibold text-xl">Skills</h1>
      <div className="border-b-white border-[1px] my-4" />
      <div className="text-sm flex flex-col gap-4">
        {/* FRONTEND */}
        <div>
          <h2>Frontend</h2>
          <div className="flex-wrap flex gap-1">
            <SkillsSquare color="bgDarkBlue" work={true}>
              HTML
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              CSS
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Sass
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Javascript
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              React
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Tailwind CSS
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Google Charts
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Stripe
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Material UI
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Tailwind Styled Components
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Styled Components
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              T3 Stack
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Next.js
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Vite
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Zustand
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Redux
            </SkillsSquare>
          </div>
        </div>

        {/* BACKEND */}
        <div>
          <h2>Backend</h2>
          <div className="flex-wrap flex gap-1">
            <SkillsSquare color="bgDarkBlue" work={true}>
              Typescript
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Golang
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              C++
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              C#
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              .NET
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Python
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Node.js
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Express
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              GraphQL
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              GraphQL Codegen
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              MySQL
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              GraphQL (Apollo)
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              tRPC
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Zod
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Postman
            </SkillsSquare>
          </div>
        </div>

        {/* CLOUD & DEVOPS */}
        <div>
          <h2>Cloud & DevOps</h2>
          <div className="flex-wrap flex gap-1">
            <SkillsSquare color="bgDarkBlue" work={true}>
              AWS (Amazon Web Services)
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              API Gateway
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Lambda
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              CloudWatch Logs
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              AWS CDK
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Github Actions
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Docker
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Vercel
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Netlify
            </SkillsSquare>
          </div>
        </div>

        {/* PROJECT MANAGEMENT TOOLS */}
        <div>
          <h2>Project Collaboration Tools</h2>
          <div className="flex-wrap flex gap-1">
            <SkillsSquare color="bgDarkBlue" work={true}>
              Confluence
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Jira
            </SkillsSquare>
          </div>
        </div>

        <div>
          <h2>Misc</h2>
          <div className="flex-wrap flex gap-1">
            <SkillsSquare color="bgDarkBlue" work={true}>
              Social Media
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Firebase
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Shopify Storefront API
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Adobe Photoshop
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Adobe Premiere Pro
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Figma
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Discord
            </SkillsSquare>
          </div>
        </div>
        <div>
          <h2>Soft Skills</h2>
          <div className="flex-wrap flex gap-1">
            <SkillsSquare color="bgDarkBlue" work={true}>
              Proactivity
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Leadership
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Ownership
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Collaboration
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Communication
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Initiative
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Problem Solving
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Fast Progression
            </SkillsSquare>
          </div>
        </div>
      </div>

      {/* MISC */}
    </div>
  );
};

export default Skills;
