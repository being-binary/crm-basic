import React, { useState } from 'react';
import ChildInfoSection from './ChildInfoSection';
import { useForm, useFieldArray } from 'react-hook-form';
import { toasterror, toastsuccess } from './Toast';

const NewEmployee = () => {
  console.log(import.meta.env.VITE_PRODUCTION == 'true' ? import.meta.env.VITE_URL_LIVE : import.meta.env.VITE_URL_LOCAL)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      children: [{}],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'children',
  });

  const onSubmit = async (data) => {
    console.log('Structured Data:', data);
    try {
      const response = await fetch(`${import.meta.env == 'true' ? import.meta.env.VITE_URL_LIVE : import.meta.env.VITE_URL_LOCAL}/employee/setdata`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ data }),
      })
      const result = await response.json();
      if (response.ok) {
        console.log('Employee added successfully:', result);
        toastsuccess("Employee added successfully")
        // Optionally reset form or show success message
      } else {
        console.error('Employee added successfully:', result);
        toasterror('Employee added successfully')
      }
    } catch (error) {
      console.error('Error:', error);
      toasterror('Something Went Wrong')
    }
  };

  return (
    <form className='w-full h-max bg-gray-200 pb-1' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='capitalize text-4xl p-4 font-semibold'>add new employee</h1>
      <div className='px-4'>
        <div className="section-title">Employee Information</div>
        <div className="form-grid">
          <div className="flex flex-col gap-2">
            <label htmlFor="div">DIV</label>
            <input id="div" {...register('div', { required: 'DIV is required' })} />
            {errors.div && <p className="text-red-500">{errors.div.message}</p>}

            <label htmlFor="fname">First Name</label>
            <input id="fname" {...register('fname', { required: 'First name is required' })} />
            {errors.fname && <p className="text-red-500">{errors.fname.message}</p>}

            <label htmlFor="mname">Second Name</label>
            <input id="mname" {...register('mname')} />

            <label htmlFor="lname">Last Name</label>
            <input id="lname" {...register('lname')} />

            <label htmlFor="dob">Birth Date</label>
            <input type="date" id="dob" {...register('dob', { required: 'Birth date is required' })} />
            {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}

            <label htmlFor="father_fname">Father First Name</label>
            <input id="father_fname" {...register('father_fname')} />

            <label htmlFor="father_mname">Father Second Name</label>
            <input id="father_mname" {...register('father_mname')} />

            <label htmlFor="father_lname">Father Last Name</label>
            <input id="father_lname" {...register('father_lname')} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="emp_code">Employee Code</label>
            <input placeholder='ex.. 40059850' type="number" id="emp_code" {...register('emp_code', { required: 'Employee code is required' })} />
            {errors.emp_code && <p className="text-red-500">{errors.emp_code.message}</p>}

            <label htmlFor="street">Street</label>
            <input id="street" {...register('street')} />

            <label htmlFor="address_one">Address One</label>
            <textarea id="address_one" {...register('address_one')} />

            <label htmlFor="city">City</label>
            <input id="city" {...register('city')} />

            <label htmlFor="phone">Phone</label>
            <input id="phone" {...register('phone')} />

            <label htmlFor="state">State</label>
            <input id="state" {...register('state')} />

            <label htmlFor="country">Country</label>
            <select id="country" {...register('country')}>
              <option value="">-- None --</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>

            <label htmlFor="date_of_joining">Date of Joining</label>
            <input type="date" id="date_of_joining" {...register('date_of_joining')} />
          </div>
        </div>

        <div className="mt-6">
          <div className="section-title">Job Information</div>
          <div className="form-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Personal Details</h3>
              <label htmlFor="reference">Reference</label>
              <input id="reference" {...register('reference')} />
              <label htmlFor="aadhaar">Aadhaar No</label>
              <input id="aadhaar" {...register('aadhaar')} />
              <label htmlFor="pan">PAN No</label>
              <input id="pan" {...register('pan')} />
              <label htmlFor="alt_mobile">Alternate Mobile</label>
              <input id="alt_mobile" {...register('alt_mobile')} />
            </div>

            <div>
              <h3 className="font-semibold mb-2">Nominee Details</h3>
              <label htmlFor="nominee">Nominee Name</label>
              <input id="nominee" {...register('nominee')} />
              <label htmlFor="nominee_relation">Relation</label>
              <input id="nominee_relation" {...register('nominee_relation')} />
              <label htmlFor="nominee_age">Nominee Age</label>
              <input type="number" id="nominee_age" {...register('nominee_age')} />
              <label htmlFor="nominee_aadhaar">Nominee Aadhaar</label>
              <input id="nominee_aadhaar" {...register('nominee_aadhaar')} />
            </div>

            <div>
              <h3 className="font-semibold mb-2">Bank Details</h3>
              <label htmlFor="bank">Bank</label>
              <input id="bank" {...register('bank')} />
              <label htmlFor="account">Account No</label>
              <input id="account" {...register('account')} />
              <label htmlFor="ifsc">IFSC Code</label>
              <input id="ifsc" {...register('ifsc')} />
            </div>

            <div>
              <h3 className="font-semibold mb-2">Work Details</h3>
              <label htmlFor="uan">UAN</label>
              <input id="uan" {...register('uan')} />
              <label htmlFor="esic">ESIC</label>
              <input id="esic" {...register('esic')} />
              <label htmlFor="plant">Plant</label>
              <input id="plant" {...register('plant')} />
              <label htmlFor="contractor_code">Contractor Code</label>
              <input id="contractor_code" {...register('contractor_code')} />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="section-title">Family Information</h1>
          <div className='form-grid'>
            {fields.map((item, index) => (
              <ChildInfoSection key={item.id} index={index} register={register} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => append({})}
            className="mt-2 px-4 py-2 hover:bg-blue-300 hover:text-white rounded border border-blue-400  bg-white"
          >
            + Add Child
          </button>

        </div>
        <input
          type="submit"
          value="submit"
          className='px-3 py-2 bg-blue-600 my-3 rounded-xl uppercase font-semibold text-white cursor-pointer block max-w-25 ml-auto '
        />
      </div>
    </form>
  );
};

export default NewEmployee;
