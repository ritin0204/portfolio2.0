const Projects = (props) => {
    const projects = props.projects.map(project => {
        return (
            <Project project={project}/>
        );
    });
    return (
        <div className="projects">
            <h1> Projects ( {props.projects.length} )</h1>
            <div className="all-projects">
                {projects}
            </div>
        </div>
    );
}

const Project = (props) => {
    const project = props.project;
    return (
        <div className="project-div" key={project.id}>
            <img src={require(`${project.previewImg}`)} alt={project.title}></img>
            <div className="project-details">
                <div className="tags"><span>#Html</span><span>#css</span><span>#JavaScript</span></div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="buttons">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="demo">Demo</a>
                    <a href={project.codeUrl} className="code">Code</a>
                </div>
            </div>
        </div>
    );
}


export default Projects;