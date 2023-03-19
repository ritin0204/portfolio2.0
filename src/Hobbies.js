const Hobbies= (props) => {
    const allHobbies = props.hobbies.map(hobby => {
        return (
            <Hobby hobby={hobby}/>
        );
    });
    return (
        <div className="hobbies-div">
            <h1>Hobbies</h1>
            {allHobbies}
        </div>
    );
}

const Hobby = (props) => {
    return(
        <div className="hobby-div">
            <img src={require(`${props.hobby.coverImg}`)} alt={props.hobby.title} className="coverImg"></img>
            <h2>{props.hobby.title}</h2>
            <p>{props.hobby.description}</p>
        </div>
    );
}


export default Hobbies;