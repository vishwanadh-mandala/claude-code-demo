# Purchase Order Management System

A comprehensive React-based UI application for managing purchase orders and accounts with rich styling and intuitive user experience.

## Features

### Purchase Order Management
- **Create Purchase Orders**: Multi-tab interface with the following sections:
  - General Information (PO details, vendor selection, department, priority)
  - Line Items (dynamic item management with auto-calculation)
  - Shipping Details (complete shipping address and delivery options)
  - Billing Information (separate billing address configuration)
  - Additional Details (notes, terms, approvals, attachments)

- **View Purchase Orders**:
  - Comprehensive list view with filtering and search
  - Status-based filtering (Draft, Pending, Approved, Rejected)
  - Department filtering
  - Summary dashboard with key metrics
  - Action buttons for View, Edit, and Delete

### Account Creation
- **Company Information**: Complete business details including tax ID, industry, revenue
- **Contact Information**: Primary contact details with multiple communication channels
- **Address Management**: Separate company and billing addresses
- **Account Settings**: Account type, status, sales rep assignment, currency preferences
- **Terms and Agreements**: Checkbox controls for terms acceptance and marketing opt-in

## UI Features

### Form Controls
- **Text Boxes**: Multiple input fields with validation
- **Dropdowns**: Extensive use of select elements for standardized data
- **Textareas**: Multi-line input for notes and descriptions
- **Date Pickers**: For PO dates and delivery dates
- **Checkboxes**: For terms and agreements
- **Number Inputs**: For quantities, prices, and financial data
- **File Upload**: For document attachments

### Design Elements
- **Tabs**: Multi-section navigation in PO creation
- **Status Badges**: Color-coded status indicators
- **Data Tables**: Responsive table layouts with hover effects
- **Summary Cards**: Dashboard metrics with gradient backgrounds
- **Buttons**: Primary, Secondary, Success, Danger, and Outline variants
- **Search and Filter**: Dynamic filtering capabilities
- **Gradient Effects**: Modern UI with gradient backgrounds
- **Shadows and Depth**: Card-based layout with elevation
- **Responsive Design**: Mobile-friendly layouts

### Styling
- CSS variables for consistent theming
- Professional color palette
- Smooth transitions and animations
- Hover effects and interactive states
- Accessible form controls
- Professional typography

## Installation

1. Navigate to the project directory:
```bash
cd purchase-order-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
purchase-order-ui/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PurchaseOrderCreate.js   # PO creation with tabs
│   │   ├── PurchaseOrderList.js     # PO management screen
│   │   └── AccountCreate.js         # Account creation screen
│   ├── styles/
│   │   └── App.css                  # Main stylesheet
│   ├── App.js                       # Main app with navigation
│   └── index.js                     # Entry point
├── package.json
└── README.md
```

## Screen Details

### Purchase Order Creation Screen
- 5 tabs for organized data entry
- Dynamic line item management
- Automatic total calculation
- Save as Draft and Submit for Approval actions
- Comprehensive form validation

### Purchase Order List Screen
- Search functionality
- Multi-criteria filtering
- Summary statistics
- Sortable data table
- Quick actions (View, Edit, Delete)

### Account Creation Screen
- 6 major sections for complete account setup
- Copy address functionality
- Rich dropdown options
- Terms acceptance workflow
- Draft saving capability

## Technologies Used

- **React 18.2.0**: Component-based UI framework
- **CSS3**: Modern styling with variables and gradients
- **React Scripts**: Development and build tooling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend integration with REST API
- User authentication and authorization
- PDF generation for purchase orders
- Email notifications
- Advanced reporting and analytics
- Export to Excel/CSV functionality
- Dark mode support
- Multi-language support

## License

Copyright © 2025 Purchase Order Management System. All rights reserved.
