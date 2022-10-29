import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { DiGoogleAnalytics } from 'react-icons/di'
import { GrAppleAppStore} from 'react-icons/gr'
import './skills.scss'

const Skills = () => {
    return (
        <div className="skills">
            <div className="mobile-skills-card">
                <div className="web-dev-card">
                    <AiOutlineAppstoreAdd style={{marginTop: '25px', border: '1px', borderColor: 'white'}} />
                    <h1>Web Design</h1>
                    <p>The technological revolution is changing suspect</p>
                </div>
                <div className="seo-card">
                    <DiGoogleAnalytics style={{marginTop: '25px'}}  />
                    <h1>SEO Strategy</h1>
                    <p>The technological revolution is changing suspect</p> 
                </div>
                <div className="app-mockup-card">
                    <GrAppleAppStore style={{marginTop: '25px'}}  />
                    <h1>App Mockup</h1>
                    <p>The technological revolution is changing suspect</p>
                </div>
                <div className="why-me">
                    <h5>-- My Skills</h5>
                    <h4>Why Hire Me For Next Project?</h4>
                    <p>
                    Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                    Tenetur ullam rerum ad iusto possimus sequi mollitia
                    </p>
                    <button>Contact me</button>
                </div>
            </div>
            <div className="desktop-skills-card">
                <div className="web-dev-card">
                    <AiOutlineAppstoreAdd style={{marginTop: '25px', border: '1px', borderColor: 'white'}} />
                    <h1>Web Design</h1>
                    <p>The technological revolution is changing suspect</p>
                </div>
                <div className="seo-card">
                    <DiGoogleAnalytics style={{marginTop: '25px'}}  />
                    <h1>SEO Strategy</h1>
                    <p>The technological revolution is changing suspect</p> 
                </div>
                <div className="app-mockup-card">
                    <GrAppleAppStore style={{marginTop: '25px'}}  />
                    <h1>App Mockup</h1>
                    <p>The technological revolution is changing suspect</p>
                </div>
                <div className="why-me">
                    <h5>-- My Skills</h5>
                    <h4>Why Hire Me For Next Project?</h4>
                    <p>
                    Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                    Tenetur ullam rerum ad iusto possimus sequi mollitia
                    </p>
                    <button>Contact me</button>
                </div>
            </div>
        </div>
    )
}
export default Skills