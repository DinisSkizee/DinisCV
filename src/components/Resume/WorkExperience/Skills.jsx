import { SkillsSquare } from "../Timeline/Skills";

const Skills = () => {
  return (
    <div className="mt-8 w-fit text-white">
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
              Javascript
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              React
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Tailwind
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Material UI
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Styled-Components
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Next.js
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
              Python
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Node.js
            </SkillsSquare>
            <SkillsSquare color="bgDarkBlue" work={true}>
              Express
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
              Cloudwatch Logs
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
          </div>
        </div>

        {/* PROJECT MANAGEMENT TOOLS */}
        <div>
          <h2>Project Management & Collaboration Tools</h2>
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
      </div>

      {/* MISC */}
    </div>
  );
};

export default Skills;
