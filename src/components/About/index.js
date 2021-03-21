import React, { useState } from 'react';
import ToggleTheme from '../ToggleTheme';
import ProfilePic from '../../assets/images/profile.png';

function About() {
    const [infoStatus, setInfoStatus] = useState(true);

    return(
        <section id="about" className="cover">
            <ToggleTheme />
            <img className="profilePic" src={ProfilePic} alt="profile picture" title="Michael's picture 2020" />
            <div className="bio-wrapper">
                <div className="intro">
                    <h1>Michael Arvelo</h1>
                    <h1>Full-Stack Web Developer</h1>
                </div>
                <div className={`info ${infoStatus ? 'active' : ''}`}>
                    <div className="bio">
                        <p>I am a passionate developer and enjoy putting my all into my work. I love learning new programming languages and frameworks, always improving what I already know, and putting my skills to the test!</p>
                        <i className="fa fa-info fa-1x infoBtn" onClick={() => {setInfoStatus(!infoStatus)}}></i>
                    </div>
                    <div class="social-icons">
                        <a href="https://stackoverflow.com/users/13529182/michael-arvelo" target="_blank" title="Stack OverFlow">
                            <i className="fab fa-stack-overflow"></i>
                        </a>
                        <a href="https://github.com/MichaelDevelopsCode" target="_blank" title="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/michael-arvelo-169925148/" target="_blank" title="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/MichaelDevsCode" target="_blank" title="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    <i className="fa fa-angle-down fa-2x infoBtn" onClick={() => {setInfoStatus(!infoStatus)}}></i>
                    <h4>About Me</h4>
                </div>
            </div>
        </section>
    )
};

export default About;