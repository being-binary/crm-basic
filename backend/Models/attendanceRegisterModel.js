import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: true,
  },
  empName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  unitName: {
    type: String,
    required: true,
  },
  costCode: {
    type: String,
  },
  attendance: {
    type: Map,
    of: String,  // Each date maps to a string like "P", "A", "L" (Present, Absent, Leave, etc.)
    default: {},
  },
  totalDays: {
    type: String,
    default : 0,
  },
  totalWorkingDays: {
    type: String,
    default : 0,
  },
  lateCome: {
    type: String,
    default : 0,
  },
  paidDays: {
    type: String,
    default : 0,
  },
  carryForward: {
    type: String,
  },
  div: {
    type: String,
    default : 0,
  },
}, { timestamps: true });

export default mongoose.model('Attendance', attendanceSchema);
