import Footer from "../Footer/Footer"
import Header from "../NavBar/Header"
import "./about.scss"
import TeamMember from "./TeamMember";
import amritha from "./teams/amritha.jpg"
import allen from "./teams/allen.jpg"
import sapna from "./teams/sapna.jpg"
import shameer from "./teams/shameer.jpg"
import vyshnav from "./teams/vyshnav.jpeg"
import rahul from "./teams/rahul.JPG"
import surya from "./teams/surya.jpeg"
import jebin from "./teams/jebin.jpeg"
import sajan from "./teams/sajan.jpeg"
const About = () => {
    return (
        <div>
            <Header />
            <div className="main-container-about">
                {/* <div className="about">
                    <h1>About</h1>
                    <p>
                    providing a platform for supporting local charity causes and for raising campaign for donations.
                    </p>
                </div> */}
                <div className="team">
                    <h1>Our Team</h1>
                    <hr />
                    {/* <p>Sometimes you meet someone, and it's so clear that two of you, on some level belong together. As friends or as co-workers or as something entirely different. You meet these people throughout your life, out of nowhere, under the strangest circumstances, and they help you feel alive. And that's what we feel here at Team Nerchapetti.</p> */}
                    {/* <h1 className="position">Technical Team</h1> */}
                    <div className="team-members">
                        <TeamMember name="Rahul T" about="DevOps-Web" img={rahul} l="rahulmanojcet" i="" t=""/>                                             
                        <TeamMember name="Surya V R" about="DevOps-Web" img={surya} l="surya-vr-8a7b501a7" i="" t=""/>                                             
                        <TeamMember name="Vaishnav P" about="DevOps-Web" img={vyshnav} l="vrv-vyshnav" i="" t="" title="vyshnav vishnu"/>                                             
                        <TeamMember name="Amritha M L" about="DevOps-Web" img={amritha} l="amritha-ml-9401b014b" i="" t=""/>
                        <TeamMember name="Jebin Jose " about="Operations" img={jebin} l="jebin-jose-6b30491b8" i="" t=""/> 
                        <TeamMember name="Shameer M R" about="DevOps-Web" img={shameer} l="shameer-m-r-5916771b6" i="" t=""/>
                        <TeamMember name="Allen Vengal" about="Chief Operating Officer" img={allen} l="allen-vengal-79bb081a" i="" t=""/>                                             
                        <TeamMember name="Sajan Joseph " about="Operations" img={sajan} l="sajan-joseph-35331110a" i="" t=""/> 
                        
                    </div>
                    <h1 className="position">Alumini</h1>
                    <hr />
                    <div className="team-members">
                        <TeamMember name="sapna" about="DevOps-Web" img={sapna} l="sapna2001" i="" t=""/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
