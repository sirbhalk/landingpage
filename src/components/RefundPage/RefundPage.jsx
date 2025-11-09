import React from 'react';

const RefundPage = () => {
    return (
        <div>
            <section className="refund-policy-section py-5 bg-light">
                <div className="container">
                    <div className="bg-white p-5 rounded shadow-sm">
                        <h2 className="mb-4 fw-bold">Refund Policy</h2>
                        <p><strong>Effective Date:</strong> August 4, 2025</p>
                        <p><strong>Last Updated:</strong> August 4, 2025</p>

                        <p>
                            At 3dmock.app, we strive to ensure that our users are satisfied with our service. However, due to the nature of digital subscriptions and instant access to assets and rendering tools, we maintain the following refund policy.
                        </p>

                        <h4 className="mt-4">1. General Policy</h4>
                        <p>All payments are non-refundable, except in the following cases:</p>
                        <ul className="ps-3">
                            <li>You were charged after canceling your subscription before renewal.</li>
                            <li>You were billed multiple times for the same service.</li>
                            <li>You encountered a critical technical issue that we failed to resolve in a reasonable time.</li>
                        </ul>

                        <h4 className="mt-4">2. No Refunds for Change of Mind or Inactivity</h4>
                        <p>Refunds will not be issued for:</p>
                        <ul className="ps-3">
                            <li>Forgetting to cancel before renewal.</li>
                            <li>Change of mind or no longer needing the service.</li>
                            <li>Lack of use during the subscription period.</li>
                        </ul>

                        <h4 className="mt-4">3. How to Request a Refund</h4>
                        <p>
                            To request a refund, contact us at <a href="mailto:support@3dmock.app">support@3dmock.app</a> within 7 days of the charge. Include:
                        </p>
                        <ul className="ps-3">
                            <li>Your account email</li>
                            <li>Invoice ID or payment date</li>
                            <li>A clear explanation of the issue</li>
                        </ul>
                        <p>We respond within 2–3 business days. Approved refunds process in 5–10 business days.</p>

                        <h4 className="mt-4">4. Disputed Charges</h4>
                        <p>
                            Contact us before initiating a chargeback. Filing a dispute without contacting us may result in account suspension.
                        </p>

                        <h4 className="mt-4">5. Subscription Cancellations</h4>
                        <p>Cancel anytime via your dashboard. After cancellation:</p>
                        <ul className="ps-3">
                            <li>You retain access until your billing cycle ends.</li>
                            <li>Your plan won't renew.</li>
                            <li>No refunds for unused time.</li>
                        </ul>

                        <h4 className="mt-4">6. Exceptions</h4>
                        <p>
                            We reserve the right to approve or deny refunds at our discretion, especially in cases of abuse or violations.
                        </p>

                        <h4 className="mt-4">7. Contact</h4>
                        <p>
                            For questions about this policy, contact us:<br />
                            <strong>Email:</strong> <a href="mailto:contact@3dmock.app">contact@3dmock.app</a><br />
                            <strong>Website:</strong> <a href="https://3dmock.app" target="_blank" rel="noopener noreferrer">https://3dmock.app</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RefundPage;
