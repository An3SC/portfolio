import React from 'react';
import { Link } from 'react-router-dom';
import andresFace from '../icons/andres-cara.svg';

const About = () => {
    const actualPage = window.location.href;

    return (
        <div className="flex flex-col items-center my-5">
            <div className="container bg-2-hex p-4">
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center">
                        <h1>Andrés Sierra Cardalda</h1>
                        {actualPage.includes('about') ? (
                            <h2 className="col-4-hex">Junior developer</h2>
                        ) : (
                            <h2>Junior developer</h2>
                        )}
                    </div>
                    <img className="andresFace" alt="andresFace" src={andresFace}></img>
                </div>
                {!actualPage.includes('about') && (
                    <Link className="col-4-hex" to="/about">
                        See more
                    </Link>
                )}
                {actualPage.includes('about') && (
                    <div className="about flex flex-col ">
                        <div>
                            <h2 className="uppercase">Education</h2>
                            <li className="mt-3">
                                <b>JavaScript full-stack development bootcamp</b> - Hack a
                                Boss. (march-2021)
                            </li>
                            <li>
                                <b>Hispanic philology</b> - University of Santiago de
                                Compostela. (june-2020)
                            </li>
                        </div>
                        <hr className="my-5"></hr>
                        <div>
                            <h2 className="uppercase">Courses</h2>
                            <div className="my-3">
                                <h3 className="mb-1">Udemy</h3>
                                <li>
                                    <b>React</b>: De cero a experto (Hooks y MERN).
                                    43+hours (currently)
                                </li>
                                <li>
                                    Master en <b>CSS</b>: <b>Responsive</b>, <b>SASS</b>,
                                    <b>Flexbox</b>, <b>Grid</b> y <b>Bootstrap</b>.
                                    20+hours. (currently)
                                </li>
                                <li>
                                    <b>JavaScript</b> Moderno Guía Definitiva Construye
                                    +15 Proyectos. 37+hours. (may-2021)
                                </li>
                                <li>
                                    <b>GIT+GitHub</b>: Todo un sistema de control de
                                    versiones de cero, 7+hours. (february-2021)
                                </li>
                            </div>
                            <div className="my-3">
                                <h3 className="mb-1">Linkedin</h3>
                                <li>
                                    Diseño de interfaz (<b>UI</b>) avanzado. (april-2021)
                                </li>
                                <li>
                                    Aprende <b>Scrum</b>. (april-2021)
                                </li>
                            </div>
                            <div className="my-3">
                                <h3 className="mb-1">SoloLearn</h3>
                                <li>
                                    <b>HTML</b>
                                </li>
                                <li>
                                    <b>CSS</b>
                                </li>
                                <li>
                                    <b>PHP</b>
                                </li>
                                <li>
                                    <b>MySQL</b>
                                </li>
                            </div>
                        </div>
                        <hr className="my-5"></hr>
                        <div>
                            <h2 className="uppercase mb-3">Experience</h2>
                            <p>
                                <b>Currently looking</b> for my first experience as a
                                developer
                            </p>
                        </div>
                        <hr className="my-5"></hr>
                        <div>
                            <h2 className="uppercase mb-3">Languages</h2>
                            <li>
                                <b>Spanish and galician</b>: native
                            </li>
                            <li>
                                <b>English</b>:
                                <span className="flex flex-col ml-6">
                                    <p>Reading - advanced</p>
                                    <p>Listening - advanced</p>
                                    <p>Writing - advanced</p>
                                    <p>Speaking - medium</p>
                                </span>
                            </li>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;
