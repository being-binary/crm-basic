import React, { useState } from 'react'
import { toasterror, toastsuccess } from '../components/Toast';
import Table from '../components/Table';

const Attendence = () => {
  const [data, setData] = useState([])
  const [files, setFiles] = useState([]);
  console.log(files)
  const handleFileChange = (e) => {
    setFiles([...e.target.files]); // use e.target.files to access file list
  };

  const fetchData = async () => {
    try {
      const formData = new FormData();
      console.log(Array.isArray(files))
      files.forEach((file, index) => formData.append(`file`, file));
      const response = await fetch(`${import.meta.env.VITE_PRODUCTION == 'true' ? import.meta.env.VITE_URL_LIVE : import.meta.env.VITE_URL_LOCAL}/attendance/getdata`, {
        method: 'GET',
        credentials: 'include',
      })
      const result = await response.json();
      if (response.ok) {
        console.log(result.message, result);
        toastsuccess(result.message)
        setData(result.data)
        // Optionally reset form or show success message
      } else {
        console.error(result.message, result);
        toasterror(result.message)
      }
    } catch (error) {
      console.log(error)
      toasterror(error.message)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData();
      console.log(Array.isArray(files))
      files.forEach((file, index) => formData.append(`file`, file));
      const response = await fetch(`${import.meta.env.VITE_PRODUCTION == 'true' ? import.meta.env.VITE_URL_LIVE : import.meta.env.VITE_URL_LOCAL}/fileUpload/file`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      })
      const result = await response.json();
      if (response.ok) {
        console.log(response.message, result);
        toastsuccess(response.message)
        fetchData()
        // Optionally reset form or show success message
      } else {
        console.error(response.message, result);
        toasterror(response.message)
      }
    } catch (error) {
      console.log(error)
      toasterror(error.message)
    }
  }

  return (
    <div className='w-full bg-gray-200'>
      <div className='p-3'>
        <div className="section-title">Employee Information</div>
        <form className='form-grid-attendence' onSubmit={handleSubmit}>
          <label htmlFor="fileUpload">Upload File :</label>
          <label
            htmlFor="fileUpload"
            className="flex items-center justify-center gap-2 px-4 py-1 w-45 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v6m0 0l3-3m-3 3l-3-3" />
            </svg>
            {files.length > 0 && files.length > 0 ? files[0].name : 'Choose File'}
          </label>
          <input type="file" id="fileUpload" name="fileUpload" className="hidden" onChange={handleFileChange} />
          <input type="submit" value="submit" className='border border-blue-300 max-w-35 py-1 px-3 uppercase rounded-lg cursor-pointer' />
        </form>
      </div>

      {data.length > 0 && <div className='mt-3 p-3'>
        <div className="section-title">Employee Information</div>
        <div className='form-grid-table'>
          <Table data={data}/>
        </div>
      </div>}
    </div>
  )
}

export default Attendence
