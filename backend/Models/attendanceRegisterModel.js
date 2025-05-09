  import mongoose from 'mongoose';

  const attendanceSchema = new mongoose.Schema({
    sheet:{
      type:String,
      required:true
    },
    emp_code: {
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
    days: {
      type: Map,
      of: String,  // Each date maps to a string like "P", "A", "L" (Present, Absent, Leave, etc.)
      default: {},
    },
    total: {
      type: String,
      default: 0,
    },
    div: {
      type: String,
      default: 0,
    },
  }, { timestamps: true });

  export default mongoose.model('Attendance', attendanceSchema);
