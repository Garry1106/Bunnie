"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#0C0B0D] text-[#FFFFFF] font-raleway py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Heading */}
                <h1 className="text-4xl font-bold text-center text-[#F2C0D3] font-sour-gummy-black mb-8 mt-24">
                    Privacy Policy
                </h1>

                {/* Content Container */}
                <div className="space-y-6 text-[#FFFFFF]/80 text-sm sm:text-base">
                    {/* Last Updated */}
                    <p className="text-center text-[#F2C0D3]">
                        <em>Last Updated:</em> 24 January 2025
                    </p>

                    {/* Introduction */}
                    <p>
                        Welcome to <strong>bunnie.io</strong>, a WhatsApp-based AI chatbot service offered by{" "}
                        <strong>Sucetas Technologies</strong> (registered in India). We respect your privacy and
                        are committed to protecting any personal data (“<strong>Personal Data</strong>”) that we
                        collect from or about you through WhatsApp. By messaging bunnie.io on WhatsApp, you
                        consent to this Privacy Policy and our{" "}
                        <Link href="/terms" className="text-[#A07DF4] hover:underline">
                            Terms of Use
                        </Link>
                        .
                    </p>

                    {/* Section 1: Who We Are */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">1. Who We Are</h2>
                        <p>
                            <strong>bunnie.io</strong> (“<strong>we</strong>,” “<strong>us</strong>,” or “
                            <strong>our</strong>”) is an AI companion service accessible through WhatsApp.{" "}
                            <strong>Sucetas Technologies</strong> is an Indian-registered entity that operates and
                            maintains the bunnie.io chatbot. We process your Personal Data strictly for providing
                            our Services via WhatsApp.
                        </p>
                    </section>

                    {/* Section 2: Scope of This Privacy Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">
                            2. Scope of This Privacy Policy
                        </h2>
                        <p>
                            This Privacy Policy applies when you interact with our AI companion on WhatsApp. It
                            covers:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                The <strong>messages</strong> (text, images, audio, or video) you send to bunnie.io
                                on WhatsApp.
                            </li>
                            <li>
                                <strong>Metadata</strong> such as your WhatsApp phone number, profile name,
                                timestamps, and any additional data WhatsApp shares with us to enable the chatbot.
                            </li>
                        </ul>
                        <p className="mt-4">
                            <strong>Important Note:</strong> We do <strong>not</strong> use this data for any
                            purposes other than delivering and improving our Services. Specifically, we:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Do not</strong> use your conversation data to train AI models.
                            </li>
                            <li>
                                <strong>Do not</strong> sell or rent your Personal Data to third parties.
                            </li>
                            <li>
                                <strong>Do not</strong> share your data for marketing or advertising purposes.
                            </li>
                        </ul>
                    </section>

                    {/* Section 3: WhatsApp Data Sharing */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">3. WhatsApp Data Sharing</h2>
                        <p>
                            bunnie.io operates as a <strong>third-party service</strong> integrated with WhatsApp.
                            By using our Services, you acknowledge and agree that:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>WhatsApp</strong> shares your <strong>phone number</strong> and{" "}
                                <strong>interaction data</strong> with us to enable the chatbot functionality (e.g.,
                                delivering messages, media).
                            </li>
                            <li>
                                Your use of bunnie.io is also governed by{" "}
                                <strong>WhatsApp’s Terms of Service</strong> and{" "}
                                <strong>WhatsApp’s Privacy Policy</strong>, and you should review these documents as
                                well.
                            </li>
                            <li>
                                We <strong>do not store</strong> your WhatsApp messages beyond what is necessary to
                                deliver responses and maintain limited chat history, unless required by law or
                                legitimate legal obligations.
                            </li>
                        </ul>
                    </section>

                    {/* Section 4: Personal Data We Collect */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">
                            4. Personal Data We Collect
                        </h2>
                        <p>
                            We only collect the <strong>minimum</strong> data required to provide our Services:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>WhatsApp Messages & Media</strong>
                                <ul className="list-circle list-inside pl-5">
                                    <li>Text, images, audio, or video content you send to bunnie.io on WhatsApp.</li>
                                    <li>
                                        This may include any personal information you choose to share in your messages.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Metadata & Phone Number</strong>
                                <ul className="list-circle list-inside pl-5">
                                    <li>
                                        Your WhatsApp phone number, profile name, timestamps of your interactions, and
                                        any read receipts or delivery confirmations provided by WhatsApp.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Log Data (Server-Side)</strong>
                                <ul className="list-circle list-inside pl-5">
                                    <li>
                                        Technical logs (e.g., error messages, message routing details) used to
                                        troubleshoot and maintain service stability.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Payment Information (If Applicable)</strong>
                                <ul className="list-circle list-inside pl-5">
                                    <li>
                                        If bunnie.io offers paid features via WhatsApp, we may collect payment details
                                        through WhatsApp-approved payment partners or third-party gateways. We{" "}
                                        <strong>do not store</strong> your full credit card details on our own servers.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    {/* Section 5: How We Use Your Data */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">5. How We Use Your Data</h2>
                        <p>
                            We use your Personal Data <strong>only</strong> for:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Chat Delivery & AI Responses</strong>
                                <ul className="list-circle list-inside pl-5">
                                    <li>Processing your messages to generate and send you chatbot responses.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Customer Support</strong>
                                <ul className="list-circle list-inside pl-5">
                                    <li>Handling any queries or issues you raise about our Services.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Service Improvement</strong>
                                <ul className="list-circle list-inside pl-5">
                                    <li>
                                        Reviewing anonymized or aggregated interaction data (e.g., message volume) to
                                        diagnose issues, improve bot performance, and enhance user experience.
                                    </li>
                                    <li>
                                        We do <strong>not</strong> use your data to train AI models.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Legal & Security Purposes</strong>
                                <ul className="list-circle list-inside pl-5">
                                    <li>
                                        Detecting, investigating, or preventing unauthorized access, fraud, or abuse.
                                    </li>
                                    <li>Complying with applicable laws or lawful requests from government authorities.</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    {/* Section 6: Data Retention */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">6. Data Retention</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                We <strong>retain</strong> your WhatsApp phone number and chat interactions{" "}
                                <strong>only</strong> as long as needed to provide you with chatbot responses and
                                maintain basic chat history for <strong>30 days</strong>, unless legal requirements
                                mandate a longer period.
                            </li>
                            <li>
                                After 30 days, we <strong>anonymize or delete</strong> your chat content, unless
                                otherwise required by law.
                            </li>
                        </ul>
                    </section>

                    {/* Section 7: Security Measures for WhatsApp Data */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">
                            7. Security Measures for WhatsApp Data
                        </h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>WhatsApp End-to-End Encryption</strong>
                                <ul className="list-circle list-inside pl-5">
                                    <li>
                                        Messages between you and bunnie.io are encrypted in transit by WhatsApp’s
                                        end-to-end encryption.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Data Storage on Our Servers</strong>
                                <ul className="list-circle list-inside pl-5">
                                    <li>
                                        We securely store the minimal chat data needed to respond to your queries.
                                    </li>
                                    <li>
                                        Access is restricted to authorized personnel, and we use safeguards (e.g., access
                                        controls, firewalls) to protect stored data.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p className="mt-4">
                            Despite these measures, no electronic transmission or storage is completely secure. We
                            encourage you to avoid sharing highly sensitive information in your WhatsApp messages.
                        </p>
                    </section>

                    {/* Section 8: Children’s Privacy */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">8. Children’s Privacy</h2>
                        <p>
                            According to <strong>WhatsApp’s policy</strong>, users must be{" "}
                            <strong>at least 16 years old</strong>. By using bunnie.io on WhatsApp, you confirm you
                            meet WhatsApp’s age requirements. We do not knowingly collect Personal Data from
                            children under 16. If you believe a minor has used our service, please contact us at{" "}
                            <a
                                href="mailto:grievance@bunnie.io"
                                className="text-[#A07DF4] hover:underline"
                            >
                                grievance@bunnie.io
                            </a>
                            , and we will take steps to remove any associated data.
                        </p>
                    </section>

                    {/* Section 9: Indian Legal Requirements */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">
                            9. Indian Legal Requirements
                        </h2>
                        <p>
                            We comply with <strong>India’s Digital Personal Data Protection Act (DPDPA), 2023</strong> and
                            any other relevant regulations. You have the right to:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Access</strong> your Personal Data.
                            </li>
                            <li>
                                <strong>Correct or update</strong> inaccuracies in your data.
                            </li>
                            <li>
                                <strong>Delete</strong> your Personal Data (subject to legal obligations).
                            </li>
                        </ul>
                        <p className="mt-4">
                            To exercise these rights, contact us at{" "}
                            <a
                                href="mailto:grievance@bunnie.io"
                                className="text-[#A07DF4] hover:underline"
                            >
                                grievance@bunnie.io
                            </a>
                            . By messaging bunnie.io on WhatsApp, you consent to the collection and processing of
                            your data under this Privacy Policy.
                        </p>
                    </section>

                    {/* Section 10: Grievance Officer */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">10. Grievance Officer</h2>
                        <p>
                            Pursuant to Indian law, we have appointed a Grievance Officer to address any concerns
                            related to your Personal Data or our data practices. If you have questions, complaints,
                            or requests regarding your data, you may contact:
                        </p>
                        <div className="mt-4">
                            <p>
                                <strong>Name of Grievance Officer:</strong> [Name]
                            </p>
                            <p>
                                <strong>Address:</strong> [Street Address, City, State, PIN Code, India]
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                <a
                                    href="mailto:grievance@bunnie.io"
                                    className="text-[#A07DF4] hover:underline"
                                >
                                    grievance@bunnie.io
                                </a>
                            </p>
                        </div>
                        <p className="mt-4">
                            We will acknowledge and resolve your concerns within <strong>30 days</strong> of
                            receiving your complaint or request, as mandated by Indian regulations.
                        </p>
                    </section>

                    {/* Section 11: Third-Party Services */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">11. Third-Party Services</h2>
                        <p>
                            bunnie.io relies on:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>WhatsApp</strong> as a messaging platform. Please see WhatsApp’s own{" "}
                                <strong>Privacy Policy</strong> for details on how they handle your phone number,
                                metadata, and communications.
                            </li>
                            <li>
                                <strong>Cloud Providers</strong> (e.g., AWS, Google Cloud) to host and process
                                minimal interaction data. Such data may be stored on global servers; however, we
                                ensure compliance with Indian data protection laws and implement necessary
                                safeguards.
                            </li>
                        </ul>
                    </section>

                    {/* Section 12: Updates to This Privacy Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">
                            12. Updates to This Privacy Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy to reflect changes in our practices or legal
                            obligations. Significant changes will be communicated via a WhatsApp message or other
                            prominent notice. The “Last Updated” date at the top indicates when the latest changes
                            took effect. Continued use of bunnie.io on WhatsApp after any updates constitutes
                            acceptance of the revised Privacy Policy.
                        </p>
                    </section>

                    {/* Section 13: Contact Us */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">13. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy or our data practices,
                            please reach out to:
                        </p>
                        <div className="mt-4">
                            <p>
                                <strong>Sucetas Technologies</strong>
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                <a
                                    href="mailto:privacy@bunnie.io"
                                    className="text-[#A07DF4] hover:underline"
                                >
                                    privacy@bunnie.io
                                </a>
                            </p>
                            <p>
                                <strong>Grievance Officer Email:</strong>{" "}
                                <a
                                    href="mailto:grievance@bunnie.io"
                                    className="text-[#A07DF4] hover:underline"
                                >
                                    grievance@bunnie.io
                                </a>
                            </p>
                        </div>
                        <p className="mt-4">
                            We will do our best to address your inquiries promptly and fairly.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}