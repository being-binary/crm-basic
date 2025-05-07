import React from 'react';

const ChildInfoSection = ({ index }) => {
  return (
    <div className="form-section">
      <h3>Child {index + 1} Details</h3>
      <div className="form-group">
        <label htmlFor={`child${index}_name`}>Name</label>
        <input type="text" id={`child${index}_name`} name={`child${index}_name`} />
      </div>
      <div className="form-group">
        <label htmlFor={`child${index}_age`}>Age</label>
        <input type="number" id={`child${index}_age`} name={`child${index}_age`} />
      </div>
      <div className="form-group">
        <label htmlFor={`child${index}_relation`}>Relation</label>
        <input type="text" id={`child${index}_relation`} name={`child${index}_relation`} />
      </div>
      <div className="form-group">
        <label htmlFor={`child${index}_aadhaar`}>Aadhaar</label>
        <input type="text" id={`child${index}_aadhaar`} name={`child${index}_aadhaar`} />
      </div>
    </div>
  );
};

export default ChildInfoSection;