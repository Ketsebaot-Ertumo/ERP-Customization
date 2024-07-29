"use client";

import { useEffect, useState } from 'react';
import { deleteEmployee, getEmployees } from '@/app/api/routes';
import Link from 'next/link';
import { redirect } from 'next/router';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function ShowAllEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
      // console.log('data:',data)
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (name) => {
    await deleteEmployee(name);
    setEmployees(employees.filter(employee => employee.name !== name));
  };

  const renderWithTime = (params) => {
    const now = moment();
    const modifiedTime = moment(params.value);
    const duration = moment.duration(now.diff(modifiedTime));
  
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
  
    if (days > 0) {
      return `${days}d`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${minutes}m`;
    }
  };

  const columns =[
    {
      field: 'employee_name',
      headerName: 'Employee Name',
      width: 150,
      editable: true
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150
    },
    {
      field: 'designation',
      headerName: 'Designation',
      width: 150,
    },
    {
      field: 'name',
      headerName: 'ID',
      width: 150,
    },
    {
      field: 'modified',
      headerName: '',
      width: 150,
      renderCell: renderWithTime
    }
  ];

  return (
    <div>
      <h1>Employees</h1>
      <Paper sx={{bgcolor:'white'}}>
                    <Box sx={{height: 400, width: '100%'}}>
                        {loading? <Loader />:(
                        <DataGrid getRowId={(row) => row.id} 
                            sx={{
                                '& .MuiTablePagination-displayedRow': {
                                color: 'black',
                            },
                            color: 'black',
                            [
                                `& .${gridClasses.row}`]:{bgcolor: 'white'},
                            }}

                            rows={posts}
                            columns={columns}
                            // checkboxSelection
                            pagination
                            pageSizeOptions={[5,10,25,50,100]}
                            slots={{ toolbar: GridToolbar }}
                            // slotProps={{ toolbar: { csvOptions ={{includeCheckboxes: true,}} } }}
                            // slotProps={{ toolbar: { printOptions ={{includeCheckboxes: true,}} } }}
                            />
                        )}
                    </Box>
                </Paper>
    </div>
  );
}
