"use client"

import { getEmployeeById, updateEmployee } from '@/app/api/routes';
import { redirect, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
// import {  } from 'next/router';
// import { getEmployeeById, updateEmployee } from '../../api';

export default function EditEmployee() {
  const { name } = useParams();
  const [form, setForm] = useState({
    id: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    date_of_joining: '',
    company: '',
    salutation: '',
    department: '',
    designation: '',
    branch: '',
    date_of_retirement: ''
  });

  useEffect(() => {
    if (name) {
      const fetchEmployee = async () => {
        const data = await getEmployeeById(name);
        setForm(data);
      };
      fetchEmployee();
    }
  }, [name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(name, form);
    redirect(`/employee/view`);
  };

  if (!form.name) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="ID" readOnly />
        <input type="text" name="first_name" value={form.first_name} onChange={handleChange} placeholder="First Name" required />
        <input type="text" name="middle_name" value={form.middle_name} onChange={handleChange} placeholder="Middle Name" />
        <input type="text" name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last Name" />
        <input type="text" name="gender" value={form.gender} onChange={handleChange} placeholder="Gender" />
        <input type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} placeholder="Date of Birth" />
        <input type="date" name="date_of_joining" value={form.date_of_joining} onChange={handleChange} placeholder="Date of Joining" />
        <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company" />
        <input type="text" name="salutation" value={form.salutation} onChange={handleChange} placeholder="Salutation" />
        <input type="text" name="department" value={form.department} onChange={handleChange} placeholder="Department" />
        <input type="text" name="designation" value={form.designation} onChange={handleChange} placeholder="Designation" />
        <input type="text" name="branch" value={form.branch} onChange={handleChange} placeholder="Branch" />
        <input type="date" name="date_of_retirement" value={form.date_of_retirement} onChange={handleChange} placeholder="Date of Retirement" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
