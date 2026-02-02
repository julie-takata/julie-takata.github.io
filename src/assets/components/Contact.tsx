import "../../App.css";
import { Card } from './Card';
import GithubIcon from '/github.png';
import LinkedinIcon from '/linkedin.png';
import GmailIcon from '/gmail.png';
function Contact(){
    return(<>
    <div className="container mb-5">
        <div className="row justify-content-center g-4">
            <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                <Card icon={GithubIcon} alt="github icon" title="Github" href="https://github.com/julie-takata" >projects and more!</Card>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                <Card icon={LinkedinIcon} alt="linkedin icon" title="Linkedin" href="https://www.linkedin.com/in/julietakata/" >connect with me!</Card>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                <Card icon={GmailIcon} alt="gmail icon" title="Gmail" href="mailto:juliectakata@gmail.com">direct contact!</Card>
            </div>
        </div>
    </div>
    </>);
}
export default Contact;