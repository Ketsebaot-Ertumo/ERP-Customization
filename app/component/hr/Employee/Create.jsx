"use client"

import { useState } from 'react';
import { createEmployee } from '../../api';
import { redirect } from 'next/navigation';

export default function CreateEmployee() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(form);
    redirect('/employee/view');
  };

  return (
    <div>
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" value={form.id} onChange={handleChange} placeholder="ID" required />
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
