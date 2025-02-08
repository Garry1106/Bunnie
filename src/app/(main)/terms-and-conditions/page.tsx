"use client";

import Link from "next/link";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-[#0C0B0D] text-[#FFFFFF] font-raleway py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Heading */}
                <h1 className="text-4xl font-bold text-center text-[#F2C0D3] font-sour-gummy-black mb-8 mt-24">
                    Terms and Conditions
                </h1>

                {/* Content Container */}
                <div className="space-y-6 text-[#FFFFFF]/80 text-sm sm:text-base">
                    {/* Effective Date */}
                    <p className="text-center text-[#F2C0D3]">
                        <em>Last updated:</em> January 24, 2025
                    </p>

                    {/* Introduction */}
                    <p>
                        Welcome to <strong>bunnie.io</strong> (“<strong>Bunnie</strong>,” “<strong>we</strong>,” “
                        <strong>us</strong>,” or “<strong>our</strong>”). These Terms of Use (“<strong>Terms</strong>”) govern your
                        access to and use of our WhatsApp-based AI companion service, any related applications, and our subscription
                        or account management portal at{" "}
                        <Link href="https://bunnie.io" className="text-[#A07DF4] hover:underline">
                            bunnie.io
                        </Link>{" "}
                        (collectively, the “<strong>Services</strong>”).
                    </p>
                    <p>
                        Bunnie is owned and operated by <strong>Sucetas Technologies</strong>, a company registered in{" "}
                        <strong>India</strong>.
                    </p>
                    <p>
                        By accessing or using our Services, you agree to be bound by these Terms and our{" "}
                        <Link href="/privacy-policy" className="text-[#A07DF4] hover:underline">
                            Privacy Policy
                        </Link>
                        . If you do not agree, you must discontinue your use of the Services.
                    </p>

                    {/* Section 1: Who We Are */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">1. Who We Are</h2>
                        <p>
                            Bunnie provides an AI companion accessible through WhatsApp. Users can send text, images, audio, or video
                            messages to receive AI-generated responses, including optional text-to-speech (TTS). Our mission is to
                            offer a friendly and helpful AI conversation experience in compliance with applicable laws and these Terms.
                        </p>
                    </section>

                    {/* Section 2: Third-Party Integration (WhatsApp) */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">
                            2. Third-Party Integration (WhatsApp)
                        </h2>
                        <p>
                            <strong>WhatsApp Terms:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Our Services rely on WhatsApp’s platform. By using Bunnie, you acknowledge that your use of WhatsApp is
                                subject to <strong>WhatsApp’s Terms of Service</strong> and <strong>Privacy Policy</strong>.
                            </li>
                            <li>
                                We are <strong>not responsible</strong> for WhatsApp’s service availability, data privacy practices, or
                                any limitations imposed by WhatsApp.
                            </li>
                        </ul>
                        <p className="mt-4">
                            <strong>Data Sharing:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                We do <strong>not</strong> share your data with WhatsApp beyond what is{" "}
                                <strong>inherently necessary</strong> to facilitate messaging.
                            </li>
                            <li>
                                Messages are processed by WhatsApp according to its own terms and privacy policy.
                            </li>
                        </ul>
                        <p className="mt-4">
                            <strong>Disclaimer:</strong>
                        </p>
                        <p>
                            Sucetas Technologies disclaims liability arising from WhatsApp’s actions or omissions, including outages,
                            data handling, or policy changes.
                        </p>
                    </section>

                    {/* Section 3: Eligibility and Accounts */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">3. Eligibility and Accounts</h2>
                        <p>
                            <strong>Age Requirement:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Under WhatsApp’s policy, users should generally be at least <strong>16 years old</strong>. By using
                                Bunnie, you confirm you meet WhatsApp’s minimum age requirement and any other local minimum age laws
                                that may apply.
                            </li>
                            <li>
                                If your local jurisdiction permits a lower minimum age (e.g., 13) with parental consent, you must obtain
                                and provide that consent. <strong>We reserve the right to request proof of such consent</strong>.
                            </li>
                        </ul>
                        <p className="mt-4">
                            <strong>Parental Consent Verification:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                We may require <strong>signed consent forms</strong>, <strong>credit card verification</strong>, or{" "}
                                <strong>direct contact</strong> with a parent/guardian to confirm consent for users under the applicable
                                adult age.
                            </li>
                            <li>
                                We may suspend or terminate user access if we cannot verify parental or guardian consent when required.
                            </li>
                        </ul>
                        <p className="mt-4">
                            <strong>Account Registration:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                You agree to provide accurate information when creating an account or subscription on{" "}
                                <Link href="https://bunnie.io" className="text-[#A07DF4] hover:underline">
                                    bunnie.io
                                </Link>
                                .
                            </li>
                            <li>
                                You are responsible for safeguarding login credentials and for all activities under your account.
                            </li>
                        </ul>
                        <p className="mt-4">
                            <strong>Organization Use:</strong>
                        </p>
                        <p>
                            If you create an account on behalf of a business or other entity, you represent that you have authority to
                            bind that entity to these Terms.
                        </p>
                    </section>

                    {/* Section 4: Data Privacy and Regional Compliance */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">
                            4. Data Privacy and Regional Compliance
                        </h2>
                        <p>
                            <strong>Indian Registration:</strong>
                        </p>
                        <p>
                            Sucetas Technologies is a company registered in India. We comply with the{" "}
                            <strong>Digital Personal Data Protection Act (DPDPA), 2023</strong> and other relevant Indian laws.
                        </p>
                        <p className="mt-4">
                            <strong>GDPR (EU/EEA), UK, Switzerland:</strong>
                        </p>
                        <p>
                            If you use our Services from these regions, your personal data is subject to the GDPR or equivalent data
                            protection laws.
                        </p>
                        <p>
                            You have rights to access, rectify, or erase your data, and to object or restrict processing. See our{" "}
                            <Link href="/privacy-policy" className="text-[#A07DF4] hover:underline">
                                Privacy Policy
                            </Link>{" "}
                            for details.
                        </p>
                        <p className="mt-4">
                            <strong>California Residents (CCPA):</strong>
                        </p>
                        <p>
                            California residents may have rights under the <strong>California Consumer Privacy Act (CCPA)</strong>,
                            including the right to know and delete your data.
                        </p>
                        <p>
                            We do not “sell” personal data.
                        </p>
                        <p className="mt-4">
                            <strong>Brazilian Users (LGPD):</strong>
                        </p>
                        <p>
                            If you reside in Brazil, your data is processed under the{" "}
                            <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
                        </p>
                        <p>
                            You may access, correct, or request deletion of your data as detailed in our{" "}
                            <Link href="/privacy-policy" className="text-[#A07DF4] hover:underline">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                        <p className="mt-4">
                            <strong>Data Retention:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                We only retain personal data for as long as necessary to deliver our Services or meet legal obligations.
                            </li>
                            <li>
                                <strong>We do not use your data for AI model training.</strong>
                            </li>
                            <li>
                                If you request deletion of personal data, we will comply <strong>within 30 days</strong>, unless legal
                                requirements prevent us from doing so.
                            </li>
                        </ul>
                    </section>

                    {/* Section 5: Use of Our Services */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">5. Use of Our Services</h2>
                        <p>
                            <strong>5.1 Permitted Use</strong>
                        </p>
                        <p>
                            Subject to these Terms, you may use our WhatsApp-based AI companion for lawful, personal communication. You
                            can send text, images, audio, and video content to receive AI-generated responses and TTS outputs.
                        </p>
                        <p className="mt-4">
                            <strong>5.2 Prohibited Conduct</strong>
                        </p>
                        <p>
                            You <strong>agree not</strong> to:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Unlawful Activity:</strong> Violate any laws or regulations.
                            </li>
                            <li>
                                <strong>Infringing Content:</strong> Upload or send content that infringes third-party rights (e.g.,
                                copyright, trademark, privacy).
                            </li>
                            <li>
                                <strong>Reverse Engineering:</strong> Attempt to decompile, reverse engineer, or extract proprietary
                                code.
                            </li>
                            <li>
                                <strong>Automated Harvesting:</strong> Use bots or scripts to scrape, extract data, or spam the Services
                                without written permission.
                            </li>
                            <li>
                                <strong>Misrepresentation:</strong> Present AI outputs as human-generated if doing so misleads or
                                deceives others.
                            </li>
                            <li>
                                <strong>Harmful or Offensive Content:</strong> Send content that is harassing, hateful, or otherwise
                                harmful.
                            </li>
                            <li>
                                <strong>Service Disruption:</strong> Bypass rate limits, security measures, or otherwise disrupt the
                                Services.
                            </li>
                            <li>
                                <strong>Restricted End Users:</strong> Use the Services if subject to trade sanctions or embargoes.
                            </li>
                        </ul>
                        <p className="mt-4">
                            <strong>5.3 Content Moderation and Reporting</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Monitoring:</strong> We may use automated filters and human review to detect prohibited content
                                or activities.
                            </li>
                            <li>
                                <strong>Reporting Violations:</strong> If you see misuse, contact{" "}
                                <a
                                    href="mailto:support@bunnie.io"
                                    className="text-[#A07DF4] hover:underline"
                                >
                                    support@bunnie.io
                                </a>
                                . We may remove content or suspend accounts violating these Terms.
                            </li>
                        </ul>
                    </section>

                    {/* Section 6: Your Content */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">6. Your Content</h2>
                        <p>
                            <strong>6.1 Input and Output</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Input</strong> refers to any text, images, audio, or video you send.
                            </li>
                            <li>
                                <strong>Output</strong> refers to AI-generated responses or TTS. You own the Output to the extent
                                permitted by law.
                            </li>
                        </ul>
                        <p className="mt-4">
                            <strong>6.2 No AI Training</strong>
                        </p>
                        <p>
                            We do <strong>not</strong> use your Input or Output to train our AI. Data is processed only to provide the
                            chatbot service, maintain reliability, comply with laws, and enforce these Terms.
                        </p>
                        <p className="mt-4">
                            <strong>6.3 Deletion Requests</strong>
                        </p>
                        <p>
                            You may request deletion of Input, Output, or personal data. See Section 11.2 for details. We will remove
                            data from our systems within <strong>30 days</strong>, unless needed for legal compliance or legitimate
                            interests.
                        </p>
                    </section>

                    {/* Section 7: Payment, Subscriptions, and Refunds */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">
                            7. Payment, Subscriptions, and Refunds
                        </h2>
                        <p>
                            <strong>7.1 Subscription Plans</strong>
                        </p>
                        <p>
                            We may offer monthly or annual subscription tiers with different usage limits or premium features. By
                            subscribing, you agree to the prices and payment terms shown at checkout.
                        </p>
                        <p className="mt-4">
                            <strong>7.2 Billing and Renewal</strong>
                        </p>
                        <p>
                            You authorize recurring charges to your chosen payment method. Subscriptions renew automatically unless
                            canceled.
                        </p>
                        <p className="mt-4">
                            <strong>7.3 Cancellation Process</strong>
                        </p>
                        <p>
                            Cancel via your account on{" "}
                            <Link href="https://bunnie.io" className="text-[#A07DF4] hover:underline">
                                bunnie.io
                            </Link>{" "}
                            or by emailing{" "}
                            <a
                                href="mailto:support@bunnie.io"
                                className="text-[#A07DF4] hover:underline"
                            >
                                support@bunnie.io
                            </a>
                            . Cancellations take effect at the end of the current billing cycle.
                        </p>
                        <p className="mt-4">
                            <strong>7.4 Refund Policy</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Annual Plans:</strong> Prorated refunds based on unused months.
                            </li>
                            <li>
                                <strong>Monthly Plans:</strong> Generally non-refundable unless required by law.
                            </li>
                            <li>
                                Contact{" "}
                                <a
                                    href="mailto:support@bunnie.io"
                                    className="text-[#A07DF4] hover:underline"
                                >
                                    support@bunnie.io
                                </a>{" "}
                                for refund inquiries.
                            </li>
                        </ul>
                    </section>

                    {/* Section 8: AI Output and Harm Mitigation */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">8. AI Output and Harm Mitigation</h2>
                        <p>
                            <strong>8.1 No Professional Advice</strong>
                        </p>
                        <p>
                            Bunnie’s AI outputs are for informational or entertainment purposes and are not legal, medical, or other
                            professional advice.
                        </p>
                        <p className="mt-4">
                            <strong>8.2 Accuracy</strong>
                        </p>
                        <p>
                            AI responses may contain inaccuracies or offensive material. You assume any risk from relying on them.
                        </p>
                        <p className="mt-4">
                            <strong>8.3 Misuse of AI</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                You must not use AI outputs for creating deceptive “deepfakes,” impersonations, or malicious content.
                            </li>
                            <li>
                                We reserve the right to suspend or terminate users engaged in misuse.
                            </li>
                        </ul>
                    </section>

                    {/* Section 9: Security Measures */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">9. Security Measures</h2>
                        <p>
                            We implement standard security controls to safeguard data from unauthorized access or disclosure. For
                            details, see our{" "}
                            <Link href="/privacy-policy" className="text-[#A07DF4] hover:underline">
                                Privacy Policy
                            </Link>
                            . However, no method is fully secure, and you accept inherent risks in electronic communications.
                        </p>
                    </section>

                    {/* Section 10: Liability Limitations */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">10. Liability Limitations</h2>
                        <p>
                            <strong>10.1 As Is / As Available</strong>
                        </p>
                        <p>
                            The Services are provided “as is,” without warranties, except where prohibited by law.
                        </p>
                        <p className="mt-4">
                            <strong>10.2 Third-Party Platforms</strong>
                        </p>
                        <p>
                            We are not liable for issues related to WhatsApp or other external services.
                        </p>
                        <p className="mt-4">
                            <strong>10.3 Indirect Damages</strong>
                        </p>
                        <p>
                            To the maximum extent allowed by law, we are not liable for indirect, special, or consequential damages
                            (including lost data or profits).
                        </p>
                        <p className="mt-4">
                            <strong>10.4 Liability Cap</strong>
                        </p>
                        <p>
                            Our aggregate liability is limited to the greater of (a) the total subscription fees you paid in the 12
                            months before the claim, or (b) USD $100.
                        </p>
                        <p className="mt-4">
                            <strong>10.5 Jurisdictional Exceptions</strong>
                        </p>
                        <p>
                            If your jurisdiction disallows certain liability limits, those limits apply only to the fullest extent
                            allowed.
                        </p>
                    </section>

                    {/* Section 11: User Requests and Termination */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">11. User Requests and Termination</h2>
                        <p>
                            <strong>11.1 Termination by User</strong>
                        </p>
                        <p>
                            You may stop using Bunnie at any time. You may also request account deletion via your account settings or
                            by contacting{" "}
                            <a
                                href="mailto:support@bunnie.io"
                                className="text-[#A07DF4] hover:underline"
                            >
                                support@bunnie.io
                            </a>
                            .
                        </p>
                        <p className="mt-4">
                            <strong>11.2 Data Deletion Requests</strong>
                        </p>
                        <p>
                            You can request removal of your personal data by emailing{" "}
                            <a
                                href="mailto:support@bunnie.io"
                                className="text-[#A07DF4] hover:underline"
                            >
                                support@bunnie.io
                            </a>
                            . We will fulfill such requests <strong>within 30 days</strong>, except where legal obligations require
                            retention.
                        </p>
                        <p className="mt-4">
                            <strong>11.3 Termination by Bunnie</strong>
                        </p>
                        <p>
                            We may suspend or terminate your account if:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                You breach these Terms or violate applicable laws.
                            </li>
                            <li>
                                Your activities pose a risk to other users or our systems.
                            </li>
                            <li>
                                Your account remains inactive for more than a year without a paid subscription.
                            </li>
                            <li>
                                We must comply with legal or regulatory requirements.
                            </li>
                        </ul>
                        <p>
                            We will provide notice of termination where feasible.
                        </p>
                    </section>

                    {/* Section 12: Dispute Resolution and Arbitration */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">
                            12. Dispute Resolution and Arbitration
                        </h2>
                        <p>
                            <strong>12.1 Informal Resolution</strong>
                        </p>
                        <p>
                            Contact{" "}
                            <a
                                href="mailto:support@bunnie.io"
                                className="text-[#A07DF4] hover:underline"
                            >
                                support@bunnie.io
                            </a>{" "}
                            to try resolving disputes informally before initiating legal action.
                        </p>
                        <p className="mt-4">
                            <strong>12.2 Arbitration</strong>
                        </p>
                        <p>
                            Where permitted by law, we may agree to resolve disputes via <strong>binding arbitration</strong> on an
                            individual basis. You can opt out of arbitration within <strong>30 days</strong> of agreeing to these
                            Terms.
                        </p>
                        <p className="mt-4">
                            <strong>12.3 Class Action Waiver</strong>
                        </p>
                        <p>
                            You waive any right to join class or representative actions unless your jurisdiction disallows such
                            waivers.
                        </p>
                        <p className="mt-4">
                            <strong>12.4 Exceptions</strong>
                        </p>
                        <p>
                            Arbitration does not apply if legally unenforceable or for certain claims (e.g., small claims, public
                            injunctive relief, IP matters).
                        </p>
                    </section>

                    {/* Section 13: Notices and Changes to These Terms */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">
                            13. Notices and Changes to These Terms
                        </h2>
                        <p>
                            <strong>13.1 Advance Notice</strong>
                        </p>
                        <p>
                            We provide at least <strong>30 days’ notice</strong> via email or a WhatsApp message before any{" "}
                            <strong>material changes</strong> to these Terms.
                        </p>
                        <p className="mt-4">
                            <strong>13.2 Effective Date</strong>
                        </p>
                        <p>
                            Changes take effect on the stated date.
                        </p>
                        <p className="mt-4">
                            <strong>13.3 Continued Use</strong>
                        </p>
                        <p>
                            Using Bunnie after changes become effective means you accept the updated Terms.
                        </p>
                    </section>

                    {/* Section 14: Additional Clauses */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">14. Additional Clauses</h2>
                        <p>
                            <strong>14.1 Force Majeure</strong>
                        </p>
                        <p>
                            We are not liable for delays or failures caused by events beyond our control, including natural disasters,
                            pandemics, cyberattacks, civil unrest, government actions, or <strong>WhatsApp outages</strong>.
                        </p>
                        <p className="mt-4">
                            <strong>14.2 Export Controls</strong>
                        </p>
                        <p>
                            You must not use Bunnie if you are located in a sanctioned territory or appear on prohibited-party lists.
                            Compliance with all applicable export and trade laws is your responsibility.
                        </p>
                        <p className="mt-4">
                            <strong>14.3 Accessibility</strong>
                        </p>
                        <p>
                            We aim to follow recognized accessibility standards (e.g., WCAG). If you encounter barriers, please
                            contact{" "}
                            <a
                                href="mailto:support@bunnie.io"
                                className="text-[#A07DF4] hover:underline"
                            >
                                support@bunnie.io
                            </a>
                            .
                        </p>
                    </section>

                    {/* Section 15: General Provisions */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">15. General Provisions</h2>
                        <p>
                            <strong>15.1 Severability</strong>
                        </p>
                        <p>
                            If any clause is invalid, the rest remain enforceable.
                        </p>
                        <p className="mt-4">
                            <strong>15.2 Survival</strong>
                        </p>
                        <p>
                            Provisions on <strong>liability, indemnification, arbitration, data retention</strong>, and other clauses
                            naturally intended to continue will survive termination.
                        </p>
                        <p className="mt-4">
                            <strong>15.3 Assignment</strong>
                        </p>
                        <p>
                            You cannot assign these Terms without written consent. We may assign them during mergers, acquisitions, or
                            asset sales.
                        </p>
                        <p className="mt-4">
                            <strong>15.4 Entire Agreement</strong>
                        </p>
                        <p>
                            These Terms plus our Privacy Policy form the entire agreement between you and Sucetas Technologies for
                            Bunnie.
                        </p>
                        <p className="mt-4">
                            <strong>15.5 Governing Law</strong>
                        </p>
                        <p>
                            Unless otherwise mandated by local law, these Terms are governed by and construed according to the laws of{" "}
                            <strong>India</strong>, without regard to conflict-of-law principles.
                        </p>
                    </section>

                    {/* Section 16: Indemnification */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">16. Indemnification</h2>
                        <p>
                            If you represent a business entity, you agree to indemnify and hold harmless Bunnie, Sucetas Technologies,
                            affiliates, employees, and agents from any claims, damages, or legal fees arising out of your use of the
                            Services, breach of these Terms, or infringement of third-party rights.
                        </p>
                    </section>

                    {/* Section 17: Contact Us */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#F2C0D3] mt-8 mb-4">17. Contact Us</h2>
                        <p>
                            If you have questions or concerns about these Terms or our Services, please reach out to:
                        </p>
                        <div className="mt-4">
                            <p>
                                <strong>Sucetas Technologies</strong>
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                <a
                                    href="mailto:contact@bunnie.io"
                                    className="text-[#A07DF4] hover:underline"
                                >
                                    contact@bunnie.io
                                </a>
                            </p>
                        </div>
                        <p className="mt-4">
                            By accessing or using our WhatsApp-based AI Services, you confirm you have{" "}
                            <strong>read, understood, and agree to</strong> these Terms of Use. If you do not agree, please discontinue
                            using Bunnie immediately.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}