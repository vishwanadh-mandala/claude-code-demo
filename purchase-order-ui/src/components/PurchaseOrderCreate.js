import React, { useState } from 'react';

const PurchaseOrderCreate = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [items, setItems] = useState([
    { id: 1, itemCode: '', description: '', quantity: '', unitPrice: '', total: '' }
  ]);

  const [formData, setFormData] = useState({
    // General Information
    poNumber: '',
    poDate: '',
    vendor: '',
    vendorContact: '',
    vendorEmail: '',
    vendorPhone: '',
    department: '',
    requestedBy: '',
    priority: 'medium',
    paymentTerms: '',

    // Shipping Information
    shipToAddress: '',
    shipToCity: '',
    shipToState: '',
    shipToZip: '',
    shipToCountry: '',
    shippingMethod: '',
    expectedDeliveryDate: '',

    // Billing Information
    billToAddress: '',
    billToCity: '',
    billToState: '',
    billToZip: '',
    billToCountry: '',

    // Additional Details
    notes: '',
    termsAndConditions: '',
    internalNotes: '',
    attachments: '',
    approver: '',
    budgetCode: '',
    projectCode: '',
    currency: 'USD'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleItemChange = (id, field, value) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'unitPrice') {
          const qty = parseFloat(field === 'quantity' ? value : updatedItem.quantity) || 0;
          const price = parseFloat(field === 'unitPrice' ? value : updatedItem.unitPrice) || 0;
          updatedItem.total = (qty * price).toFixed(2);
        }
        return updatedItem;
      }
      return item;
    }));
  };

  const addItem = () => {
    setItems([...items, {
      id: items.length + 1,
      itemCode: '',
      description: '',
      quantity: '',
      unitPrice: '',
      total: ''
    }]);
  };

  const removeItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (parseFloat(item.total) || 0), 0).toFixed(2);
  };

  const handleSave = () => {
    console.log('Saving as draft...', { formData, items });
    alert('Purchase Order saved as draft!');
  };

  const handleSubmit = () => {
    console.log('Submitting for approval...', { formData, items });
    alert('Purchase Order submitted for approval!');
  };

  return (
    <div className="card fade-in">
      <div className="card-header">
        <h1 className="card-title">Create Purchase Order</h1>
        <p className="card-subtitle">Create a new purchase order for vendor procurement</p>
      </div>

      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            General Information
          </button>
          <button
            className={`tab-button ${activeTab === 'items' ? 'active' : ''}`}
            onClick={() => setActiveTab('items')}
          >
            Line Items
          </button>
          <button
            className={`tab-button ${activeTab === 'shipping' ? 'active' : ''}`}
            onClick={() => setActiveTab('shipping')}
          >
            Shipping Details
          </button>
          <button
            className={`tab-button ${activeTab === 'billing' ? 'active' : ''}`}
            onClick={() => setActiveTab('billing')}
          >
            Billing Information
          </button>
          <button
            className={`tab-button ${activeTab === 'additional' ? 'active' : ''}`}
            onClick={() => setActiveTab('additional')}
          >
            Additional Details
          </button>
        </div>

        {/* General Information Tab */}
        {activeTab === 'general' && (
          <div className="tab-content">
            <div className="form-grid-3">
              <div className="form-group">
                <label className="form-label">
                  PO Number <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="poNumber"
                  className="form-input"
                  placeholder="PO-2025-001"
                  value={formData.poNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  PO Date <span className="required">*</span>
                </label>
                <input
                  type="date"
                  name="poDate"
                  className="form-input"
                  value={formData.poDate}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Priority <span className="required">*</span>
                </label>
                <select
                  name="priority"
                  className="form-select"
                  value={formData.priority}
                  onChange={handleInputChange}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Vendor Name <span className="required">*</span>
                </label>
                <select
                  name="vendor"
                  className="form-select"
                  value={formData.vendor}
                  onChange={handleInputChange}
                >
                  <option value="">Select Vendor</option>
                  <option value="acme-corp">ACME Corporation</option>
                  <option value="global-supplies">Global Supplies Inc.</option>
                  <option value="tech-solutions">Tech Solutions Ltd.</option>
                  <option value="office-depot">Office Depot Pro</option>
                  <option value="industrial-parts">Industrial Parts Co.</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Vendor Contact Person</label>
                <input
                  type="text"
                  name="vendorContact"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.vendorContact}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Vendor Email</label>
                <input
                  type="email"
                  name="vendorEmail"
                  className="form-input"
                  placeholder="vendor@example.com"
                  value={formData.vendorEmail}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Vendor Phone</label>
                <input
                  type="tel"
                  name="vendorPhone"
                  className="form-input"
                  placeholder="+1 (555) 123-4567"
                  value={formData.vendorPhone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Department <span className="required">*</span>
                </label>
                <select
                  name="department"
                  className="form-select"
                  value={formData.department}
                  onChange={handleInputChange}
                >
                  <option value="">Select Department</option>
                  <option value="it">Information Technology</option>
                  <option value="hr">Human Resources</option>
                  <option value="finance">Finance</option>
                  <option value="operations">Operations</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Requested By <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="requestedBy"
                  className="form-input"
                  placeholder="Employee Name"
                  value={formData.requestedBy}
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
                  <option value="cod">Cash on Delivery</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Currency</label>
                <select
                  name="currency"
                  className="form-select"
                  value={formData.currency}
                  onChange={handleInputChange}
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Budget Code</label>
                <input
                  type="text"
                  name="budgetCode"
                  className="form-input"
                  placeholder="BUDGET-2025-Q1"
                  value={formData.budgetCode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        )}

        {/* Line Items Tab */}
        {activeTab === 'items' && (
          <div className="tab-content">
            <div className="info-box">
              <p>Add items to this purchase order. The total will be calculated automatically.</p>
            </div>

            {items.map((item, index) => (
              <div key={item.id} className="item-row">
                <div className="form-group">
                  <label className="form-label">Item Code</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="ITEM-001"
                    value={item.itemCode}
                    onChange={(e) => handleItemChange(item.id, 'itemCode', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Item description"
                    value={item.description}
                    onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Quantity</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="1"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Unit Price</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="0.00"
                    step="0.01"
                    value={item.unitPrice}
                    onChange={(e) => handleItemChange(item.id, 'unitPrice', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Total</label>
                  <input
                    type="text"
                    className="form-input"
                    value={item.total}
                    readOnly
                    style={{ background: '#f1f5f9' }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ opacity: 0 }}>Action</label>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(item.id)}
                    disabled={items.length === 1}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <button className="btn btn-outline add-item-button" onClick={addItem}>
              + Add Item
            </button>

            <hr className="section-divider" />

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
              <div style={{ minWidth: '300px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                  <span style={{ fontWeight: 600 }}>Subtotal:</span>
                  <span style={{ fontSize: '1.1rem' }}>${calculateSubtotal()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                  <span style={{ fontWeight: 600 }}>Tax (10%):</span>
                  <span style={{ fontSize: '1.1rem' }}>${(calculateSubtotal() * 0.1).toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)', borderRadius: '8px', marginTop: '0.5rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>Total:</span>
                  <span style={{ fontWeight: 700, fontSize: '1.3rem', color: 'var(--primary-color)' }}>
                    ${(parseFloat(calculateSubtotal()) * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Shipping Details Tab */}
        {activeTab === 'shipping' && (
          <div className="tab-content">
            <div className="form-grid-2">
              <div className="form-group full-width">
                <label className="form-label">
                  Shipping Address <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="shipToAddress"
                  className="form-input"
                  placeholder="123 Main Street"
                  value={formData.shipToAddress}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="shipToCity"
                  className="form-input"
                  placeholder="New York"
                  value={formData.shipToCity}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">State/Province</label>
                <select
                  name="shipToState"
                  className="form-select"
                  value={formData.shipToState}
                  onChange={handleInputChange}
                >
                  <option value="">Select State</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                  <option value="FL">Florida</option>
                  <option value="IL">Illinois</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">ZIP/Postal Code</label>
                <input
                  type="text"
                  name="shipToZip"
                  className="form-input"
                  placeholder="10001"
                  value={formData.shipToZip}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Country</label>
                <select
                  name="shipToCountry"
                  className="form-select"
                  value={formData.shipToCountry}
                  onChange={handleInputChange}
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Shipping Method</label>
                <select
                  name="shippingMethod"
                  className="form-select"
                  value={formData.shippingMethod}
                  onChange={handleInputChange}
                >
                  <option value="">Select Shipping Method</option>
                  <option value="standard">Standard Shipping</option>
                  <option value="express">Express Shipping</option>
                  <option value="overnight">Overnight</option>
                  <option value="freight">Freight</option>
                  <option value="pickup">Vendor Pickup</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Expected Delivery Date</label>
                <input
                  type="date"
                  name="expectedDeliveryDate"
                  className="form-input"
                  value={formData.expectedDeliveryDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        )}

        {/* Billing Information Tab */}
        {activeTab === 'billing' && (
          <div className="tab-content">
            <div className="checkbox-group" style={{ marginBottom: '1.5rem' }}>
              <input
                type="checkbox"
                id="sameAsShipping"
                className="form-checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData(prev => ({
                      ...prev,
                      billToAddress: prev.shipToAddress,
                      billToCity: prev.shipToCity,
                      billToState: prev.shipToState,
                      billToZip: prev.shipToZip,
                      billToCountry: prev.shipToCountry
                    }));
                  }
                }}
              />
              <label htmlFor="sameAsShipping" className="form-label" style={{ marginBottom: 0 }}>
                Same as Shipping Address
              </label>
            </div>

            <div className="form-grid-2">
              <div className="form-group full-width">
                <label className="form-label">
                  Billing Address <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="billToAddress"
                  className="form-input"
                  placeholder="456 Business Blvd"
                  value={formData.billToAddress}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="billToCity"
                  className="form-input"
                  placeholder="Boston"
                  value={formData.billToCity}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">State/Province</label>
                <select
                  name="billToState"
                  className="form-select"
                  value={formData.billToState}
                  onChange={handleInputChange}
                >
                  <option value="">Select State</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                  <option value="FL">Florida</option>
                  <option value="IL">Illinois</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">ZIP/Postal Code</label>
                <input
                  type="text"
                  name="billToZip"
                  className="form-input"
                  placeholder="02101"
                  value={formData.billToZip}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Country</label>
                <select
                  name="billToCountry"
                  className="form-select"
                  value={formData.billToCountry}
                  onChange={handleInputChange}
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Additional Details Tab */}
        {activeTab === 'additional' && (
          <div className="tab-content">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Approver</label>
                <select
                  name="approver"
                  className="form-select"
                  value={formData.approver}
                  onChange={handleInputChange}
                >
                  <option value="">Select Approver</option>
                  <option value="john-smith">John Smith - Manager</option>
                  <option value="jane-doe">Jane Doe - Director</option>
                  <option value="bob-wilson">Bob Wilson - VP Finance</option>
                  <option value="sarah-johnson">Sarah Johnson - CFO</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Project Code</label>
                <input
                  type="text"
                  name="projectCode"
                  className="form-input"
                  placeholder="PROJ-2025-001"
                  value={formData.projectCode}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Attachments</label>
                <input
                  type="file"
                  name="attachments"
                  className="form-input"
                  multiple
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">Notes for Vendor</label>
                <textarea
                  name="notes"
                  className="form-textarea"
                  placeholder="Any special instructions or notes for the vendor..."
                  value={formData.notes}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">Internal Notes</label>
                <textarea
                  name="internalNotes"
                  className="form-textarea"
                  placeholder="Internal notes (not visible to vendor)..."
                  value={formData.internalNotes}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">Terms and Conditions</label>
                <textarea
                  name="termsAndConditions"
                  className="form-textarea"
                  placeholder="Enter terms and conditions..."
                  value={formData.termsAndConditions}
                  onChange={handleInputChange}
                  style={{ minHeight: '150px' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="button-group">
        <button className="btn btn-secondary" onClick={handleSave}>
          Save as Draft
        </button>
        <button className="btn btn-success" onClick={handleSubmit}>
          Submit for Approval
        </button>
      </div>
    </div>
  );
};

export default PurchaseOrderCreate;
