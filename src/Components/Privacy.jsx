import React, { Component } from 'react'
import './Privacy.css'

export default class Privacy extends Component {
    render() {
        return (
            <div className='privacy_main'>
                <h1 id="privacy_heading">Hexa Defend Privacy Policy
                </h1>
                <p class="outside_policy_list">Last Updated: 20 Aug 2023</p>
                <p class="outside_policy_list">
                    At Hexa Defend Company ("Hexa Defend," "we," "us," or "our"), we are committed to
                    protecting your privacy and ensuring the security of your personal information. This
                    Privacy Policy outlines our practices regarding the collection, use, disclosure, and
                    protection of your personal data. By accessing our website or utilizing our services, you
                    consent to the terms described in this Privacy Policy.
                </p>
                <ol id="policy_list_container">
                    <li>Information We Collect:
                        <ul>We may collect various types of information, including but not limited to:
                            <li>
                                Personal Information: Name, contact information, billing details, and other
                                identifiers.
                            </li>
                            <li>
                                Usage Data: Information about how you interact with our website and
                                services, including IP address, browser type, device information, and pages
                                visited.
                            </li>
                            <li>
                                Communication Data: Information shared during correspondence with us.
                            </li>
                            <li>
                                Educational Data: Information provided by students engaging in our
                                educational programs.
                            </li>
                        </ul>
                    </li>
                    <li>Use of Information:
                        <ul>We use the collected information for the following purposes:
                            <li>Providing and improving our services.
                            </li>
                            <li>
                                Communicating with you, including responding to inquiries and providing
                                updates.
                            </li>
                            <li>
                                Personalizing your experience on our website.
                            </li>
                            <li>
                                Conducting security testing and educational programs.
                            </li>
                            <li>
                                Legal compliance and protecting our rights.
                            </li>
                        </ul>
                    </li>
                    <li>Disclosure of Information:
                        <ul>We may share your information with:
                            <li>
                                Service Providers: Third-party partners and vendors who assist us in
                                delivering our services.
                            </li>
                            <li>
                                Educational Institutions: For students participating in our educational
                                programs, information may be shared with their institutions.
                            </li>
                            <li>
                                Legal Requirements: When required by law or in response to legal requests.
                            </li>
                        </ul>
                    </li>
                    <li> Security Measures:
                        <p>
                            We implement technical and organizational measures to safeguard your personal
                            information against unauthorized access, loss, or misuse. However, please note
                            that no method of data transmission is completely secure.
                        </p>
                    </li>
                    <li> Your Choices:
                        <ul>You have the right to:
                            <li>
                                Access and request changes to your personal information.
                            </li>
                            <li>
                                Opt out of promotional communications.
                            </li>
                            <li>
                                Request the deletion of your data (subject to legal requirements).
                            </li>
                        </ul>
                    </li>
                    <li>Cookies and Tracking Technologies:
                        <p>
                            We may use cookies and similar technologies to enhance your experience on our
                            website. You can manage your cookie preferences through your browser settings.
                        </p>
                    </li>
                    <li> Children's Privacy:
                        <p>
                            Our services are not intended for individuals under the age of 13. We do not
                            knowingly collect personal information from children.
                        </p>
                    </li>
                    <li> Links to Other Websites:
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for
                            their privacy practices. Please review the privacy policies of those websites.
                        </p>
                    </li>
                    <li> Changes to this Privacy Policy:
                        <p>
                            We may update this Privacy Policy from time to time. The "Last Updated" date at
                            the top of this page indicates the latest revision.
                        </p>
                    </li>
                    <li> Contact Us:
                        <p>
                            If you have questions, concerns, or requests related to your privacy or this Privacy
                            Policy, please contact us at <a href="mailto:contact@hexadefend.com">contact@hexadefend.com
                            </a>.
                        </p>
                    </li>
                </ol>
                <p class="outside_policy_list">By using our website and services, you acknowledge that you have read and
                    understood this Privacy Policy and consent to the collection, use, and disclosure of
                    your personal information as described herein.</p>
            </div>
        )
    }
}
