import Project from "../components/Projects/Project";
import { SkillsSquare } from "../components/Global/SkillsSquare";
import MainComponent from "../components/Global/MainComponent";
import MainTitle from "../components/Global/MainTitle";

const Projects = () => {
  return (
    <MainComponent id="projects">
      <MainTitle>.projects()</MainTitle>

      {/* Resume */}
      <div className="flex flex-col md:flex-row md:w-full md:justify-evenly md:flex-wrap">
        <Project
          name="CoffeeCom"
          description="A full-stack e-commerce application with full integration with the Shopify Storefront API using GraphQL, to get the products and collections from the store and to add products to the cart and checkout. The application also uses the new Shopify Customer API to create a customer account and to login to the account."
          url="t3coffecom"
        >
          <SkillsSquare color="bgBlue" work={true}>
            T3 Stack
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Next.js
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Vercel
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            React
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Typescript
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Tailwind CSS
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Tailwind Styled Components
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Material UI
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            GraphQL
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            GraphQL Codegen
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Zustand
          </SkillsSquare>
        </Project>

        <Project
          name="Bitcoin Price Tracker"
          description="A simple frontend application connecting to the Coinbase websocket API to track the price of Bitcoin in real-time."
          url="websocket-coinbase-bitcoin"
        >
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
            Coinbase WebSocket
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Google Charts
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            HTML
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Tailwind CSS
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Vercel
          </SkillsSquare>
        </Project>

        <Project
          name="CrownClothing E-Commerce"
          description="A full-stack E-Commerce application to sell clothing with end-to-end integration with Stripe for payment processing and Firebase for user authentication and data storage."
          url="E-Commerce-React"
        >
          <SkillsSquare color="bgBlue" work={true}>
            Javascript
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            React
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            GraphQL (Apollo)
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            HTML
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Styled Components
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Sass
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Netlify
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Firebase
          </SkillsSquare>
        </Project>

        <Project
          name="Issue/Task Tracker CRUD Application"
          description="The application is a ASP.NET MVC Full-Stack CRUD Application, where you can create, read, update and delete issues/tasks. Using C# for the backend and for the frontend cshtml and css. Automatically deployed to Azure using Azure DevOps. And created a SMTP server for email confirmation and password reset."
          url="ProjectFinal"
        >
          <SkillsSquare color="bgBlue" work={true}>
            ASP.NET
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            MVC
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            C#
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            .NET
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            HTML
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            CSS
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            Azure
          </SkillsSquare>
          <SkillsSquare color="bgBlue" work={true}>
            SMTP
          </SkillsSquare>
        </Project>
      </div>
    </MainComponent>
  );
};

export default Projects;
