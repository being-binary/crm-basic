import React from "react";

const SalaryTable = ({ salaryData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Emp Code</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Contractor</th>
            <th className="p-2 border">Cost Center</th>
            <th className="p-2 border">Work Centre</th>
            <th className="p-2 border">IBAS Rate</th>
            <th className="p-2 border">Salary Days</th>
            <th className="p-2 border">Company Days</th>
            <th className="p-2 border">OT Hours</th>
            <th className="p-2 border">Salary</th>
            <th className="p-2 border">OT Amount</th>
            <th className="p-2 border">PF</th>
            <th className="p-2 border">Admin PF</th>
            <th className="p-2 border">EDLI</th>
            <th className="p-2 border">ESI</th>
            <th className="p-2 border">ESIC Ded.</th>
            <th className="p-2 border">PF Company</th>
            <th className="p-2 border">EPS</th>
            <th className="p-2 border">Mess</th>
            <th className="p-2 border">Club</th>
            <th className="p-2 border">LWF</th>
            <th className="p-2 border">Total Earned</th>
            <th className="p-2 border">Total Deduction</th>
            <th className="p-2 border font-semibold text-green-700">Net Pay</th>
          </tr>
        </thead>
        <tbody>
          {salaryData.map((item, index) => (
            <tr key={item._id || index} className="hover:bg-gray-50">
              <td className="p-2 border">{item.emp_code}</td>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">{item.contractor}</td>
              <td className="p-2 border">{item.costCenter}</td>
              <td className="p-2 border">{item.workCentre}</td>
              <td className="p-2 border">{item.ibasRate}</td>
              <td className="p-2 border">{item.salaryDays}</td>
              <td className="p-2 border">{item.companyDays}</td>
              <td className="p-2 border">{item.otHours}</td>
              <td className="p-2 border">{item.salary}</td>
              <td className="p-2 border">{item.totalOtAmt}</td>
              <td className="p-2 border">{item.pfAmt}</td>
              <td className="p-2 border">{item.admPf.toFixed(2)}</td>
              <td className="p-2 border">{item.edli}</td>
              <td className="p-2 border">{item.esi}</td>
              <td className="p-2 border">{item.esicDed}</td>
              <td className="p-2 border">{item.pfcAmt}</td>
              <td className="p-2 border">{item.epsAmt}</td>
              <td className="p-2 border">{item.messDed}</td>
              <td className="p-2 border">{item.club}</td>
              <td className="p-2 border">{item.lwfDed}</td>
              <td className="p-2 border">{item.totalEarnAmt}</td>
              <td className="p-2 border">{item.totalDed}</td>
              <td className="p-2 border font-semibold text-green-700">{item.netPay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalaryTable;
