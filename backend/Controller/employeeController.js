import Employee from "../Models/employeeModel.js"


class EmployeeController {

    async setEmployeeData(req, res) {
        console.log('hello')
        try {
            if (!req.body.data) {
                return res.status(400).json({ error: 'Missing employee data in request body' });
            }
            const { data } = req.body
            const { filesData } = req
            const parsedata = JSON.parse(data)
            // console.log(data)
            // console.log(filesData)
            // // Log both data and filesData for debugging
            // console.log('Employee Data:', parsedata);
            // console.log('Files Data:', filesData);
            
            if (filesData && Array.isArray(filesData) && filesData.length > 0) {
                parsedata.documents = [...filesData];  // Attach filesData to employee data
            }
            // Create the employee document in the database
            const ack = await Employee.create(parsedata);
            res.status(200).json({ msg: ack })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error: error.message })
        }
    }

    async getAllEmployee(req,res){
        try {
            const Allemp = await Employee.find({}).sort({ createdAt: -1 }).lean();
            
            if(!Allemp){
                res.status(400).json({message:"Some Internal Server Error"})
            }

            res.status(200).json({Allemp});
        } catch (error) {
            console.log("Error",error.message)
            res.status(500).json({message:"Internal Server Error"});
        }
    }
}


export default new EmployeeController()