import About from "./About.js";
import Skills from "./Skills.js"
import Hobbies from "./Hobbies.js";
import data from "./userData.json";
import Projects from "./Projects.js";
import Experiences from "./Experiences.js";
import Connect from "./Connect.js";

function App() {
  return (
    <main className="App">
      <div className="sidegrid">
        <About about={data.About} />
        <Experiences experiences={data.Experiences} />
        <Hobbies hobbies={data.Hobbies}/>
      </div>
      <div className="main-grid">
        <div className="skill-div">
        <Skills title="Front End" skills={data.Skills["Front End"]} key={"11"}/>
        <Skills title="Back End" skills={data.Skills["Back End"]} key={"12"}/>
        </div>
        <Projects projects={data.Projects} />
        <Connect/>
      </div>
      <footer>created by <a href="https://www.linkedin.com/in/ritin-tiwari/">@Ritin Tiwari</a> -Linkedin.com</footer>
    </main>
  );
}

export default App;
