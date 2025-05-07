import React from 'react';
import { BiMinusCircle } from "react-icons/bi";
const ChildInfoSection = ({ index, handleRemove }) => {
  return (
    <div className="form-section">
      <span className='relative'>
        <h3>Child {index + 1} Details</h3>
        <BiMinusCircle className='absolute top-2 right-8 text-xl hover:text-red-500' onClick={()=>handleRemove(index)} />
      </span>

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