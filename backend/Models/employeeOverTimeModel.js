import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Daily OT schema (for individual dates like 26 to 25)
const dailyOTSchema = new Schema({
  date: { type: String, required: true }, // e.g., '26', '27', ..., '25'
  hours: { type: Number, default: 0 }
});

// Main Employee OT schema
const employeeOTSchema = new Schema({
  srNo: Number,
  empId: { type: String, required: true },
  empName: { type: String, required: true },
  department: String,
  unitName: String,
  costCode: String,
  division: String,

  dailyOTs: [dailyOTSchema], // OT per day from 26th–25th

  arrearOTMar25: { type: Number, default: 0 },
  paidOTApr25: { type: Number, default: 0 },
  gatePass: { type: String, default: '' },

  createdAt: { type: Date, default: Date.now }
});

// Virtuals

employeeOTSchema.virtual('totalOT').get(function () {
  return this.dailyOTs.reduce((sum, record) => sum + record.hours, 0);
});

employeeOTSchema.virtual('computedTotalOT').get(function () {
  return this.totalOT + this.arrearOTMar25;
});

employeeOTSchema.virtual('carryForwardForMay25').get(function () {
  return this.computedTotalOT - this.paidOTApr25;
});

// Enable virtuals in JSON output
employeeOTSchema.set('toJSON', { virtuals: true });
employeeOTSchema.set('toObject', { virtuals: true });

// Export model
const EmployeeOT = model('EmployeeOT', employeeOTSchema);
export default EmployeeOT;
