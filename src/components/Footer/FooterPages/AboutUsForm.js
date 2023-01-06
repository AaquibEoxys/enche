import React from 'react';
import { Container } from 'react-bootstrap';
import './Form.css';

const AbboutusForm = () => {
    return (
        <>
            <Container>
                <div className='header_form mt-5 fw-bold'><h3>Join us now!</h3></div>
                <div className='form_section'>
                    <div className='aboutus_form'>
                        <h4 className='mt-5'>Register as encheffiliate/enchepreneur</h4>
                        <hr />
                        <div className='form_group_type'>
                            <div className='form_left_type'>
                                <label for='registration_type'>Select Registration Type*</label>
                            </div>
                            <div className='form_right_type'>
                                <div className='reg_type_box'>
                                    <div className='reg_type_box_header '>enchepreneur</div>
                                    <div className='reg_type_box_text fw-light mt-2'>Buy Product with member's price and esell with  markup price</div>
                                </div>
                                <div className='reg_type_box'>
                                    <div className='reg_type_box_header'>encheffiliate</div>
                                    <div className='reg_type_box_text fw-light mt-2'>Resister,share link and enjoy the commision for sell closed</div>
                                </div>
                                <div className='reg_type_box'>
                                    <div className='reg_type_box_header'>Both</div>
                                    <div className='reg_type_box_text fw-light mt-2'>register as encheffiliate and enchepreneur</div>
                                </div>
                            </div>
                        </div>
                        <div className='form_email form-group'>
                            <div className="form_left"><label for="email">Email</label></div>
                            <div className='form_right'><input type="email" name="email" required /></div>
                        </div>
                        <div className='form_fname form-group'>
                            <div className="form_left"><label for="firstName">First Name</label></div>
                            <div className='form_right'><input type="text" name='firstName' /></div>
                        </div>
                        <div className='form_lname form-group'>
                            <div className="form_left"><label for="lastname">Last Name</label></div>
                            <div className='form_right'><input type="text" /></div>
                        </div>
                        <div className='form_address1 form-group'>
                            <div className="form_left"><label for='address1'>Address1</label></div>
                            <div className='form_right'><input type="text" required /></div>
                        </div>
                        <div className='form_address2 form-group'>
                            <div className="form_left"><label for="address2">Address2</label></div>
                            <div className='form_right'><input type='text' /></div>
                        </div>
                        <div className='form_country form-group'>
                            <div className="form_left"><label for="country">Country</label></div>
                            <select><option>abc</option></select>
                        </div>
                        <div className='city_town form-group'>
                            <div className="form_left"><label for="cityTown">City/Town</label></div>
                            <select><option>abc</option></select>
                        </div>
                        <div className='state_country form-group'>
                            <div className="form_left"><label>State/Countrty</label></div>
                            <select><option>abc</option></select>
                        </div>
                        <div className='postal_code form-group'>
                            <div className="form_left"><label for='postal_zip'>Postal/ZIP</label></div>
                            <div className='form_right'><input type='number' />
                            </div>
                        </div>
                        <div className='phone_number form-group'>
                            <div className="form_left"><label for="phone_number">Phone Number</label></div>
                            <div className='form_right'><input type='tel' required /></div>
                        </div>
                        <div className="i_card form-group">
                            <div className="form_left"><label for="i_card">Signatory's Identification Card or Passport</label></div>
                            <div className='form_right'><input type="file" required /></div>
                        </div>
                        <div className='bankdetails form-group'>
                            <div className="form_left"><label for='bankdetails'>Bank Account Number and Account Holder Name</label></div>
                            <div className='form_right'><input type='file' /></div>
                        </div>
                        <div className='photo form-group'>
                            <div className="form_left"><label for="photo">Passport Photo (white background)</label></div>
                            <div className='form_right'><input type='file' /></div>
                        </div>
                        <div className='password form-group'>
                            <div className="form_left"><label for="password">Password</label></div>
                            <div className='form_right'><input type="password" required /></div>
                        </div>
                        <div className='confirm_password form-group'>
                            <div className="form_left"><label className='confirm_password'>Confirm Password</label></div>
                            <div className='form_right'><input type="password" required /></div>
                        </div>
                        <div className='form-group'>
                            <div className='form_left'></div>
                            <div className='button'>
                                <button className='reg-button'>Register</button>
                            </div>


                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AbboutusForm