import gmailIcon from "./icons/gmail.png";
import phoneIcon from "./icons/phone.png";


const About = (props) => {
    return (
      <div className="About">
        <img src={require(`${props.about.profileImg}`)} alt="Profile ritin" className="profile-image"></img>
        <div className="about-description">
          <div className="about-head">
            <h1>{props.about.fullName}</h1>
            <p>{props.about.title}</p>
          </div>
  
          <div className="contact-div">
            <span>
              <img src={gmailIcon} alt="Gmail-icon" className="icon"></img>
              <a href={`mailto:${props.about.email}`}>{props.about.email}</a>
            </span><br></br>
            <span>
              <img src={phoneIcon} alt="Phone-icon" className="icon"></img>
              <a href={`tel: ${props.about.telephone}`}>{props.about.telephone}</a>
            </span>
          </div>
  
          <p className="about-summary">
            {props.about.summary}
          </p>
        </div>
      </div>
    )
  }


export default About;