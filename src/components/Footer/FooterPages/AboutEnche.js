import React from 'react';
import SubHeader from '../../subHead/SubHeader';
import { Container } from 'react-bootstrap';
import '../FooterPages/About.css';
import Images from '../../../components/Images/Images';


const AboutEnche = () => {
    return (
        <>
            <SubHeader />
            <Container>
                <div className='section_1_enche'>
                    <div className='section_1_enche_1'>
                        <div>
                            <h1 className="fw-dark">About enche</h1>
                            <div className='secion_1_enchedetails mt-3 fs-6'><span className="h4 fw-bolder">enche Sdn Bhd </span>was established as a new venture in the digital sector through the creation of an e-commerce platform. enche is a marketplace portal well-designed to allow corporate business (B2B), consumer marketplace (B2C), charity initiative (Charity Cart), referral program (encheffiliate), online as well as offline entrepreneurship (enchepreneur) being carried out through a single platform. A brand with a mission to provide a business solution for businesses globally by providing an e-commerce platform that has boundless capacity. </div>
                        </div>
                    </div>
                </div>
                <div className='section_2_enche'>
                    <div className='row'>
                        <div className='col'>
                            <img src={Images.laptop1} alt='laptopscreen' />
                        </div>
                        <div className='col' >
                            <div className='section_2_enche_right'>
                                <h1>Our Vision</h1>
                                <p className='fw-bold'>To make enche as a one-stop digital shopping center for the global audience.</p>
                                <p className='fw-bold'>To be a significant e-commerce marketplace portal that strives in uplifting SME and Artisan products globally.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='secion_3_enche'>
                    <div className='row'>
                        <div className='secion_3_enche_text col'>
                            <div>
                                <div className='h1 '>Our Mission</div>
                                <div className='h2 mt-4'>Easy.Reliable.Supportive</div>
                                <p className='mt-2'>To share wealth and prosperity with the needy through enche’s tailored Charity modules.</p>
                                <p className='mt-2'>To assist SME and Artisans to evolve and grow in the new era of the digital ecosystem, expanding their business to a global scale.</p>
                                <p className='mt-2'>To provide a one-stop center solution to the consumer.</p>
                            </div>
                        </div>

                        <div className='col'>
                            <img src={Images?.laptop3} alt="laptopscreen" />
                        </div>

                    </div>
                </div>
                <div className='section_4_enche'>
                    <div className='row'>
                        <h5>What better way to bring nations closer other than through business and charity.</h5>
                        <h5>Whether you are here to grow your business, be an inspiration to your clients, find your purpose, make business a charity commitment or change the world, enche can help.</h5>
                        <h1 className='green-text'>enche marketplace, let's grow together</h1>
                    </div>
                </div>

                <div className='section_5_enche'>
                    <h1>Our Core Values</h1>
                    <div className='mb-5'>
                        <img src={Images?.Asset} alt="" className='mt-5' />
                    </div>

                </div>
                <div className='section_6_enche'>
                    <div className='row'>
                        <div className='col'><span className="fw-bold">Trustworthiness, Courage, Discipline, Diligence, and Loyalty</span> – At enche, all employees share five fundamental values to form the roots of company corporate culture. We are convinced that only in an environment shaped by these values can accentuate and develop services better, provide a positive outcome of solutions as well as obtain a well-grounded team of peers.</div>
                        <div className='col'>
                            <span className='fw-bold'>enche.com </span>aims to develop role models within the company with admirable quality to support, secure and give back to the society, by working closely with the community, non-profit and charity organization. It is hoped that through CSR programs, skills and teamwork can be nurtured across the generations whilst doing something positive for the community. The “do good, feel good” phenomenon, would be an experience of a warm feeling from acts of altruism and charity at some point in our lives.
                        </div>
                    </div>
                </div>
            </Container>1
        </>
    )
}

export default AboutEnche