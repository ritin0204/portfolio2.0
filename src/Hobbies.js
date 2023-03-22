const Hobbies= (props) => {
    const allHobbies = props.hobbies.map((hobby, idx) => {
        return (
            <Hobby hobby={hobby} id={idx} key={idx}/>
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
        <div className="hobby-div" key={props.id}>
            <img src={require(`${props.hobby.coverImg}`)} alt={props.hobby.title} className="coverImg"></img>
            <h2>{props.hobby.title}</h2>
            <p>{props.hobby.description}</p>
        </div>
    );
}


export default Hobbies;