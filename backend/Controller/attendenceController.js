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
            return res.status(500).json({ message: 'Internal Server Error', err: error });
        }
    }

    async getData(req, res) {
        try {
            const limit = parseInt(req.query.limit) || 10;
            const page = parseInt(req.query.page) || 1;

            const skip = (page - 1) * limit;

            const records = await AttendanceModel.find().skip(skip).limit(limit);
            const total = await AttendanceModel.countDocuments();

            return res.status(200).json({
                message: 'Paginated attendance data',
                data: records,
                total,
                page,
                totalPages: Math.ceil(total / limit)
            });
        } catch (error) {
            console.error('Error fetching paginated data:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}


export default new Attendance()