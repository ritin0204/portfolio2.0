const Experiences = (props) => {
    const companies = props.experiences.map((company, idx) => {
        return (
            <Company company={company} key={idx}/>
        );
    });
    return (
        <div className="experiences-div">
            <h1>Experiences</h1>
            {companies}
        </div>
    );
}


const Company = (props) => {
    return (
        <div className="company-div">
            <img src={require(`${props.company.componyLogo}`)} alt={props.company.title} className="company-logo"></img>
            <div className="company-details">
                <div className="time"><span>{props.company.start}</span><span>-{props.company.end}</span></div>
                <h2>{props.company.title}</h2>
                <p>
                {props.company.Description}
                </p>
            </div>
        </div>
    );
}

export default Experiences;