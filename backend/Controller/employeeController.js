import Employee from "../Models/employeeModel.js"


class EmployeeController{

    async setEmployeeData(req, res) {
        console.log('hello')
        try{    
            const { data } = req.body
            console.log(data)
            const ack = await Employee.create({...data})
            res.status(200).json({msg:ack})
        }catch(error){
            console.log(error.message)
            res.status(500).json({error:error.message})
        }
    }
}


export default new EmployeeController()