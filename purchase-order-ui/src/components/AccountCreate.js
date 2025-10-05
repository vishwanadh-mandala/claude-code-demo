import React, { useState } from 'react';

const AccountCreate = () => {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    companyLegalName: '',
    companyType: '',
    industry: '',
    taxId: '',
    registrationNumber: '',
    yearEstablished: '',
    numberOfEmployees: '',
    annualRevenue: '',
    website: '',

    // Primary Contact
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    phoneNumber: '',
    mobileNumber: '',

    // Address Information
    streetAddress: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',

    // Billing Information
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: '',
    paymentMethod: '',
    creditLimit: '',
    paymentTerms: '',

    // Account Settings
    accountType: 'standard',
    accountStatus: 'active',
    salesRep: '',
    accountManager: '',
    preferredCurrency: 'USD',
    timeZone: '',

    // Additional Information
    referralSource: '',
    notes: '',
    termsAccepted: false,
    marketingOptIn: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const copyToBilling = () => {
    setFormData(prev => ({
      ...prev,
      billingAddress: prev.streetAddress,
      billingCity: prev.city,
      billingState: prev.state,
      billingZip: prev.zipCode,
      billingCountry: prev.country
    }));
  };

  const handleSave = () => {
    console.log('Saving account...', formData);
    alert('Account saved successfully!');
  };

  const handleSubmit = () => {
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions to create an account.');
      return;
    }
    console.log('Creating account...', formData);
    alert('Account created successfully!');
  };

  return (
    <div className="card fade-in">
      <div className="card-header">
        <h1 className="card-title">Create New Account</h1>
        <p className="card-subtitle">Set up a new customer or vendor account</p>
      </div>

      {/* Company Information Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem' }}>
          Company Information
        </h2>

        <div className="form-grid-3">
          <div className="form-group">
            <label className="form-label">
              Company Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              className="form-input"
              placeholder="ACME Corporation"
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Legal Company Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="companyLegalName"
              className="form-input"
              placeholder="ACME Corporation LLC"
              value={formData.companyLegalName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Company Type <span className="required">*</span>
            </label>
            <select
              name="companyType"
              className="form-select"
              value={formData.companyType}
              onChange={handleInputChange}
            >
              <option value="">Select Company Type</option>
              <option value="corporation">Corporation</option>
              <option value="llc">Limited Liability Company (LLC)</option>
              <option value="partnership">Partnership</option>
              <option value="sole-proprietorship">Sole Proprietorship</option>
              <option value="nonprofit">Non-Profit</option>
              <option value="government">Government Entity</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              Industry <span className="required">*</span>
            </label>
            <select
              name="industry"
              className="form-select"
              value={formData.industry}
              onChange={handleInputChange}
            >
              <option value="">Select Industry</option>
              <option value="technology">Technology</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="construction">Construction</option>
              <option value="hospitality">Hospitality</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Tax ID / EIN</label>
            <input
              type="text"
              name="taxId"
              className="form-input"
              placeholder="XX-XXXXXXX"
              value={formData.taxId}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              className="form-input"
              placeholder="REG-123456"
              value={formData.registrationNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Year Established</label>
            <input
              type="number"
              name="yearEstablished"
              className="form-input"
              placeholder="2020"
              min="1800"
              max="2025"
              value={formData.yearEstablished}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Number of Employees</label>
            <select
              name="numberOfEmployees"
              className="form-select"
              value={formData.numberOfEmployees}
              onChange={handleInputChange}
            >
              <option value="">Select Range</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="501-1000">501-1,000</option>
              <option value="1001+">1,001+</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Annual Revenue</label>
            <select
              name="annualRevenue"
              className="form-select"
              value={formData.annualRevenue}
              onChange={handleInputChange}
            >
              <option value="">Select Range</option>
              <option value="0-1m">Under $1M</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m-10m">$5M - $10M</option>
              <option value="10m-50m">$10M - $50M</option>
              <option value="50m-100m">$50M - $100M</option>
              <option value="100m+">Over $100M</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label className="form-label">Website</label>
            <input
              type="url"
              name="website"
              className="form-input"
              placeholder="https://www.example.com"
              value={formData.website}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Primary Contact Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem' }}>
          Primary Contact Information
        </h2>

        <div className="form-grid-3">
          <div className="form-group">
            <label className="form-label">
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              className="form-input"
              placeholder="John"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              className="form-input"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              className="form-input"
              placeholder="Purchasing Manager"
              value={formData.jobTitle}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-input"
              placeholder="+1 (555) 123-4567"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              className="form-input"
              placeholder="+1 (555) 987-6543"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Address Information Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem' }}>
          Company Address
        </h2>

        <div className="form-grid-2">
          <div className="form-group full-width">
            <label className="form-label">
              Street Address <span className="required">*</span>
            </label>
            <input
              type="text"
              name="streetAddress"
              className="form-input"
              placeholder="123 Business Street"
              value={formData.streetAddress}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group full-width">
            <label className="form-label">Address Line 2</label>
            <input
              type="text"
              name="addressLine2"
              className="form-input"
              placeholder="Suite 100"
              value={formData.addressLine2}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              City <span className="required">*</span>
            </label>
            <input
              type="text"
              name="city"
              className="form-input"
              placeholder="New York"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              State/Province <span className="required">*</span>
            </label>
            <select
              name="state"
              className="form-select"
              value={formData.state}
              onChange={handleInputChange}
            >
              <option value="">Select State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="CA">California</option>
              <option value="FL">Florida</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              ZIP/Postal Code <span className="required">*</span>
            </label>
            <input
              type="text"
              name="zipCode"
              className="form-input"
              placeholder="10001"
              value={formData.zipCode}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Country <span className="required">*</span>
            </label>
            <select
              name="country"
              className="form-select"
              value={formData.country}
              onChange={handleInputChange}
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
            </select>
          </div>
        </div>
      </div>

      {/* Billing Information Section */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem', margin: 0 }}>
            Billing Information
          </h2>
          <button className="btn btn-outline btn-sm" onClick={copyToBilling}>
            Copy from Company Address
          </button>
        </div>

        <div className="form-grid-2">
          <div className="form-group full-width">
            <label className="form-label">Billing Address</label>
            <input
              type="text"
              name="billingAddress"
              className="form-input"
              placeholder="456 Billing Avenue"
              value={formData.billingAddress}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">City</label>
            <input
              type="text"
              name="billingCity"
              className="form-input"
              placeholder="Boston"
              value={formData.billingCity}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">State/Province</label>
            <select
              name="billingState"
              className="form-select"
              value={formData.billingState}
              onChange={handleInputChange}
            >
              <option value="">Select State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="CA">California</option>
              <option value="FL">Florida</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">ZIP/Postal Code</label>
            <input
              type="text"
              name="billingZip"
              className="form-input"
              placeholder="02101"
              value={formData.billingZip}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Country</label>
            <select
              name="billingCountry"
              className="form-select"
              value={formData.billingCountry}
              onChange={handleInputChange}
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Payment Method</label>
            <select
              name="paymentMethod"
              className="form-select"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="">Select Payment Method</option>
              <option value="credit-card">Credit Card</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="check">Check</option>
              <option value="wire-transfer">Wire Transfer</option>
              <option value="ach">ACH</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Credit Limit</label>
            <input
              type="number"
              name="creditLimit"
              className="form-input"
              placeholder="50000"
              step="1000"
              value={formData.creditLimit}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Payment Terms</label>
            <select
              name="paymentTerms"
              className="form-select"
              value={formData.paymentTerms}
              onChange={handleInputChange}
            >
              <option value="">Select Payment Terms</option>
              <option value="net-15">Net 15</option>
              <option value="net-30">Net 30</option>
              <option value="net-45">Net 45</option>
              <option value="net-60">Net 60</option>
              <option value="due-on-receipt">Due on Receipt</option>
            </select>
          </div>
        </div>
      </div>

      {/* Account Settings Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem' }}>
          Account Settings
        </h2>

        <div className="form-grid-3">
          <div className="form-group">
            <label className="form-label">
              Account Type <span className="required">*</span>
            </label>
            <select
              name="accountType"
              className="form-select"
              value={formData.accountType}
              onChange={handleInputChange}
            >
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
              <option value="trial">Trial</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Account Status</label>
            <select
              name="accountStatus"
              className="form-select"
              value={formData.accountStatus}
              onChange={handleInputChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
              <option value="pending">Pending Approval</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Sales Representative</label>
            <select
              name="salesRep"
              className="form-select"
              value={formData.salesRep}
              onChange={handleInputChange}
            >
              <option value="">Select Sales Rep</option>
              <option value="john-smith">John Smith</option>
              <option value="jane-doe">Jane Doe</option>
              <option value="bob-wilson">Bob Wilson</option>
              <option value="sarah-johnson">Sarah Johnson</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Account Manager</label>
            <select
              name="accountManager"
              className="form-select"
              value={formData.accountManager}
              onChange={handleInputChange}
            >
              <option value="">Select Account Manager</option>
              <option value="mike-davis">Mike Davis</option>
              <option value="emily-brown">Emily Brown</option>
              <option value="david-lee">David Lee</option>
              <option value="lisa-white">Lisa White</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Preferred Currency</label>
            <select
              name="preferredCurrency"
              className="form-select"
              value={formData.preferredCurrency}
              onChange={handleInputChange}
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="CAD">CAD - Canadian Dollar</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Time Zone</label>
            <select
              name="timeZone"
              className="form-select"
              value={formData.timeZone}
              onChange={handleInputChange}
            >
              <option value="">Select Time Zone</option>
              <option value="EST">Eastern (EST)</option>
              <option value="CST">Central (CST)</option>
              <option value="MST">Mountain (MST)</option>
              <option value="PST">Pacific (PST)</option>
              <option value="GMT">GMT</option>
            </select>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem' }}>
          Additional Information
        </h2>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">How did you hear about us?</label>
            <select
              name="referralSource"
              className="form-select"
              value={formData.referralSource}
              onChange={handleInputChange}
            >
              <option value="">Select Source</option>
              <option value="website">Website</option>
              <option value="referral">Referral</option>
              <option value="social-media">Social Media</option>
              <option value="trade-show">Trade Show</option>
              <option value="advertisement">Advertisement</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label className="form-label">Additional Notes</label>
            <textarea
              name="notes"
              className="form-textarea"
              placeholder="Enter any additional notes or special requirements..."
              value={formData.notes}
              onChange={handleInputChange}
              style={{ minHeight: '120px' }}
            />
          </div>
        </div>
      </div>

      {/* Terms and Agreements */}
      <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(248, 250, 252, 0.5)', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
        <div className="checkbox-group" style={{ marginBottom: '1rem' }}>
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            className="form-checkbox"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
          />
          <label htmlFor="termsAccepted" className="form-label" style={{ marginBottom: 0 }}>
            I accept the terms and conditions <span className="required">*</span>
          </label>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="marketingOptIn"
            name="marketingOptIn"
            className="form-checkbox"
            checked={formData.marketingOptIn}
            onChange={handleInputChange}
          />
          <label htmlFor="marketingOptIn" className="form-label" style={{ marginBottom: 0 }}>
            I agree to receive marketing communications
          </label>
        </div>
      </div>

      <div className="button-group">
        <button className="btn btn-secondary" onClick={handleSave}>
          Save as Draft
        </button>
        <button className="btn btn-success" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default AccountCreate;
