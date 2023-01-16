import React from "react";
import { Container } from "react-bootstrap";
import "./Form.scss";

const AbboutusForm = () => {
  return (
    <div className="row">
      <Container>
        <div className="header_form">
          <h3 className="fw-bold">Join us now!</h3>
        </div>
        <div className="form_section">
          <div className="aboutus_form">
            <h2 className="mt-5">Register as encheffiliate/enchepreneur</h2>
            <hr />
            <div className="form_group_type row">
              <div className=" form_left_type col">
                <label for="registration_type">Select Registration Type*</label>
              </div>
              <div className=" form_right_type col">
                <div className="reg_type_box col-sm-4">
                  <div className="reg_type_box_header row">enchepreneur</div>
                  <div className="reg_type_box_text fw-light mt-2 row">
                    Buy Product with member's price and esell with markup price
                  </div>
                </div>
                <div className="reg_type_box col-sm-4">
                  <div className="reg_type_box_header row">encheffiliate</div>
                  <div className="reg_type_box_text fw-light mt-2 row">
                    Resister,share link and enjoy the commision for sell closed
                  </div>
                </div>
                <div className="reg_type_box col-sm-4">
                  <div className="reg_type_box_header row">Both</div>
                  <div className="reg_type_box_text fw-light mt-2 row">
                    register as encheffiliate and enchepreneur
                  </div>
                </div>
              </div>
            </div>
            <div className="form_email form-group  mt-2 row ">
              <div className="form_left col">
                <label for="email">Email</label>
              </div>
              <div className="form_right col">
                <input type="email" name="email" required />
              </div>
            </div>
            <div className="form_fname form-group row mt-2">
              <div className="form_left col">
                <label for="firstName">First Name</label>
              </div>
              <div className="form_right col">
                <input type="text" name="firstName" />
              </div>
            </div>
            <div className="form_lname form-group row mt-2">
              <div className="form_left col">
                <label for="lastname">Last Name</label>
              </div>
              <div className="form_right col">
                <input type="text" />
              </div>
            </div>
            <div className="form_address1 form-group row mt-2">
              <div className="form_left col">
                <label for="address1">Address1</label>
              </div>
              <div className="form_right col">
                <input type="text" required />
              </div>
            </div>
            <div className="form_address2 form-group row mt-2">
              <div className="form_left col">
                <label for="address2">Address2</label>
              </div>
              <div className="form_right col">
                <input type="text" />
              </div>
            </div>
            <div className="form_country form-group row mt-2">
              <div className="form_left col">
                <label for="country">Country</label>
              </div>
              <div className="form_right col">
                <select className="col">
                  <option>abc</option>
                </select>
              </div>
            </div>
            <div className="city_town form-group row mt-2">
              <div className="form_left col">
                <label for="cityTown">City/Town</label>
              </div>
              <div className="form_right col">
                <select className="col">
                  <option>abc</option>
                </select>
              </div>
            </div>
            <div className="state_country form-group row mt-2">
              <div className="form_left col">
                <label>State/Countrty</label>
              </div>
              <div className="form_right col">
                <select className="col">
                  <option>abc</option>
                </select>
              </div>
            </div>
            <div className="postal_code form-group row mt-2">
              <div className="form_left col">
                <label for="postal_zip">Postal/ZIP</label>
              </div>
              <div className="form_right col">
                <input type="number" />
              </div>
            </div>
            <div className="phone_number form-group row mt-2">
              <div className="form_left col">
                <label for="phone_number">Phone Number</label>
              </div>
              <div className="form_right col">
                <input type="tel" required />
              </div>
            </div>
            <div className="i_card form-group row mt-2">
              <div className="form_left col">
                <label for="i_card">
                  Signatory's Identification Card or Passport
                </label>
              </div>
              <div className="form_right file_type col">
                <input type="file" required />
              </div>
            </div>
            <div className="bankdetails form-group row mt-2">
              <div className="form_left col">
                <label for="bankdetails">
                  Bank Account Number and Account Holder Name
                </label>
              </div>
              <div className="form_right file_type col">
                <input type="file" />
              </div>
            </div>
            <div className="photo form-group row mt-2">
              <div className="form_left col">
                <label for="photo">Passport Photo (white background)</label>
              </div>
              <div className="form_right file_type col">
                <input type="file" />
              </div>
            </div>
            <div className="password form-group row mt-2">
              <div className="form_left col">
                <label for="password">Password</label>
              </div>
              <div className="form_right col">
                <input type="password" required />
              </div>
            </div>
            <div className="confirm_password form-group row mt-2">
              <div className="form_left col">
                <label className="confirm_password">Confirm Password</label>
              </div>
              <div className="form_right col">
                <input type="password" required />
              </div>
            </div>
            <div className="form-group row mt-2">
              <div className="form_left col"></div>
              <div className="button">
                <button className="reg-button">Register</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AbboutusForm;
