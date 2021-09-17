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
import Sayujya from "./teams/Sayujya.jpeg"
import sajan from "./teams/sajan.jpeg"

const About = () => {
    return (
        <div>
            <Header />
            <div className="main-container-about">
                <div className="team">
                    <h1>Our Team</h1>
                    <hr />
                    <div className="team-members">
                        <TeamMember name="Rahul T" about="DevOps-Web" img={rahul} l="rahulmanojcet"/>                                             
                        <TeamMember name="Surya V R" about="DevOps-Web" img={surya} l="surya-vr-8a7b501a7"/>                                             
                        <TeamMember name="Vaishnav P" about="DevOps-Web" img={vyshnav} l="vrv-vyshnav"/>                                             
                        <TeamMember name="Sayujya surjit" about="Content-Writer" img={Sayujya} l="sayujya-surjit-49b6061b2"/>                                             
                        <TeamMember name="Amritha M L" about="DevOps-Web" img={amritha} l="amritha-ml-9401b014b"/>
                        <TeamMember name="Allen Vengal" about="Chief Operating Officer" img={allen} l="allen-vengal-79bb081a"/>                                             
                        <TeamMember name="Sajan Joseph " about="Operations" img={sajan} l="sajan-joseph-35331110a"/> 
                        
                    </div>
                    <h1 className="position">Alumini</h1>
                    <hr />
                    <div className="team-members">
                        <TeamMember name="Shameer M R" about="DevOps-Web" img={shameer} l="shameer-m-r-5916771b6"/>
                        <TeamMember name="sapna" about="DevOps-Web" img={sapna} l="sapna2001"/>
                        <TeamMember name="Jebin Jose " about="Operations" img={jebin} l="jebin-jose-6b30491b8"/> 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
