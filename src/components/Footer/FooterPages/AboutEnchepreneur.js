import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import SubHeader from '../../subHead/SubHeader';
import Images from '../../Images/Images';
import AboutUsForm from './AboutUsForm';
import "./About.css";

const AboutEnchepreneur = () => {
    return (
        <>
            <SubHeader />
            <Container>
                <div className='abt_enpnr'>
                    <div className='abt_sec_1 mt-5'>
                        <Row><h3>About Enchepreneur</h3></Row>
                        <Row>
                            <img src={Images.JoinEnche1} alt="joinEnche" />
                        </Row>
                        <hr />
                    </div>
                    <div className='epnr_abt_sec_2'>
                        <Row>
                            <h5 className='mt-5'>Experience what it’s like to be your own boss and harness the power of success through generating income by joining our enchepreneur and encheffiliate program.</h5>
                            <h3 className='mt-3'>Start your business empire, promote your products, elevate your business presence through our platform and earn attractive benefits.</h3>
                            <h5 className='mt-3 fw-light'>What is stopping you? No sign-up fees. No hidden agendas. Without breaking the bank, start earning with us!</h5>
                            <p className='mt-5'>Our e-commerce platform is an effort to create job opportunities through the implementation of technology in your business. Be part of our enchepreneur and </p><p className="mt-1">encheffiliate program or pick one category of two with a one-time registration only.</p>
                        </Row>
                    </div>
                    <div className='epnr_abt_sec_3'>
                        <Row>
                            <h3 className='fw-bold'>WHAT IS enchepreneur?</h3>

                            <h5 className='mt-3'> A business window experience with benefits. Once you register as our enchepreneur, you can shop within our <br /></h5>
                            <h5 className='mt-3'>portal at a discounted price, choosing from a variety of category products. We provide you with the privilege of <br /></h5>
                            <h5 className="mt-3">purchasing products at a better price, ensuring reselling that would create generous profits to your benefit.</h5>
                        </Row>
                    </div>

                    <div className='enpr_abt_sec_4'>
                        <div className='enpr_s_4_header'>
                            <h3 className='fw-bold'>Why join our enchepreneur?</h3>
                        </div>
                        <Row>
                            <div className='icon_section mt-5 row'>
                                <div className='col-sm-4'>
                                    <div className='icon_img'>
                                        <i><img src={Images.icon01} /></i>
                                    </div>
                                    <div className='icon_msg fw-bold mt-5'>No sign up charges</div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='icon_img'>
                                        <i><img src={Images.icon02} /></i>
                                    </div>
                                    <div className='icon_msg fw-bold mt-5'>Opportunity to promote products remotely</div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='icon_img'>
                                        <i><img src={Images.icon03} /></i>
                                    </div>
                                    <div className='icon_msg fw-bold mt-5'>Enjoy the membership price for multiple items</div>
                                </div>
                            </div>
                        </Row>
                        <div className='enpr_abt_sec_5'>
                            <div className='enpr_s_5_header'>
                                <h3 className='fw-bold'>How enchepreneur works?</h3>
                            </div>
                            <Row>
                                <div className='icon_section mt-5 row '>
                                    <div className='col-sm-3'>
                                        <div className='icon_img'>
                                            <i><img src={Images.icon01} /></i>
                                        </div>
                                        <div className='icon_msg fw-bold mt-5'>Sign Up as enchepreneur</div>
                                    </div>
                                    <div className='col-sm-3'>
                                        <div className='icon_img'>
                                            <i><img src={Images.icon05} /></i>
                                        </div>
                                        <div className='icon_msg fw-bold  mt-5'>Choose any products to purchase</div>
                                    </div>
                                    <div className='col-sm-3'>
                                        <div className='icon_img'>
                                            <i><img src={Images.icon06} /></i>
                                        </div>
                                        <div className='icon_msg fw-bold mt-5'>Enjoy your special discount</div>
                                    </div>
                                    <div className='col-sm-3'>
                                        <div className='icon_img'>
                                            <i><img src={Images.icon07} /></i>
                                        </div>
                                        <div className='icon_msg fw-bold mt-5'>Start reselling the product</div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <hr />
                    <div className='abt_reg_form'>
                        <AboutUsForm />
                    </div>
                </div>
            </Container>

        </>
    )
}

export default AboutEnchepreneur;