// core
import React, {  } from 'react'
import { Link } from 'react-router-dom'

// styling
import styled from 'styled-components'
import media from '../styles/media'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'
import { Div } from '../styles/CustomGrid'

// media


export default function DashboardPage() {

  let mobileView = useDetectMobileView()

  return (
    <Div web={12} style={{backgroundColor:'#000', flexDirection:'column', alignItems:'center', minHeight:'100vh'}}>

      <HeaderContainer web={11} style={{flexDirection:'row', alignItems:'flex-end'}}>
        <Link to='/' style={{textDecoration: 'none'}}>
          <HeaderTitle>
            Virgil
          </HeaderTitle>
        </Link>
      </HeaderContainer>
      <Div web={12} style={{flexDirection:'column', alignItems:'center'}}>
        <Div web={8} mobile={10}>
          <TitleText style={{color:'white', padding: '50px 0px 50px 0px', textAlign: 'left'}}>
          Privacy Policy
          </TitleText>
        </Div>
      </Div>

      <Div web={12} style={{backgroundColor: 'white', flexDirection:'column', alignItems:'center', padding: '50px 0px 50px 0px'}}>
        <Div web={8} mobile={10}>
        <BodyText style={{color:'black'}}><p><strong>Last updated 04/26/2020</strong></p>
        <p>Thank you for choosing to be part of our community at Virgil Technologies, Inc., doing business as Virgil (“<strong>Virgil</strong>”, “<strong>we</strong>”, “<strong>us</strong>”, or “<strong>our</strong>”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at aayush@virgilcard.com.</p>
        <p>When you visit our website <a href="http://www.virgilcard.com/">http://www.virgilcard.com</a>, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites and our services.</p>
        <p>This privacy policy applies to all information collected through our website (such as <a href="http://www.virgilcard.com/">http://www.virgilcard.com</a>), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the &quot;<strong>Services</strong>&quot;).</p>
        <p><strong>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.</strong></p>
        <p><strong>TABLE OF CONTENTS</strong></p>
        <ol>
        <li><p>WHAT INFORMATION DO WE COLLECT?</p>
        </li>
        <li><p>HOW DO WE USE YOUR INFORMATION?</p>
        </li>
        <li><p>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</p>
        </li>
        <li><p>WHO WILL YOUR INFORMATION BE SHARED WITH?</p>
        </li>
        <li><p>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>
        </li>
        <li><p>HOW LONG DO WE KEEP YOUR INFORMATION?</p>
        </li>
        <li><p>HOW DO WE KEEP YOUR INFORMATION SAFE?</p>
        </li>
        <li><p>DO WE COLLECT INFORMATION FROM MINORS?</p>
        </li>
        <li><p>WHAT ARE YOUR PRIVACY RIGHTS?</p>
        </li>
        <li><p>DATA BREACH</p>
        </li>
        <li><p>CONTROLS FOR DO-NOT-TRACK FEATURES</p>
        </li>
        <li><p>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</p>
        </li>
        <li><p>DO WE MAKE UPDATES TO THIS POLICY?</p>
        </li>
        <li><p>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</p>
        </li>
        </ol>
        <p><strong>1. WHAT INFORMATION DO WE COLLECT?</strong></p>
        <p><strong>Personal information you disclose to us</strong></p>
        <p><strong><em>In Short:</em></strong> <em>We collect personal information that you provide to us.</em></p>
        <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.</p>
        <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect can include the following:</p>
        <p><strong>Publicly Available Personal Information.</strong> We collect first name, maiden name, last name, and nickname; phone numbers; email addresses; social media; and other similar data. </p>
        <p><strong>Personal Information Provided by You.</strong> We collect data collected from surveys; and other similar data.</p>
        <p>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
        <p><strong>Information automatically collected</strong></p>
        <p><strong><em>In Short:</em></strong>  <em>Some information — such as IP address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></p>
        <p>We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
        <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
        <p><strong>Online Identifiers.</strong> We collect devices; applications; tools and protocols, such as IP (Internet Protocol) addresses; cookie identifiers, or others such as the ones used for analytics and marketing; device&#39;s geolocation; and other similar data.</p>
        <p><strong>2. HOW DO WE USE YOUR INFORMATION?</strong></p>
        <p><strong><em>In Short:</em></strong>  <em>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em></p>
        <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</p>
        <p>We use the information we collect or receive:</p>
        <ul>
        <li><strong>To send you marketing and promotional communications.</strong> We and/or our third party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt-out of our marketing emails at any time (see the &quot;<a href="https://app.termly.io/dashboard/website/415356/privacy-policy#privacyrights">WHAT ARE YOUR PRIVACY RIGHTS</a>&quot; below).</li>
        <li><strong>To send administrative information to you.</strong> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</li>
        <li><strong>Fulfill and manage your orders.</strong> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
        <li><strong>Deliver targeted advertising to you.</strong> We may use your information to develop and display content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.</li>
        <li><strong>Administer prize draws and competitions.</strong> We may use your information to administer prize draws and competitions when you elect to participate in competitions.</li>
        <li><strong>Request Feedback.</strong> We may use your information to request feedback and to contact you about your use of our Services.</li>
        <li><strong>To deliver services to the user.</strong> We may use your information to provide you with the requested service.</li>
        <li><strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
        <li><strong>For other Business Purposes.</strong> We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Services, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.</li>
        </ul>
        <p><strong>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</strong></p>
        <p><strong><em>In Short:</em></strong>  <em>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</em></p>
        <p>We may process or share data based on the following legal basis:</p>
        <ul>
        <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information in a specific purpose.</li>
        <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
        <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
        <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
        <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
        </ul>
        <p>More specifically, we may need to process your data or share your personal information in the following situations:</p>
        <ul>
        <li><strong>Vendors, Consultants and Other Third-Party Service Providers.</strong> We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Services, which will enable them to collect data about how you interact with the Services over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.</li>
        <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services or promotions.</li>
        </ul>
        <p><strong>4. WHO WILL YOUR INFORMATION BE SHARED WITH?</strong></p>
        <p><strong><em>In Short:</em></strong>  <em>We only share information with the following third parties.</em></p>
        <p>We only share and disclose your information with the following third parties. We have categorized each party so that you may be easily understand the purpose of our data collection and processing practices. If we have processed your data based on your consent and you wish to revoke your consent, please contact us.</p>
        <ul>
        <li><p><strong>Web and Mobile Analytics</strong></p>
        <p>  Google Analytics</p>
        </li>
        </ul>
        <p><strong>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</strong></p>
        <p><strong><em>In Short:</em></strong>  <em>We may use cookies and other tracking technologies to collect and store your information.</em></p>
        <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.</p>
        <p><strong>6. HOW LONG DO WE KEEP YOUR INFORMATION?</strong></p>
        <p><strong><em>In Short:</em></strong>  <em>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</em></p>
        <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than 2 years.</p>
        <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
        <p><strong>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</strong></p>
        <p><strong><em>In Short:</em></strong>  <em>We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
        <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the services within a secure environment.</p>
        <p><strong>8. DO WE COLLECT INFORMATION FROM MINORS?</strong></p>
        <p><strong><em>In Short:</em></strong>  <em>We do not knowingly collect data from or market to children under 18 years of age.</em></p>
        <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at aayush@virgilcard.com.</p>
        <p><strong>9. WHAT ARE YOUR PRIVACY RIGHTS?</strong></p>
        <p><strong><em>In Short:</em></strong>  <em>You may review, change, or terminate your account at any time.</em></p>
        <p>If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.</p>
        <p><strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt-out of interest-based advertising by advertisers on our Services visit <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a>.</p>
        <p><strong>10. DATA BREACH</strong></p>
        <p>A privacy breach occurs when there is unauthorized access to or collection, use, disclosure or disposal of personal information. You will be notified about data breaches when Virgil Technologies, Inc. believes you are likely to be at risk or serious harm. For example, a data breach may be likely to result in serious financial harm or harm to your mental or physical well-being. In the event that Virgil Technologies, Inc. becomes aware of a security breach which has resulted or may result in unauthorized access, use or disclosure of personal information Virgil Technologies, Inc. will promptly investigate the matter and notify the applicable Supervisory Authority not later than 72 hours after having become aware of it, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons.</p>
        <p><strong>11. CONTROLS FOR DO-NOT-TRACK FEATURES</strong></p>
        <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy policy.</p>
        <p><strong>12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</strong></p>
        <p><strong><em>In Short:</em></strong>  <em>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em></p>
        <p>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
        <p>If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from our systems.</p>
        <p><strong>13. DO WE MAKE UPDATES TO THIS POLICY?</strong></p>
        <p><strong><em>In Short:</em></strong>  <em>Yes, we will update this policy as necessary to stay compliant with relevant laws.</em></p>
        <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
        <p><strong>14. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</strong></p>
        <p>If you have questions or comments about this policy, you may email us at aayush@virgilcard.com</p>
        <p><strong>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</strong></p>
        <p>Based on the laws of some countries, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please visit: aayush@virgilcard.com. We will respond to your request within 30 days.</p>
        </BodyText>
        </Div>
      </Div>


      {/* little strop of black */}
      <Div style={{height:mobileView ? '0':'5vh',
        backgroundColor:'#FFF'}} />

      <FooterContainer web={11}>
        <Div web={6} direction='column'
          style={{justifyContent:'flex-end', alignItems:'flex-start'}}>    
          <Link to='/' style={{textDecoration: 'none'}}>
            <FooterTitle>
              Virgil
            </FooterTitle>
          </Link>        
          <BodyText style={{color:'#FFF'}}>
            2020 © Virgil Technologies
          </BodyText>
        </Div>
        <Div web={6} direction='column'
          style={{justifyContent:'flex-end', alignItems:'flex-end'}}>              
          <BodyText style={{color:'#FFF'}}>
            Terms of Service
          </BodyText>
          <BodyText style={{color:'#FFF'}}>
            Privacy Policy
          </BodyText>
        </Div>
      </FooterContainer>

    </Div>
  )
}


const HeaderContainer = styled(Div)`
  justify-content: flex-start;
  height: 15vh;
  ${media.md`
    height: 9vh;
    justify-content: center;
  `}
`
const HeaderTitle = styled.h1`
  font-family: 'romana';
  font-size: 60px;
  color: #FFF;
  font-weight: 400;
  ${media.md`
    font-size: 44px;
  `}
`

const FooterContainer = styled(Div)`
  height: 25vh;
  padding-bottom: 5vh;
  justify-content: space-between;
  border-top: solid #FFF;
  border-width: 1px;
  ${media.md`
    height: 20vh;
    flex-direction: row;
    justify-content: center;
    border-top: unset;
    padding-bottom: 5vh;
  `}
`
const FooterTitle = styled(HeaderTitle)`
  margin-bottom: 10px;
`

const TitleText = styled.h2`
  font-family: 'romana';
  font-size: 48px;
  color: #000;
  font-weight: 400;
  text-transform: capitalize;
  word-wrap: break-word;
  margin-bottom: 20px;
  ${media.md`
    font-size: 32px;
    text-align: center;
  `}
`

const BodyText = styled.h3`
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #000;
  word-wrap: break-word;
  letter-spacing: 0.5px;

  font-size: 18px;
  line-height: 24px;

  ${media.md`
    font-size: 14px;
    line-height: 18px;
  `}
`
