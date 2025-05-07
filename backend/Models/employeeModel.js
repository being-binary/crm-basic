import mongoose from 'mongoose';

const childSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  relation: { type: String },
  aadhaar: { type: String }
}, { _id: false });

const employeeSchema = new mongoose.Schema({
  div: { type: String, required: true },
  fname: { type: String, required: true },
  mname: { type: String },
  lname: { type: String },
  dob: { type: Date },
  father_fname: { type: String },
  father_mname: { type: String },
  father_lname: { type: String },
  emp_code: { type: String, required: true },
  street: { type: String },
  address_one: { type: String },
  city: { type: String },
  phone: { type: String },
  state: { type: String },
  country: { type: String },
  date_of_joining: { type: Date },
  reference: { type: String },
  aadhaar: { type: String },
  pan: { type: String },
  alt_mobile: { type: String },
  nominee: { type: String },
  nominee_relation: { type: String },
  nominee_age: { type: Number },
  nominee_aadhaar: { type: String },
  bank: { type: String },
  account: { type: String },
  ifsc: { type: String },
  uan: { type: String },
  esic: { type: String },
  plant: { type: String },
  contractor_code: { type: String },
  children: [childSchema]
}, {
  timestamps: true
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
