import "../../App.css";
import { Card } from './Card';
import GithubIcon from '/github.png';
import LinkedinIcon from '/linkedin.png';
import GmailIcon from '/gmail.png';
function Contact(){
    return(<>
    <div className="d-flex flex-row justify-content-center align-items-center mb-5 w-75 mx-auto gap-5">
        <div className="col-4">
            <Card icon={GithubIcon} alt="github icon" title="Github" href="https://github.com/julie-takata">
            projects and more!
            </Card>
        </div>
        <div className="col-4">
            <Card icon={LinkedinIcon} alt="linkedin icon" title="Linkedin" href="https://www.linkedin.com/in/julietakata/">
            connect with me!
            </Card>
        </div>
        <div className="col-4">
            <Card icon={GmailIcon} alt="gmail icon" title="Gmail" href="mailto:juliectakata@gmail.com">
            direct contact!
            </Card>
        </div>
    </div>
    </>);
}
export default Contact;