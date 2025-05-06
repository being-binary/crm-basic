import React from 'react'

const NewEmployee = () => {
  return (
    <div className='w-full h-max bg-gray-200'>
      <h1 className='capitalize text-4xl p-4 font-semibold'>add new employee</h1>
      <div className='px-4'>
        <div className="section-title">Employee Information</div>
        <div className="form-grid">
          <div>
            <label>Employee Owner</label>
            <input type="text" defaultValue="Smith, Miley" />
            <label>Middle Name</label>
            <input type="text" />
            <label>Birth Date</label>
            <input type="date" />
            <label>Street</label>
            <input type="text" />
            <label>Address One</label>
            <textarea defaultValue={""} />
            <label>City</label>
            <input type="text" />
            <label>Phone</label>
            <input type="text" />
            <label>E-Mail</label>
            <input type="email" />
            <label>Background Check</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>First Name</label>
            <select><option>-- None --</option></select>
            <label>Last Name</label>
            <input type="text" />
            <label>Employee Number</label>
            <input type="text" defaultValue="EN7010008189" />
            <label>Address Two</label>
            <textarea defaultValue={""} />
            <label>State</label>
            <input type="text" />
            <label>Country</label>
            <select><option>-- None --</option></select>
            <label>Cell</label>
            <input type="text" />
            <label>SSN/SIN Verified</label>
            <input type="checkbox" />
          </div>
        </div>

        <div className='mt-2'>
          <div className="section-title">Job Information</div>
          <div className="form-grid">
            <div>
              <label>Title</label>
              <input type="text" />
              <label>Division</label>
              <input type="text" />
              <label>Start Date</label>
              <input type="date" />
            </div>
            <div>
              <label>Department</label>
              <input type="text" />
              <label>Annual Salary</label>
              <input type="number" />
              <label>End Date</label>
              <input type="date" />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default NewEmployee
