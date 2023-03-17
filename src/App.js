import About from "./About.js";
import Skills from "./Skills.js"
import calSS from "./icons/calculator.png";
import data from "./userData.json";


function App() {
  return (
    <main className="App">
      <About about={data.About} />
      <Skills title="Front End" skills={data.Skills["Front End"]} />
      <Skills title="Back End" skills={data.Skills["Back End"]} />
      <Projects projects={data.Projects}/>
    </main>
  );
}

function Projects() {
  return (
    <div className="projects">
      <h1> Projects(5)</h1>

      <div className="all-projects">

        <div className="project-div">
          <img src={calSS} alt="Calculator App ScreenShot"></img>
          <div className="project-details">
            <div className="tags"><span>#Html</span><span>#css</span><span>#JavaScript</span></div>
            <h2>Calculator Web App</h2>
            <p>This is a solution to the Calculator app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.</p>
            <div className="buttons">
              <a href="https://calculator-app0204.web.app/" target="_blank" rel="noreferrer" className="demo">Demo</a>
              <a href="https://github.com/ritin0204/calculator-app" className="code">Code</a>
            </div>
          </div>
        </div>


        <div className="project-div">
          <img src="https://raw.githubusercontent.com/ritin0204/space-tourism-website/master/screenshots/home.png" alt="Space Turism ScreenShot"></img>
          <div className="project-details">
            <div className="tags"><span>#Html</span><span>#css</span><span>#JavaScript</span><span>#ReactJS</span></div>
            <h2>Space Turism Website</h2>
            <p>In this project, This is a front-end project challenge solution created with reactJS to fulfill the given design and harness my front-end skills. </p>
            <div className="buttons">
              <a href="https://space-tourism-37da7.web.app/" target="_blank" rel="noreferrer" className="demo">Demo</a>
              <a href="https://github.com/ritin0204/space-tourism-website" className="code">Code</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
