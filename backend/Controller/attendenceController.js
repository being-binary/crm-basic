import AttendanceModel from '../Models/attendanceRegisterModel.js'

class Attendance {

    async setValues(req, res) {
        try {
            const data = req.finaldata;

            if (!data || !Array.isArray(data)) {
                return res.status(400).json({ message: 'Invalid or missing attendance data' });
            }

            // Optional: Clear existing records for fresh import (use with caution!)
            // await AttendanceModel.deleteMany({});

            // Save each record
            const cleanedData = data.filter(record => record.empId);
            const result = await AttendanceModel.insertMany(cleanedData);

            return res.status(200).json({
                message: 'Attendance data saved successfully',
                count: result.length
            });

        } catch (error) {
            console.error('Error saving attendance data:', error);
            return res.status(500).json({ message: 'Internal Server Error' , err:error });
        }
    }

    async getData(req, res) {
        try {
            // Optional: Add filtering by query params if needed
            // const { empId, department } = req.query;
            const limit = parseInt(req.query.limit) || 10; // Default to 10 if not provided

            const records = await AttendanceModel.find().limit(limit);
    
            if (!records || records.length === 0) {
                return res.status(404).json({ message: 'No attendance records found' });
            }
    
            return res.status(200).json({
                message: 'Attendance data retrieved successfully',
                data: records
            });
        } catch (error) {
            console.error('Error fetching attendance data:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}


export default new Attendance()