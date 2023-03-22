import {  useState } from "react";

const Projects = (props) => {
    // Manage Project Tags
    const allProjectTags = {}
    props.projects.forEach(project => {
        project.tags.forEach(tag => {
            if (allProjectTags[tag] === undefined) 
            {
                allProjectTags[tag] = [project.id];
            }
            else
            {
                allProjectTags[tag].push(project.id);
            }
        });
    });

    const [tag, setTag] = useState("All");
    const [allProjects, setAllProjects] = useState(props.projects);
    const handleFilter = (tag) => {
        setTag(tag);
        setAllProjects(filterProjects(tag));
    }
    
    //function to filter projects according to filter
    function filterProjects(tag) {
        if ( tag === "All") {
            return props.projects;
        }
        const filteredProjects = [{}];
        filteredProjects.shift();
        allProjectTags[tag].forEach(item => {
            filteredProjects.push(props.projects[item]);
        });
        setCurrentPage(1);
        return filteredProjects;
    }

    const tagsButton = Object.keys(allProjectTags).map(item=>{
        const activeTag = (item === tag) ? "active" : "";
        return (
            <button className={`tag-btn ${activeTag}`} onClick={()=>{handleFilter(item)}} key={item}>{`${item.charAt(1).toUpperCase()+item.slice(2,)}`}</button>
        );
    });


    // To Manage Pagignation
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 4;
    const totalPages = Math.ceil(allProjects.length / itemPerPage);

    const handlePageChange = (pageNumber) => {
        window.location.href = "#project-top";
        setCurrentPage(pageNumber);
    };

    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
        const active = currentPage === i ? "activePage" : "";
        pagination.push(
            <button key={i} onClick={() => handlePageChange(i)} className={active}>
                {i}
            </button>
        );
    }

    
    const projects = allProjects.slice(
            (currentPage - 1) * itemPerPage,
            currentPage * itemPerPage <= allProjects.length ? 
            currentPage * itemPerPage : 
            allProjects.length
        ).map((project, idx) => {
        return (
            <Project project={project} key={idx} />
        );
    });

    return (
        <div className="projects">
            <div className="project-head">
                <h1> Projects ( {allProjects.length} )</h1>
                <div className="tags-btns">
                    <button className={`tag-btn ${(tag === "All" ? "active": "")}`} onClick={()=>{handleFilter("All")}}>All</button>
                    {tagsButton}
                </div>
            </div>
            <div className="all-projects" id="project-top">
                {projects}
            </div>
            <div className="page-indctr">
            <button key="<" onClick={() => {setCurrentPage(((currentPage%totalPages)-1) === 0 ? totalPages :(currentPage%totalPages)-1)}}>{"<"}</button>
                {pagination}
            <button key=">" onClick={() => {setCurrentPage((currentPage%totalPages)+1)}}>{">"}</button>
            </div>
        </div>
    );
}

const Project = (props) => {
    const project = props.project;
    const tags = project.tags.map((tag, index) => {
        return (
            <span key={index}>{`#${tag.charAt(1).toUpperCase()+tag.slice(2,)}`}</span>
        );
    })
    return (
        <div className="project-div" key={project.id}>
            <img src={require(`${project.previewImg}`)} alt={project.title}></img>
            <div className="project-details">
                <div className="tags">{tags}</div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="buttons">
                    {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer" className="demo">Demo</a> : null}
                    <a href={project.codeUrl} className="code">Code</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;