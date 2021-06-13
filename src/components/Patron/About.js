import "./about.css"

const About = ({patron}) => {
    return (
    <div className="About">
        <p dangerouslySetInnerHTML={ {__html: patron.about.about} }></p>
    </div>
    )
}

export default About
 