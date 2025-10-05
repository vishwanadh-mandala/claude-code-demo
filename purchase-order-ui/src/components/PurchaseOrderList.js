import React, { useState } from 'react';

const PurchaseOrderList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  // Sample data
  const [purchaseOrders] = useState([
    {
      id: 1,
      poNumber: 'PO-2025-001',
      vendor: 'ACME Corporation',
      department: 'IT',
      date: '2025-01-15',
      amount: 15750.00,
      status: 'approved',
      requestedBy: 'John Smith'
    },
    {
      id: 2,
      poNumber: 'PO-2025-002',
      vendor: 'Global Supplies Inc.',
      department: 'Operations',
      date: '2025-02-01',
      amount: 8500.00,
      status: 'pending',
      requestedBy: 'Jane Doe'
    },
    {
      id: 3,
      poNumber: 'PO-2025-003',
      vendor: 'Tech Solutions Ltd.',
      department: 'IT',
      date: '2025-02-10',
      amount: 32000.00,
      status: 'approved',
      requestedBy: 'Bob Wilson'
    },
    {
      id: 4,
      poNumber: 'PO-2025-004',
      vendor: 'Office Depot Pro',
      department: 'HR',
      date: '2025-03-05',
      amount: 1250.00,
      status: 'draft',
      requestedBy: 'Sarah Johnson'
    },
    {
      id: 5,
      poNumber: 'PO-2025-005',
      vendor: 'Industrial Parts Co.',
      department: 'Operations',
      date: '2025-03-12',
      amount: 45600.00,
      status: 'rejected',
      requestedBy: 'Mike Davis'
    },
    {
      id: 6,
      poNumber: 'PO-2025-006',
      vendor: 'ACME Corporation',
      department: 'Marketing',
      date: '2025-04-01',
      amount: 12300.00,
      status: 'pending',
      requestedBy: 'Emily Brown'
    }
  ]);

  const getStatusBadgeClass = (status) => {
    const statusClasses = {
      draft: 'status-badge status-draft',
      pending: 'status-badge status-pending',
      approved: 'status-badge status-approved',
      rejected: 'status-badge status-rejected'
    };
    return statusClasses[status] || 'status-badge';
  };

  const filteredOrders = purchaseOrders.filter(po => {
    const matchesSearch = po.poNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         po.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         po.requestedBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || po.status === statusFilter;
    const matchesDepartment = departmentFilter === 'all' || po.department === departmentFilter;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const handleView = (po) => {
    console.log('Viewing PO:', po);
    alert(`Viewing Purchase Order: ${po.poNumber}`);
  };

  const handleEdit = (po) => {
    console.log('Editing PO:', po);
    alert(`Editing Purchase Order: ${po.poNumber}`);
  };

  const handleDelete = (po) => {
    if (window.confirm(`Are you sure you want to delete ${po.poNumber}?`)) {
      console.log('Deleting PO:', po);
      alert(`Deleted Purchase Order: ${po.poNumber}`);
    }
  };

  const totalAmount = filteredOrders.reduce((sum, po) => sum + po.amount, 0);

  return (
    <div className="card fade-in">
      <div className="card-header">
        <h1 className="card-title">Purchase Order Management</h1>
        <p className="card-subtitle">View and manage all purchase orders</p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="search-box">
          <label className="form-label">Search</label>
          <input
            type="text"
            className="form-input"
            placeholder="Search by PO number, vendor, or requester..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ minWidth: '200px' }}>
          <label className="form-label">Status</label>
          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="form-group" style={{ minWidth: '200px' }}>
          <label className="form-label">Department</label>
          <select
            className="form-select"
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            <option value="all">All Departments</option>
            <option value="IT">Information Technology</option>
            <option value="HR">Human Resources</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
          borderRadius: 'var(--border-radius)',
          borderLeft: '4px solid var(--primary-color)'
        }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Total Orders</div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary-color)' }}>{filteredOrders.length}</div>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.05) 100%)',
          borderRadius: 'var(--border-radius)',
          borderLeft: '4px solid var(--success-color)'
        }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Total Amount</div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--success-color)' }}>
            ${totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(217, 119, 6, 0.05) 100%)',
          borderRadius: 'var(--border-radius)',
          borderLeft: '4px solid var(--warning-color)'
        }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Pending</div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--warning-color)' }}>
            {filteredOrders.filter(po => po.status === 'pending').length}
          </div>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.05) 100%)',
          borderRadius: 'var(--border-radius)',
          borderLeft: '4px solid var(--success-color)'
        }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Approved</div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--success-color)' }}>
            {filteredOrders.filter(po => po.status === 'approved').length}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>PO Number</th>
              <th>Vendor</th>
              <th>Department</th>
              <th>Date</th>
              <th>Requested By</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map(po => (
                <tr key={po.id}>
                  <td style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{po.poNumber}</td>
                  <td>{po.vendor}</td>
                  <td>{po.department}</td>
                  <td>{new Date(po.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                  <td>{po.requestedBy}</td>
                  <td style={{ fontWeight: 600 }}>
                    ${po.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                  <td>
                    <span className={getStatusBadgeClass(po.status)}>
                      {po.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleView(po)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleEdit(po)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(po)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                  No purchase orders found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseOrderList;
