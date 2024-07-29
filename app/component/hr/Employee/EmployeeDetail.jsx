"use client"

import { useEffect, useState } from 'react';
import { redirect } from 'next/router';
import { getEmployeeById } from '../../api';
import { useParams } from 'next/navigation';

export default function EmployeeDetail() {
  const { name } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    if (name) {
      const fetchEmployee = async () => {
        const data = await getEmployeeById(name);
        setEmployee(data);
      };
      fetchEmployee();
    }
  }, [name]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div>
      <h1>{employee.employee_name}</h1>
      <p>First Name: {employee.first_name}</p>
      <p>Middle Name: {employee.middle_name}</p>
      <p>Last Name: {employee.last_name}</p>
      <p>Gender: {employee.gender}</p>
      <p>Date of Birth: {employee.date_of_birth}</p>
      <p>Date of Joining: {employee.date_of_joining}</p>
      <p>Company: {employee.company}</p>
      <p>Department: {employee.department}</p>
      <p>Designation: {employee.designation}</p>
      <p>Branch: {employee.branch}</p>
      <p>Date of Retirement: {employee.date_of_retirement}</p>
      <Link href={`/employee/edit/${employee.name}`}>Edit</Link>
    </div>
  );
}
