import React from 'react';

const TermsAndConditionsPage = () => {
    return (
        <div>
            <section className="terms-section py-5 bg-light">
                <div className="container">
                    <div className="bg-white p-5 rounded shadow-sm">
                        <h2 className="mb-4 fw-bold">Terms and Conditions</h2>
                        <p><strong>Effective Date:</strong> August 4, 2025</p>
                        <p><strong>Last Updated:</strong> August 4, 2025</p>

                        <p>
                            Welcome to 3dmock.app. By accessing or using our platform (the “Service”), you agree to be bound by the following Terms and Conditions (“Terms”). Please read them carefully before using our website or services. <br />
                            If you do not agree to these Terms, you must not access or use 3dmock.app.
                        </p>

                        <h4 className="mt-4">1. About the Service</h4>
                        <p>
                            3dmock.app is a B2B SaaS platform that provides tools to create animated or static 3D mockups for e-commerce and marketing use. Our services are intended for professional and commercial users.
                        </p>

                        <h4 className="mt-4">2. Account Registration</h4>
                        <p>To use 3dmock.app, you must:</p>
                        <ul className="ps-3">
                            <li>Be at least 18 years old (or the legal age in your country).</li>
                            <li>Provide accurate and complete account information.</li>
                            <li>Keep your login credentials secure and not share your account.</li>
                            <li>You are responsible for all activity under your account.</li>
                        </ul>

                        <h4 className="mt-4">3. Subscriptions and Payments</h4>
                        <ul className="ps-3">
                            <li>Our services are available under paid subscription plans.</li>
                            <li>Payments are processed securely via Stripe.</li>
                            <li>All fees are billed in USD (or as displayed), and are non-refundable, except as required by law or stated in our Refund Policy.</li>
                            <li>You can cancel your subscription at any time. Access remains until the end of the billing cycle.</li>
                            <li>Failure to pay may result in suspension or termination of your access.</li>
                        </ul>

                        <h4 className="mt-4">4. Use of the Service</h4>
                        <p>You agree not to:</p>
                        <ul className="ps-3">
                            <li>Use the platform for illegal, harmful, or fraudulent purposes.</li>
                            <li>Reverse-engineer, copy, or resell any part of the Service.</li>
                            <li>Upload malicious content (e.g., viruses, malware).</li>
                            <li>Use the generated mockups in a way that infringes on third-party rights.</li>
                        </ul>
                        <p>We reserve the right to suspend or terminate any account that violates these Terms.</p>

                        <h4 className="mt-4">5. Intellectual Property</h4>
                        <ul className="ps-3">
                            <li>All content and tools provided on 3dmock.app are the intellectual property of 3dmock.app or its licensors.</li>
                            <li>You retain ownership of content you upload but grant us a license to host and display it within the platform.</li>
                            <li>Mockups generated via the platform can be used commercially by the account owner, but redistribution of source files (e.g., 3D assets) is prohibited.</li>
                        </ul>

                        <h4 className="mt-4">6. Modifications to the Service</h4>
                        <p>
                            We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice.
                            In such cases, we may provide alternative access or issue partial refunds at our discretion.
                        </p>

                        <h4 className="mt-4">7. Disclaimers</h4>
                        <p>
                            3dmock.app is provided "as is" and "as available" without warranties of any kind. We do not guarantee:
                        </p>
                        <ul className="ps-3">
                            <li>That the service will be uninterrupted or error-free.</li>
                            <li>That results will meet your specific expectations.</li>
                        </ul>

                        <h4 className="mt-4">8. Limitation of Liability</h4>
                        <ul className="ps-3">
                            <li>To the fullest extent permitted by law, 3dmock.app and its owners shall not be liable for any indirect, incidental, or consequential damages.</li>
                            <li>Our total liability for any claim arising from these Terms shall not exceed the amount you paid us in the last 12 months.</li>
                        </ul>

                        <h4 className="mt-4">9. Termination</h4>
                        <p>You may stop using our services at any time. We may suspend or terminate your access if:</p>
                        <ul className="ps-3">
                            <li>You violate these Terms or applicable laws.</li>
                            <li>We are required to do so by law or court order.</li>
                            <li>We discontinue the Service.</li>
                        </ul>
                        <p>Termination does not affect obligations that survive (e.g., payment, indemnity, liability).</p>

                        <h4 className="mt-4">10. Governing Law and Jurisdiction</h4>
                        <p>
                            These Terms are governed by the laws of Delaware, United States, without regard to its conflict of laws rules.
                            Any legal action must be brought in the courts of the State of Delaware.
                        </p>

                        <h4 className="mt-4">11. Changes to These Terms</h4>
                        <p>
                            We may update these Terms occasionally. Continued use of the Service after changes means you accept the new Terms.
                            The “Last Updated” date will reflect the latest version.
                        </p>

                        <h4 className="mt-4">12. Contact</h4>
                        <p>
                            For any questions about these Terms, please contact:<br />
                            <strong>Email:</strong> <a href="mailto:contact@3dmock.app">contact@3dmock.app</a><br />
                            <strong>Website:</strong> <a href="https://3dmock.app" target="_blank" rel="noopener noreferrer">https://3dmock.app</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditionsPage;
