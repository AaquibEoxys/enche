import React from "react";
import SubHeader from "../../components/subHead/SubHeader";
import "./TermsAndCondition.scss";

const TermsAndCondition = () => {
  return (
    <>
      <SubHeader />
      <div className="terms_page">
        <div className="container">
          <div className="terms_tag">
            <div className="terms_head">TERMS & CONDITIONS</div>
            <ol>
              <li className="terms_lebel">
                LIMITED LICENSE
                <ol>
                  <li className="terms_paragraph">
                    Shopee grants you a limited and revocable license to accsess
                    and use the services subject to the terms and conditions of
                    these Terms of Service. All proprietary Content, trademarks,
                    service marks, brand names, logos and other intellectual
                    property ("Intellectual Property") displayed in the Site are
                    the property of Shopee and where applicable, third party
                    propertors identified in the Site. No right or licence is
                    granted directly or indirectly to any party acccessing the
                    Site to use or reproduce any Intellectual Property, and no
                    party accessing the site shall calim any right, title or
                    interest therein. By using or accessing the Services you
                    agree to comply with the copyright, trademark, service mark,
                    and all other applicable laws that protect the Services, the
                    Site and its Content. You agree not to copy, distribute,
                    republish, transmit, publicly display, publicly perform,
                    modify, adapt, rent, sell, or create derivative works of any
                    portion of the Services, the Site or ite Content. You also
                    may not, without our prior written consent, mirror or frame
                    any spider or any other automatic device or manual process
                    to moniter or copy our Content, without our prior written
                    consent , mirror (such consent is deemed given for standard
                    search engine technology employed by Internet search
                    websites to direct Internet users to this website).
                  </li>
                  <li className="terms_paragraph_two">
                    You are welcome to link to the Site from your website,
                    provided that your website does not imply any endorsement by
                    or association withe Shopee. You acknowledge that Shopee
                    may, in its sole discretion and at any time, discountinue
                    providing the Services, either in part or as a whole,
                    without notice.
                  </li>
                </ol>
              </li>
              <li className="terms_lebel">
                SOFTWARE
                <ol>
                  <li className="terms_paragraph">
                    Any software provided by us to you as part of the Services
                    is subject to the provisions of these Terms of Service.
                    Shopee reserve all rights to the software not expressly
                    granted by Shopee hereunder. Any third-party scripts or
                    code, linked to or referenced from the Services, are
                    licensed to you by the third parties that such scripts or
                    code, not by Shopee.
                  </li>
                </ol>
              </li>
            </ol>
            {/* <div className="terms_lebel">LIMITED LICENSE</div> */}
            {/* <div className="terms_paragraph">
              Shopee grants you a limited and revocable license to accsess and
              use the services subject to the terms and conditions of these
              Terms of Service. All proprietary Content, trademarks, service
              marks, brand names, logos and other intellectual property
              ("Intellectual Property") displayed in the Site are the property
              of Shopee and where applicable, third party propertors identified
              in the Site. No right or licence is granted directly or indirectly
              to any party acccessing the Site to use or reproduce any
              Intellectual Property, and no party accessing the site shall calim
              any right, title or interest therein. By using or accessing the
              Services you agree to comply with the copyright, trademark,
              service mark, and all other applicable laws that protect the
              Services, the Site and its Content. You agree not to copy,
              distribute, republish, transmit, publicly display, publicly
              perform, modify, adapt, rent, sell, or create derivative works of
              any portion of the Services, the Site or ite Content. You also may
              not, without our prior written consent, mirror or frame any spider
              or any other automatic device or manual process to moniter or copy
              our Content, without our prior written consent , mirror (such
              consent is deemed given for standard search engine technology
              employed by Internet search websites to direct Internet users to
              this website).
            </div> */}
            {/* <div className="terms_paragraph">
              You are welcome to link to the Site from your website, provided
              that your website does not imply any endorsement by or association
              withe Shopee. You acknowledge that Shopee may, in its sole
              discretion and at any time, discountinue providing the Services,
              either in part or as a whole, without notice.
            </div>
            <div className="terms_lebel">SOFTWARE </div>
            <div className="terms_paragraph">
              Any software provided by us to you as part of the Services is
              subject to the provisions of these Terms of Service. Shopee
              reserve all rights to the software not expressly granted by Shopee
              hereunder. Any third-party scripts or code, linked to or
              referenced from the Services, are licensed to you by the third
              parties that such scripts or code, not by Shopee.
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
