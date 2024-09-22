import React from 'react';
import './css/tree.css'; // We'll create this CSS file

const ExperienceTree = () => {


    return (
        <>
            <div className="tree">
                <div className="tree-root">MY CAREER</div>
                <div className="branch">
                    <div className="company">
                        <div className="company-name">Tata Consultancy Services</div>
                        <div className="job-title">Software Developer - System Engineer</div>
                        <div className="job-title">Jan 2020 - Mar 2023 -- 3.3yrs</div>
                        <div className="experience">
                            <div className="experience-node">Developed online platform for a leading stock exhange to onboard customers with ReactJs, learnt many things like SDLC, CI/CD, API and other valuable things at my time here.</div>
                        </div>
                    </div>
                    <div className="company">
                        <div className="company-name">Infosys</div>
                        <div className="job-title">Frontend Developer - Associate Consultant</div>
                        <div className="job-title">Mar 2023 - Jun 2024 -- 1.4yrs</div>
                        <div className="experience">
                            <div className="experience-node">Developed analytics dashboard frontend for a leading automotive client filled with visualisation and data heavy operations. Learnt NodeJs and more about backend here. Also developed applications with microfront architecture.</div>
                        </div>
                    </div>
                </div>


                
            </div>


        </>
    );
};

export default ExperienceTree;
