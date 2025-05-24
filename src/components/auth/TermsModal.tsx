import React, { useState } from 'react';
import { Modal, Typography, Checkbox, Button, Space } from 'antd';
const {
  Title,
  Paragraph,
  Text
} = Typography;
interface TermsModalProps {
  visible: boolean;
  onAccept: () => void;
  onCancel: () => void;
}
const TermsModal: React.FC<TermsModalProps> = ({
  visible,
  onAccept,
  onCancel
}) => {
  const [agreed, setAgreed] = useState(false);
  return <Modal title={<Title level={4}>Terms & Conditions</Title>} open={visible} width={700} footer={null} onCancel={onCancel}>
      <div className="max-h-96 overflow-y-auto p-4 bg-gray-50 rounded mb-4">
        <Title level={5}>1. Introduction</Title>
        <Paragraph>
          Welcome to TerraFlow Supply Chain Management System. By registering
          and using our platform, you agree to these Terms and Conditions,
          which, together with our Privacy Policy, govern TerraFlow's
          relationship with you in relation to this website and system.
        </Paragraph>
        <Title level={5}>2. Definitions</Title>
        <Paragraph>
          <Text strong>"TerraFlow"</Text> refers to our company, TerraFlow Inc.,
          a manufacturer and distributor of clay products.
          <br />
          <Text strong>"Platform"</Text> refers to the Supply Chain Management
          System accessible via our website.
          <br />
          <Text strong>"User"</Text> refers to any individual or entity that
          registers and uses the Platform.
        </Paragraph>
        <Title level={5}>3. Account Registration</Title>
        <Paragraph>
          3.1 To use the Platform, you must register for an account and provide
          accurate and complete information.
          <br />
          3.2 You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account.
          <br />
          3.3 You must notify TerraFlow immediately of any unauthorized use of
          your account or any other breach of security.
        </Paragraph>
        <Title level={5}>4. User Roles and Responsibilities</Title>
        <Paragraph>
          4.1 <Text strong>Customers:</Text> May browse products, place orders,
          track deliveries, and manage their account information.
          <br />
          4.2 <Text strong>Suppliers:</Text> May receive material requests,
          update delivery status, view forecasts, and manage their profile.
          <br />
          4.3 All users must comply with applicable laws and regulations when
          using the Platform.
        </Paragraph>
        <Title level={5}>5. Orders and Payments</Title>
        <Paragraph>
          5.1 All orders placed through the Platform are subject to acceptance
          and availability.
          <br />
          5.2 Prices are as quoted on the Platform and may change without notice
          before an order is confirmed.
          <br />
          5.3 Payment methods and terms will be specified during the checkout
          process.
        </Paragraph>
        <Title level={5}>6. Delivery and Returns</Title>
        <Paragraph>
          6.1 Delivery times are estimates and not guaranteed.
          <br />
          6.2 Risk of loss and title for items purchased pass to you upon
          delivery.
          <br />
          6.3 Returns are subject to our Returns Policy, available separately on
          the Platform.
        </Paragraph>
        <Title level={5}>7. Intellectual Property</Title>
        <Paragraph>
          7.1 All content on the Platform, including text, graphics, logos, and
          software, is the property of TerraFlow and protected by intellectual
          property laws.
          <br />
          7.2 You may not reproduce, distribute, or create derivative works from
          this content without explicit permission.
        </Paragraph>
        <Title level={5}>8. Privacy and Data Protection</Title>
        <Paragraph>
          8.1 TerraFlow collects and processes personal data in accordance with
          our Privacy Policy.
          <br />
          8.2 By using the Platform, you consent to such processing and warrant
          that all data provided by you is accurate.
        </Paragraph>
        <Title level={5}>9. Limitation of Liability</Title>
        <Paragraph>
          9.1 TerraFlow shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages resulting from your use of
          or inability to use the Platform.
          <br />
          9.2 TerraFlow's total liability for any claims under these Terms shall
          not exceed the amount paid by you to TerraFlow in the preceding twelve
          months.
        </Paragraph>
        <Title level={5}>10. Termination</Title>
        <Paragraph>
          10.1 TerraFlow may terminate or suspend your account and access to the
          Platform at any time, without notice, for conduct that TerraFlow
          believes violates these Terms or is harmful to other users, TerraFlow,
          or third parties, or for any other reason.
          <br />
          10.2 Upon termination, your right to use the Platform will immediately
          cease.
        </Paragraph>
        <Title level={5}>11. Governing Law</Title>
        <Paragraph>
          These Terms shall be governed by and construed in accordance with the
          laws of the jurisdiction in which TerraFlow is registered, without
          regard to its conflict of law provisions.
        </Paragraph>
        <Title level={5}>12. Changes to Terms</Title>
        <Paragraph>
          TerraFlow reserves the right to modify these Terms at any time. We
          will provide notice of significant changes by posting the new Terms on
          the Platform and updating the "Last Updated" date.
        </Paragraph>
        <Title level={5}>13. Contact Information</Title>
        <Paragraph>
          For questions about these Terms, please contact us at
          legal@terraflow.com.
        </Paragraph>
      </div>
      <div className="mb-4">
        <Checkbox checked={agreed} onChange={e => setAgreed(e.target.checked)}>
          I have read and agree to the Terms & Conditions
        </Checkbox>
      </div>
      <Space className="flex justify-end">
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="primary" disabled={!agreed} onClick={onAccept}>
          Accept & Continue
        </Button>
      </Space>
    </Modal>;
};
export default TermsModal;