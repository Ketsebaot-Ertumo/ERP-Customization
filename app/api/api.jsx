"use client";
import axios from 'axios';

// const API = axios.create({
//     baseURL: 'https://cors-anywhere.herokuapp.com/' + process.env.NEXT_PUBLIC_ERP_NEXT_EMPLOYEE_URL, // Use CORS Anywhere
//     headers: {
//         'Authorization': `token ${process.env.NEXT_PUBLIC_ERP_NEXT_API_KEY}:${process.env.NEXT_PUBLIC_ERP_NEXT_API_SECRET}`
//     }
// });

const API = axios.create({
    baseURL: '/api/proxy?path=', // Use the proxy endpoint
});

export default API;









// "use client";
// import axios from 'axios';

// const API = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_ERP_NEXT_EMPLOYEE_URL, // Use the base URL
//     headers: {
//         'Authorization': `token ${process.env.NEXT_PUBLIC_ERP_NEXT_API_KEY}:${process.env.NEXT_PUBLIC_ERP_NEXT_API_SECRET}`
//     }
// });

// export default API;
