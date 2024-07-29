"use client";

import React, { useEffect, useState } from 'react';
import { getActiveEmployees, getEmployees } from '../api/routes';
import { Bar, Line } from 'react-chartjs-2';
import CountUp from 'react-countup';
import 'chart.js/auto';

const Dashboard = () => {
    const [totalEmployees, setTotalEmployees] = useState(0);
    const [activeEmployees, setActiveEmployees] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const totalEmpData = await getEmployees();
                const activeEmpData = await getActiveEmployees();
                setTotalEmployees(totalEmpData.length);
                setActiveEmployees(activeEmpData.length);
            } catch (error) {
                console.error('Error fetching employees data:', error);
            }
        };

        fetchData();
    }, []);

    const lineData = {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
            {
                label: 'Employee Growth',
                data: [65, 59, 80, 81],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const barData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold">Total Employees</h3>
                        <p className="text-2xl">
                            <CountUp end={totalEmployees} duration={2.75} />+
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold">Active Employees</h3>
                        <p className="text-2xl">
                            <CountUp end={activeEmployees} duration={2.75} />+
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold">Total Employees</h3>
                        <p className="text-2xl">
                            <CountUp end={totalEmployees} duration={2.75} />+
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold">Active Employees</h3>
                        <p className="text-2xl">
                            <CountUp end={activeEmployees} duration={2.75} />+
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex mt-8 -mx-4">
                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Employee Growth</h3>
                        <Line data={lineData} />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Department Distribution</h3>
                        <Bar data={barData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;







// "use client";

// import React, { useEffect, useState } from 'react';
// import { getActiveEmployees, getEmployees } from '../api/routes';
// import { Bar, Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// const Dashboard = () => {
//     const [totalEmployees, setTotalEmployees] = useState(0);
//     const [activeEmployees, setActiveEmployees] = useState(0);

//     useEffect(() => {
//         const fetchData = async () => {
//             setTotalEmployees(await getEmployees());
//             setActiveEmployees(await getActiveEmployees());
//         };

//         fetchData();
//     }, []);

//     const lineData = {
//         labels: ['January', 'February', 'March', 'April'],
//         datasets: [
//             {
//                 label: 'Employee Growth',
//                 data: [65, 59, 80, 81],
//                 fill: false,
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1
//             }
//         ]
//     };

//     const barData = {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [
//             {
//                 label: '# of Votes',
//                 data: [12, 19, 3, 5, 2, 3],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }
//         ]
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <div className="flex flex-wrap -mx-4">
//                 <div className="w-full md:w-1/2 lg:w-1/5 p-4">
//                     <div className="bg-white shadow rounded-lg p-6 text-center">
//                         <h3 className="text-xl font-semibold">Total Employee</h3>
//                         <p className="text-2xl">{totalEmployees}</p>
//                     </div>
//                 </div>
//                 <div className="w-full md:w-1/2 lg:w-1/5 p-4">
//                     <div className="bg-white shadow rounded-lg p-6 text-center">
//                         <h3 className="text-xl font-semibold">Active Employee</h3>
//                         <p className="text-2xl">{activeEmployees}</p>
//                     </div>
//                 </div>
//                 <div className="w-full md:w-1/2 lg:w-1/5 p-4">
//                     <div className="bg-white shadow rounded-lg p-6 text-center">
//                         <h3 className="text-xl font-semibold">Total Employee</h3>
//                         <p className="text-2xl">{totalEmployees}</p>
//                     </div>
//                 </div>
//                 <div className="w-full md:w-1/2 lg:w-1/5 p-4">
//                     <div className="bg-white shadow rounded-lg p-6 text-center">
//                         <h3 className="text-xl font-semibold">Active Employee</h3>
//                         <p className="text-2xl">{activeEmployees}</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-wrap mt-8 -mx-4">
//                 <div className="w-full md:w-1/2 p-4">
//                     <div className="bg-white shadow rounded-lg p-6">
//                         <h3 className="text-xl font-semibold mb-4">Employee Growth</h3>
//                         <Line data={lineData} />
//                     </div>
//                 </div>
//                 <div className="w-full md:w-1/2 p-4">
//                     <div className="bg-white shadow rounded-lg p-6">
//                         <h3 className="text-xl font-semibold mb-4">Department Distribution</h3>
//                         <Bar data={barData} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
