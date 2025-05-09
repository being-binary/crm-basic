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
  mname: { type: String ,default: ''},
  lname: { type: String , required:true},
  dob: { type: Date, required:true},
  father_fname: { type: String , required:true},
  father_mname: { type: String,default: '' },
  father_lname: { type: String , required:true},
  emp_code: { type: String, required: true , unique: true },
  street: { type: String , required:true},
  address_one: { type: String , required:true},
  city: { type: String , required:true},
  phone: { type: String , unique:true ,required:true},
  state: { type: String ,required:true },
  country: { type: String  ,required:true},
  date_of_joining: { type: Date , required:true},
  reference: { type: String },
  aadhaar: { type: String , unique:true ,required:true},
  pan: { type: String , required:true},
  alt_mobile: { type: String, unique:true , required:true},
  nominee: { type: String , required:true},
  nominee_relation: { type: String , required:true},
  nominee_age: { type: Number },
  nominee_aadhaar: { type: String , required:true},
  bank: { type: String },
  account: { type: String ,unique:true},
  ifsc: { type: String },
  uan: { type: String },
  esic: { type: String },
  plant: { type: String },
  contractor_code: { type: String },
  salary: { type: String,required:true},
  bank_branch:{type:String,required:true},
  children: [childSchema],
  documents: [
    {
      fileName: String,
      path: String,
      mimeType: String,
      size: Number
    }
  ]
}, {
  timestamps: true
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
