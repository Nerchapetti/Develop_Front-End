import "./about.css"

const About = ({patron}) => {
    return (
    <div className="About">
        <p>{patron.about.about}</p>
    </div>
    )
}

export default About
 