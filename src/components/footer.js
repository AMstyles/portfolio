import React from "react";
import "./footer.scss";

function Footer() {
    return (
        <section id="contact">
            <div className="footer">
                <hr className='line' />


                <div className="footer-content">


                    <div className="footer-content1">
                        <h1>Arinaho Muleba</h1>
                        <p>Software Developer</p>
                        <p>
                            <a href="
                    mailto:arinaomuleluz@gmail.com
                    ">Email</a>
                        </p>
                        <p>
                            <a href="
                    https://www.linkedin.com/in/arinaho-muleba-3b4753216/
                    ">LinkedIn</a>
                        </p>
                        <p>
                            <a href="
                        https://github.com/AMstyles"
                            >Github</a>
                        </p>
                        <p>
                            <a href="
                        https://instagram.com/am_stylesrsa
                    ">Instagram</a>
                        </p>
                    </div>

                    <div className="footer-content2">
                        <h1>Education📚</h1>
                        <p>Wits University</p>
                        <p>Computer Science & Applied Mathematics</p>
                        <p> 3rd Year</p>
                    </div>

                </div>



                <p className="rick">Made with <a className="rick-link" href=" https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Lots Of Love</a> ❤️ @ AMstyles Labs</p>

                <p className="copyright">

                    © 2022 Arinaho Muleba All rights reserved


                </p>
            </div>

        </section>

    );
}

export default Footer;