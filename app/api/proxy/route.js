import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const apiUrl = `${process.env.NEXT_PUBLIC_ERP_NEXT_EMPLOYEE_URL}${path}`;
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Authorization': `token ${process.env.NEXT_PUBLIC_ERP_NEXT_API_KEY}:${process.env.NEXT_PUBLIC_ERP_NEXT_API_SECRET}`,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.response ? error.response.status : 500 }
    );
  }
}


// Export other HTTP methods (PUT, DELETE) similarly if needed






// import { NextResponse } from 'next/server';
// import axios from 'axios';

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const path = searchParams.get('path');
  
//   const apiUrl = `${process.env.NEXT_PUBLIC_ERP_NEXT_EMPLOYEE_URL}${path}`;

//   try {
//     const response = await axios.get(apiUrl, {
//       headers: {
//         'Authorization': `token ${process.env.NEXT_PUBLIC_ERP_NEXT_API_KEY}:${process.env.NEXT_PUBLIC_ERP_NEXT_API_SECRET}`,
//       },
//     });
//     return NextResponse.json(response.data);
//   } catch (error) {
//     return NextResponse.json(
//       { error: error.message },
//       { status: error.response ? error.response.status : 500 }
//     );
//   }
// }
