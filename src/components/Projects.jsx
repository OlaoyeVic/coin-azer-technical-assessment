import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaQuoteRight } from 'react-icons/fa'
import { FaQuoteLeft } from 'react-icons/fa'
import './projects.scss'
import laptop from '../assets/laptop.svg'
import mobile from '../assets/mobile.svg'
import landing from '../assets/landing.svg'
import man from '../assets/man.jpg'
import lady from '../assets/lady.jpg'

const Projects = () => {
    return (
        <div className="projects">
            <div className="mobile-projects-card">
                <div className="project-one">
                    <h5>-- Project 1</h5>
                    <h2>Branding Nice Studio</h2>
                    <div className="project-content">
                        <div>
                            <p>
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                            </p>
                            <AiOutlineArrowRight style={{color: 'red'}} /> <b style={{color: 'red', cursor: 'pointer'}}>Read More</b>
                        </div>
                        <div>
                            <img src={laptop} alt='laptops' />
                        </div>
                    </div>
                </div>
                <div className="project-two">
                    <h5>-- Project 2</h5>
                    <h2>Branding Nice Studio</h2>
                    <div className="project-content">
                        <div>
                            <img src={mobile} alt='laptops' />
                        </div>
                        <div>
                            <p>
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                            </p>
                            <AiOutlineArrowRight style={{color: 'red'}} /> <b style={{color: 'red', cursor: 'pointer'}}>Read More</b>
                        </div>
                    </div>
                </div>
                <div className="project-three">
                    <h5>-- Project 3</h5>
                    <h2>Branding Nice Studio</h2>
                    <div className="project-content">
                        <div>
                            <p>
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                            </p>
                            <AiOutlineArrowRight style={{color: 'red'}} /> <b style={{color: 'red', cursor: 'pointer'}}>Read More</b>
                        </div>
                        <div>
                            <img src={landing} alt='laptops' />
                        </div>
                    </div>
                </div>
                <div className='project-nos'>
                    <div>
                        <h4>100+</h4>
                        <p>Happy Clients</p>
                    </div>
                    <div>
                        <h4>167</h4>
                        <p>Projects Done</p>
                    </div>
                    <div>
                        <h4>60</h4>
                        <p>Top Reviews</p>
                    </div>
                    <div>
                        <h4>10+</h4>
                        <p>Years Experience</p>
                    </div>
                </div>
                <div className='project-testimonials'>
                    <div className='first-testimonial'>
                        <div>
                            <img src={lady} alt='a lady' />
                        </div>
                        <div>
                            <FaQuoteRight style={{color: 'red'}} />
                            <p>
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                            </p>
                            <p style={{color: 'gray'}}>DANIELLE DINO</p>
                            <p>Founder of WebPot</p>
                        </div>
                    </div>
                    <div className='second-testimonial'>
                        <div>
                            <FaQuoteLeft style={{color: 'red'}} />
                            <p>
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                            </p>
                            <p style={{color: 'gray'}}>BRUNO PACQIO</p>
                            <p>Founder of TakeoverPT</p>
                        </div>
                        <div>
                            <img src={man} alt='a man' />
                        </div>
                    </div>
                </div>
                <div className='contact-me'>
                    <hr />
                    <h3>Let's work Together</h3>
                    <p>Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.</p>
                    <button>Contact me</button>
                </div>
            </div>
            <div className="desktop-projects-card">
            <div className="project-one">
                    <h5>-- Project 1</h5>
                    <h2>Branding Nice Studio</h2>
                    <div className="project-content">
                        <div>
                            <p>
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                            </p>
                            <AiOutlineArrowRight style={{color: 'red'}} /> <b style={{color: 'red', cursor: 'pointer'}}>Read More</b>
                        </div>
                        <div>
                            <img src={laptop} alt='laptops' />
                        </div>
                    </div>
                </div>
                <div className="project-two">
                    <h5>-- Project 2</h5>
                    <h2>Branding Nice Studio</h2>
                    <div className="project-content">
                        <div>
                            <img src={mobile} alt='laptops' />
                        </div>
                        <div>
                            <p>
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                            </p>
                            <AiOutlineArrowRight style={{color: 'red'}} /> <b style={{color: 'red', cursor: 'pointer'}}>Read More</b>
                        </div>
                    </div>
                </div>
                <div className="project-three">
                    <h5>-- Project 3</h5>
                    <h2>Branding Nice Studio</h2>
                    <div className="project-content">
                        <div>
                            <p>
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                            </p>
                            <AiOutlineArrowRight style={{color: 'red'}} /> <b style={{color: 'red', cursor: 'pointer'}}>Read More</b>
                        </div>
                        <div>
                            <img src={landing} alt='laptops' />
                        </div>
                    </div>
                </div>
                <div className='project-nos'>
                    <div>
                        <h4>100+</h4>
                        <p>Happy Clients</p>
                    </div>
                    <div>
                        <h4>167</h4>
                        <p>Projects Done</p>
                    </div>
                    <div>
                        <h4>60</h4>
                        <p>Top Reviews</p>
                    </div>
                    <div>
                        <h4>10+</h4>
                        <p>Years Experience</p>
                    </div>
                </div>
                <div className='project-testimonials'>
                    <div className='first-testimonial'>
                        <div>
                            <img src={lady} alt='a lady' />
                        </div>
                        <div>
                            <FaQuoteRight style={{color: 'red'}} />
                            <p>
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                            </p>
                            <p style={{color: 'gray'}}>DANIELLE DINO</p>
                            <p>Founder of WebPot</p>
                        </div>
                    </div>
                    <div className='second-testimonial'>
                        <div>
                            <FaQuoteLeft style={{color: 'red'}} />
                            <p>
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. 
                                Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                            </p>
                            <p style={{color: 'gray'}}>BRUNO PACQIO</p>
                            <p>Founder of TakeoverPT</p>
                        </div>
                        <div>
                            <img src={man} alt='a man' />
                        </div>
                    </div>
                </div>
                <div className='contact-me'>
                    <hr />
                    <h3>Let's work Together</h3>
                    <p>Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.</p>
                    <button>Contact me</button>
                </div>
            </div>
        </div>
    )
}
export default Projects