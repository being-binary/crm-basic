import mongoose from 'mongoose';

const SalarySchema = new mongoose.Schema({
  div: Number,
  emp_code: Number,
  name: String,
  contractor: String,
  costCenter: String,
  nos: Number,
  workCentre: String,
  ibasRate: Number,
  salaryDays: Number,
  companyDays: Number,
  otHours: Number,
  totalEarnAmt: Number,
  totalOtAmt: Number,
  pfAmt: Number,
  admPf: Number,
  edli: Number,
  esi: Number,
  tenRsPerCom: Number,
  total: Number,
  pfcAmt: Number,
  epsAmt: Number,
  esicDed: Number,
  messDed: Number,
  club: Number,
  lwfDed: Number,
  totalDed: Number,
  netPay: Number,
  tpa: Number,
  salary: Number,
  finalDiv: Number,
  clusterDivisions: [String],  // like ["13", "17", "19", "20"]
  clusterOtherDivs: [String],  // like ["15", "16", "18"]
  supervisor: String           // like "GUPTA"
}, { timestamps: true });

const Salary = mongoose.model('Salary', SalarySchema);

export default Salary;
