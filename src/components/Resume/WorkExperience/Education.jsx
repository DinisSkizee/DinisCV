const Education = () => {
  return (
    <div className="text-graywhite flex flex-col gap-2">
      <div className="text-white flex flex-col">
        <div>
          <h2 className="text-gold font-bold">Anglia Ruskin University</h2>
          <h2>BEng Computer Science, Cambridge</h2>
        </div>
        <div className="italic">September 2018 - July 2021</div>
        <br />
        <h2>Relevant Subjects:</h2>
        <ol className="ml-3 text-graywhite md:ml-5">
          <li className="list-disc">Core Mathematics for Computing</li>
          <li className="list-disc">Database Design and Implementation</li>
          <li className="list-disc">Interaction and Usability</li>
          <li className="list-disc">Software Engineering</li>
          <li className="list-disc">Object-Oriented C++</li>
          <li className="list-disc">Distributed Programming</li>
          <li className="list-disc">
            Final Project - Microsoft ASP.NET MVC Full-Stack Development (Issue
            Tracker)
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Education;
