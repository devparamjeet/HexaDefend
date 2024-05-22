import React, { Component } from 'react';
import './Refund.css';

export default class Refund extends Component {
    render() {
        return (
            <div className='terms_main'>
                <h1 id="terms_heading">Hexa Defend - Refund and Cancellation Policy</h1>
                <p class="outside_term_list">
                    At HexaDefend, we value your satisfaction and strive to provide top-notch educational
                    services, including webinars and internships. We understand that there may be
                    situations where you need to cancel your purchase or request a refund. Please read
                    our Refund and Cancellation Policy carefully to understand the terms and conditions
                    that apply:
                </p>
                <ol id="terms_list_container">
                    <li> Refund Eligibility:
                        <p>Refunds are only applicable to customers who have purchased our educational
                            services, specifically webinars and internships, directly from Hexa Defend.</p>
                        <p>Refunds can be requested within 24 hours of the original purchase date.</p>
                    </li>
                    <li>Eligible Circumstances for Refund:
                        <p>Refunds will be considered in the following circumstances:</p>
                        <ul class="terms_list_container1">
                            <li>
                                Webinars:
                                <p>You encountered technical issues that prevented you from accessing the
                                    webinar or participating within the first 20 min after webinar start.</p>
                                <p>You accidentally made a duplicate purchase of the same webinar.</p>
                            </li>
                            <li>
                                Internships:
                                <p>The internship opportunity was not initiated or completed as agreed upon
                                    within the first 24 hours of purchase</p>
                                <p>There is a justifiable reason for discontinuing the internship, as determined by Hexa Defend.</p>
                            </li>
                        </ul>
                    </li>
                    <li> How to Request a Refund:
                        <p>To request a refund, please follow these steps:</p>
                        <ul class="terms_list_container1">
                            <li><p>Contact our customer support team at <a href="mailto:support@hexadefend.com">support@hexadefend.com</a> within 24 hours
                                of your purchase.</p></li>
                            <li><p>Provide your order details, including the order number(if applicable) and the
                                reason for your refund request.</p></li>
                            <li><p>Our team will review your request and respond within 3-5 business days.</p></li>
                        </ul>

                    </li>
                    <li>Refund Process:
                        <ul className="terms_list_container1">
                            <li><p>If your refund request is approved, Hexa Defend will process the refund to the
                                original payment method used for the purchase.</p></li>
                            <li><p>The refund amount will be equal to the total purchase price minus any applicable fees or charges.</p></li>
                            <li><p>Refunds may take 3-5 business days to reflect in your account, depending on your payment provider.</p></li>
                        </ul>
                    </li>
                    <li> Cancellation Policy:
                        <ul className="terms_list_container1">
                            <li><p>If you wish to cancel an educational service within 24 hours of purchase, please follow the refund request process outlined above.</p></li>
                            <li><p>For cancellations made after the initial 24-hour period, no refunds will be provided. However, you may have the option to reschedule or transfer your service to a future date, subject to availability and any applicable terms and conditions.</p></li>
                        </ul>
                    </li>
                    <li> Contact Information:
                        <p>
                            If you have any questions or concerns regarding our Refund and Cancellation Policy,
                            please contact our customer support team at <a href="mailto:contact@hexadefend.com">contact@hexadefend.com</a>
                        </p>
                        <p>Hexa Defend reserves the right to amend or modify this policy at its discretion. Any
                            changes will be communicated to customers through our official website or other
                            appropriate channels.</p>
                    </li>
                </ol>

                <p class="outside_term_list">
                    Thank you for choosing Hexa Defend for your educational webinar and internship
                    experiences. We are committed to delivering high-quality services and ensuring a
                    satisfactory customer experience.
                </p>
                <p class="outside_term_list">Last updated: 06 September 2023</p>
            </div>
        )
    }
}
