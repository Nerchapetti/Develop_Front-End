import Footer from "../Footer/Footer"
import Header from "../NavBar/Header"
import "./about.css"
import TeamMember from "./TeamMember";

const About = () => {
    return (
        <div>
            <Header />
            <div className="main-container-about">
                <div className="about">
                    <h1>About</h1>
                    <p>
                    providing a platform for supporting local charity causes and for raising campaign for donations.
                    </p>
                </div>
                <div className="team">
                    <h1>Our Team</h1>
                    <p>Sometimes you meet someone, and it's so clear that two of you, on some level belong together. As friends or as co-workers or as something entirely different. You meet these people throughout your life, out of nowhere, under the strangest circumstances, and they help you feel alive. And that's what we feel here at Team Nerchapetti.</p>
                    <div className="team-members">
                        <TeamMember name="vyshnav" about="i am vyshnav fghfg dfgfd gfdgf gfi am vyshnav fghfg dfgfd gfdgf gf"/>
                        <TeamMember name="rahul" about="i am rahul"/>
                        <TeamMember name="surya" about="i am surya"/>
                        <TeamMember name="surya" about="i am surya"/>
                        <TeamMember name="vyshnav" about="i am vyshnav"/>
                        <TeamMember name="rahul" about="i am rahul"/>
                        <TeamMember name="surya" about="i am surya"/>
                        <TeamMember name="surya" about="i am surya"/>
                        
                                             
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
