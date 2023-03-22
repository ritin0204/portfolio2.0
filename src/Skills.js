const Skills = (props) => {
    const skillsList = props.skills.map((skillItem,idx) => {
        return (
            <Skill skill={skillItem.skill} level={skillItem.level} key={idx}/>
        )
    });
    return (
        <div className="skills">
            <h2>{props.title}</h2>
            <table>
                <tbody>
                    {skillsList}
                </tbody>
            </table>
        </div>
    );
}

const Skill = (props) => {
    return (
        <tr>
            <td className="name">{props.skill}</td>
            <td><div className="outer-box"><div className="inner-box" style={{ width: `${props.level}` }}></div></div></td>
        </tr>
    );
}

export default Skills;