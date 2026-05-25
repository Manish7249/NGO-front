import React from 'react';

const CampaignDonationInvoice = ({ data }) => {
  // Mapping data based on the image fields
  const invoiceData = {
    invoiceNo: data.txnId || "A12345",
    invoiceDate: data.dateTime || "10-02-2026",
    donorName: data.donorName || "Akay Kohli",
    location: data.location || "Bangalore, Karnataka, India",
    campaignName: data.campaign || "Education for every child",
    ngoName: data.ngo || "Shiksha Foundation",
    paymentMethod: data.paymentMethod || "UPI (Google Pay)",
    amount: data.amount || "10,000",
  };

  return (
    <div
      style={{
        width: '794px', // A4 Width
        minHeight: '1000px',
        background: '#fff',
        padding: '60px 50px',
        fontFamily: "'Poppins', Arial, sans-serif",
        color: '#444',
        boxSizing: 'border-box',
      }}
    >
      {/* Title Section */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', color: '#333', margin: '0 0 10px 0' }}>
          Donation <br /> Invoice
        </h1>
        <p style={{ margin: '5px 0', fontSize: '18px', fontWeight: '600', color: '#666' }}>
          Invoice No. : {invoiceData.invoiceNo}
        </p>
        <p style={{ margin: '5px 0', fontSize: '18px', fontWeight: '600', color: '#666' }}>
          Invoice Date: {invoiceData.invoiceDate}
        </p>
      </div>

      {/* Bill To Section */}
      <div style={{ marginBottom: '40px', lineHeight: '1.8' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#333' }}>Bill To:</h3>
        <p style={{ margin: 0, fontSize: '17px', fontWeight: '600' }}>{invoiceData.donorName}</p>
        <p style={{ margin: 0, fontSize: '17px', fontWeight: '600' }}>{invoiceData.location}</p>
        <p style={{ margin: 0, fontSize: '17px', fontWeight: '600' }}>
          Campaign Name : {invoiceData.campaignName}
        </p>
        <p style={{ margin: 0, fontSize: '17px', fontWeight: '600' }}>
          NGO Name : {invoiceData.ngoName}
        </p>
        <p style={{ margin: 0, fontSize: '17px', fontWeight: '600' }}>
          Payment Method: {invoiceData.paymentMethod}
        </p>
      </div>

      {/* Table Section with Shadow */}
      <div
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          marginTop: '50px',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
              <th style={headerStyle}>Description</th>
              <th style={headerStyle}>Details</th>
              <th style={{ ...headerStyle, textAlign: 'right' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>Campaign Donation</td>
              <td style={detailCellStyle}>Contribution for the academic and well-being of the children</td>
              <td style={amountCellStyle}>Rs. {invoiceData.amount}</td>
            </tr>
            <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
              <td style={cellStyle}>Platform Fee</td>
              <td style={detailCellStyle}>Transaction Processing fee</td>
              <td style={amountCellStyle}>Rs. 0.00</td>
            </tr>
            {/* Sub-Total Row */}
            <tr style={{ backgroundColor: '#fff' }}>
              <td colSpan="2" style={{ ...cellStyle, fontWeight: '700', fontSize: '18px' }}>
                Sub-Total
              </td>
              <td style={{ ...amountCellStyle, fontWeight: '700', fontSize: '18px' }}>
                Rs. {invoiceData.amount}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Message */}
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <p
          style={{
            color: '#24b037',
            fontSize: '20px',
            fontWeight: '600',
          }}
        >
          “Thank You for making the difference”
        </p>
        <div style={{ width: '6px', height: '6px', background: 'red', borderRadius: '50%', margin: '10px auto' }}></div>
      </div>
    </div>
  );
};

// Internal Styles for cleaner code
const headerStyle = {
  padding: '20px',
  textAlign: 'left',
  color: '#24b037',
  fontSize: '18px',
  fontWeight: '700',
};

const cellStyle = {
  padding: '25px 20px',
  fontSize: '16px',
  fontWeight: '600',
  color: '#555',
};

const detailCellStyle = {
  padding: '25px 20px',
  fontSize: '15px',
  fontWeight: '600',
  color: '#777',
  width: '40%',
};

const amountCellStyle = {
  padding: '25px 20px',
  textAlign: 'right',
  fontSize: '16px',
  fontWeight: '700',
  color: '#555',
};

export default CampaignDonationInvoice;
