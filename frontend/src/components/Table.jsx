import React, { useEffect, useState } from 'react';

export default function Table({data}) {
  
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-[800px] w-full border-collapse border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Emp ID</th>
            <th className="border px-4 py-2">Sheet</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Department</th>
            <th className="border px-4 py-2">Unit Name</th>
            <th className="border px-4 py-2">Cost Code</th>
            <th className="border px-4 py-2">Total (WD/OT/COMM)</th>
            <th className="border px-4 py-2">Division</th>
            <th className="border px-4 py-2">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{emp.emp_code}</td>
              <td className="border px-4 py-2">{emp.sheet}</td>
              <td className="border px-4 py-2">{emp.empName}</td>
              <td className="border px-4 py-2">{emp.department}</td>
              <td className="border px-4 py-2">{emp.unitName}</td>
              <td className="border px-4 py-2">{emp.costCode}</td>
              <td className="border px-4 py-2">{emp.total}</td>
              <td className="border px-4 py-2">{emp.div}</td>
              <td className="border px-4 py-2 whitespace-nowrap overflow-x-auto max-w-[300px] text-xs">
                {emp.days &&
                  Object.entries(emp.days).map(([date, status]) => (
                    <span
                      key={date}
                      className="inline-block px-2 py-1 m-1 rounded bg-gray-200"
                    >
                      {date}: {status}
                    </span>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
