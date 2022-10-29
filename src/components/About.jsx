import potrait from '../assets/potrait.svg'
import './about.scss'

const About = () => {
    return (
        <div className="about">
            <div className="mobile-about">
                <div className="about-text">
                    <h5>-- Introducing</h5>
                    <h1>Hello,</h1>
                    <h1>I'm Victor</h1>
                    <p>
                        Since beginning my journey as a freelance developer, 
                        i've done remote work for agencies, consulted for startupsx and
                        collaborated with talented people to create digital products 
                    </p>
                    <button>Contact me</button>
                </div>
                <div className="about-img">
                    <img src={potrait} alt='potrait of a man' />
                </div>
            </div>
            <div className="desktop-about">
                <div className='desktop-about-text'>
                    <h5>-- Introducing</h5>
                    <h1>Hello,</h1>
                    <h1>I'm Victor</h1>
                    <p>
                        Since beginning my journey as a freelance developer, 
                        i've done remote work for agencies, consulted for startupsx and
                        collaborated with talented people to create digital products 
                    </p>
                    <button>Contact me</button>
                </div>
                <div className="desktop-about-img">
                    <img src={potrait} alt='potrait of a man' />
                </div>
            </div>
        </div>
    )
}
export default About