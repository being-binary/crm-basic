import attendanceRegisterModel from "../Models/attendanceRegisterModel.js"
import Employee from "../Models/employeeModel.js"
class Salary {

    async Calculate(req, res) {
        const PF_RATE = 0.12;
        const ESI_RATE = 0.0325;
        const DED_10RS = 10;
        const LWF_DED = 40;
        const MESS_DED = 0
        const CLUB = 0

        try {
            const allEmployees = await Employee.find({});
            const allAttendance = await attendanceRegisterModel.find({});

            // Build a map of attendance by emp_code
            const attendanceMap = new Map();

            allAttendance.forEach(record => {
                const empCode = record.emp_code;

                let wd = 0;
                let ot = 0;
                let commission = 0;

                if (record.sheet === 'WD') wd = record.total;
                if (record.sheet === 'OT') ot = record.total;
                if (record.sheet === 'COMMISSION') commission = record.total;
                const existing = attendanceMap.get(empCode) || { wd: 0, ot: 0, commission: 0 };

                // Sum up if multiple entries exist for the same empCode
                attendanceMap.set(empCode, {
                    wd: +(existing.wd + wd),
                    ot: +(existing.ot + ot),
                    commission: +(existing.commission + commission)
                });
            });

            const result = allEmployees.map(emp => {
                const empCode = emp.emp_code;
                const salaryRate = +(emp.salary) || 0;

                const attendance = attendanceMap.get(empCode) || {};
                const wd = +(attendance.wd) || 0;
                const ot = +(attendance.ot) || 0;
                const commission = +(attendance.commission) || 0;

                const totalEarnings = Math.round(salaryRate * wd);
                const totalOTAmt = Math.round(+(emp.salary) / 8 * ot);
                const edliBase = totalEarnings > 15000 ? 15000 : totalEarnings;
                const EDLI = Math.round(edliBase * 0.005);
                const pfAmt = Math.round(+(totalEarnings) * PF_RATE);
                const esi = parseFloat(totalEarnings+totalOTAmt)*ESI_RATE;
                const ADM_PF = totalEarnings*0.005;
                const totalComission = +(commission * DED_10RS)
                const netPay = +(totalEarnings+totalOTAmt+EDLI+pfAmt+esi+ADM_PF+totalComission);
                const epsAmt =  Math.round(totalEarnings * 0.0833)
                const pfcAmt =  Math.round(pfAmt-epsAmt)
                const ESIC_DED =  Math.ceil((totalEarnings+totalOTAmt) * 0.0075)
                const TOTAL_DED = pfcAmt + epsAmt + ESIC_DED + MESS_DED + CLUB + LWF_DED 
                const TPA = totalOTAmt
                const final_netPay =( totalEarnings + totalOTAmt ) - TOTAL_DED
                const salary = final_netPay - TPA
                return {
                    emp_code: empCode,
                    empName: emp.name,
                    salaryRate,
                    wd,
                    ot,
                    commission,
                    totalEarnings,
                    totalOTAmt,
                    pfAmt,
                    admPf: ADM_PF,
                    edli: EDLI,
                    esi,
                    esicDed: ESIC_DED,
                    lwfDed: LWF_DED,
                    totalComission,
                    netPay,
                    epsAmt,
                    pfcAmt,
                    ESIC_DED,
                    MESS_DED,
                    CLUB,
                    LWF_DED,
                    TOTAL_DED,
                    final_netPay,
                    TPA,
                    salary
                };
            });
            console.log(result)

            //   res.status(200).json({ salaryData: result });

        } catch (error) {
            console.error("Error in Calculate:", error);
            //   res.status(500).json({ message: error.message });
        }
    }

    async SalaryExcelUpload(req, res){
        
    }
}

export default new Salary()