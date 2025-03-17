// // import React from 'react'
// // import './Table3.css'

// // import logo from '../../../assets/logo.jpg'
// // import Menu from '../../../assets/Menu.png'
// // import arrow1 from '../../../assets/arrow1.jpg'
// // import { Link } from 'react-router-dom'

// // const Table3 = () => {
// //   return (
// //     <div className='table1Black'>
// //         <div className='dataLogoAndName'>
// //             <div className='dataLogo'><img src={logo} className='logoSize'/></div>
// //             <div className='dataName'>Ever Tea</div>
// //         </div>
// //         <Link to="/HomePage">
// //             <div className='menu'><img src={Menu} className='MenuLogo'/></div>
// //         </Link>
// //         <Link to="/DataBase">
// //         <div className='arrow1'><img src={arrow1} className='arrow1'/></div>
// //         </Link>

// //         <div className='districtTopic'>TeaModels Data</div>
// //         <div className='dataBox1'>
// //             <div className='insideBox'>
// //                 <div>
// //                     <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
// //                         <thead>
// //                             <tr>

// //                                 <th>Tea Id</th>
// //                                 <th>District</th>
// //                                 <th>price</th>
// //                                 <th>Tea Name</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             <tr>
// //                                 <td>John Doe</td>
// //                                 <td>25</td>
// //                                 <td>USA</td>
// //                                 <td>Galle</td>
// //                             </tr>
// //                             <tr>
// //                                 <td>Jane Smith</td>
// //                                 <td>30</td>
// //                                 <td>UK</td>
// //                                 <td>Srilaka</td>
// //                             </tr>
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// //     )
// // }

// // export default Table3


// // // import React, { useState } from 'react';
// // // import './Table3.css';
// // // import logo from '../../../assets/logo.jpg';
// // // import Menu from '../../../assets/Menu.png';
// // // import arrow1 from '../../../assets/arrow1.jpg';
// // // import { Link } from 'react-router-dom';

// // // const Table3 = () => {
// // //     const [tableData, setTableData] = useState([]);
// // //     const [updateStatus, setUpdateStatus] = useState(null);

// // //     // Fetch data from the backend
// // //     useEffect(() => {
// // //         const fetchData = async () => {
// // //             try {
// // //                 const response = await axios.get('http://localhost:8081/api/v1/district/get-teaModels');
// // //                 setTableData(response.data);
// // //             } catch (error) {
// // //                 console.error('Error fetching data:', error);
// // //             }
// // //         };

// // //         fetchData();
// // //     }, []);

// // //     const addRow = () => {
// // //         const newRow = { districtId: '', districtName: '', mainPlant: '', avgPlants: '' };
// // //         setTableData([...tableData, newRow]);
// // //     };

// // //     const handleInputChange = (index, field, value) => {
// // //         const updatedData = [...tableData];
// // //         updatedData[index][field] = value;
// // //         setTableData(updatedData);
// // //     };

// // //     // Function to update the backend
// // //     const updateBackend = async () => {
// // //         try {
// // //             const response = await axios.post('http://localhost:8081/api/v1/district/save-teaType', tableData);
// // //             if (response.status === 200) {
// // //                 setUpdateStatus({ message: 'Data updated successfully!', className: 'success' });
// // //                 // Optionally, fetch the updated data again
// // //                 const fetchResponse = await axios.get('http://localhost:8081/api/v1/district/get-teaModels');
// // //                 setTableData(fetchResponse.data);
// // //             } else {
// // //                 setUpdateStatus({ message: 'Failed to update data.', className: 'error' });
// // //             }
// // //         } catch (error) {
// // //             console.error('Error updating backend:', error);
// // //             setUpdateStatus({ message: 'An error occurred while updating data.', className: 'error' });
// // //         }
// // //     };
// // //     return (
// // //         <div className='table1Black'>
// // //             <div className='dataLogoAndName'>
// // //                 <div className='dataLogo'><img src={logo} className='logoSize' alt="logo" /></div>
// // //                 <div className='dataName'>Ever Tea</div>
// // //             </div>
// // //             <Link to="/HomePage">
// // //                 <div className='menu'><img src={Menu} className='MenuLogo' alt="menu" /></div>
// // //             </Link>
// // //             <Link to="/DataBase">
// // //                 <div className='arrow1'><img src={arrow1} className='arrow1' alt="arrow" /></div>
// // //             </Link>

// // //             <div className='districtTopic'>TeaModels Data</div>
// // //             <div className='dataBox1'>
// // //                 <div className='insideBox'>
// // //                     <div className='scrollableTable'>
// // //                         <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
// // //                             <thead>
// // //                                 <tr>
// // //                                     <th>Tea Id</th>
// // //                                     <th>District</th>
// // //                                     <th>price</th>
// // //                                     <th>Tea Name</th>
// // //                                 </tr>
// // //                             </thead>
// // //                             <tbody>
// // //                                 {tableData.map((row, index) => (
// // //                                     <tr key={index}>
// // //                                         <td>
// // //                                             <input
// // //                                                 type="text"
// // //                                                 value={row.name}
// // //                                                 onChange={(e) => handleInputChange(index, 'teaId', e.target.value)}
// // //                                             />
// // //                                         </td>
// // //                                         <td>
// // //                                             <input
// // //                                                 type="number"
// // //                                                 value={row.age}
// // //                                                 onChange={(e) => handleInputChange(index, 'district', e.target.value)}
// // //                                             />
// // //                                         </td>
// // //                                         <td>
// // //                                             <input
// // //                                                 type="text"
// // //                                                 value={row.country}
// // //                                                 onChange={(e) => handleInputChange(index, 'price', e.target.value)}
// // //                                             />
// // //                                         </td>
// // //                                         <td>
// // //                                             <input
// // //                                                 type="text"
// // //                                                 value={row.district}
// // //                                                 onChange={(e) => handleInputChange(index, 'teaName', e.target.value)}
// // //                                             />
// // //                                         </td>
// // //                                     </tr>
// // //                                 ))}
// // //                             </tbody>
// // //                         </table>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Button to add a new row */}
// // //             <button onClick={addRow} className='addRowButton'>
// // //                 Add Row
// // //             </button>

// // //             {/* Button to update backend */}
// // //             <button onClick={updateBackend} className='updateBackendButton'>
// // //                 Update Backend
// // //             </button>

// // //             {/* Display update status */}
// // //             {updateStatus && (
// // //                 <div className={`updateStatus ${updateStatus.className}`}>
// // //                     {updateStatus.message}
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default Table3;


// import React, { useState } from 'react';
// import './Table3.css';
// import logo from '../../../assets/logo.jpg';
// import Menu from '../../../assets/Menu.png';
// import arrow1 from '../../../assets/arrow1.jpg';
// import { Link } from 'react-router-dom';

// const Table3 = () => {
//     // State to manage table data
//     const [tableData, setTableData] = useState([
//         { teaId: 1, district: 'Galle', price: 25, teaName: 'John Doe' },
//         { teaId: 2, district: 'Srilaka', price: 30, teaName: 'Jane Smith' },
//     ]);

//     // State to manage backend update status
//     const [updateStatus, setUpdateStatus] = useState(null);

//     // Function to add a new row
//     const addRow = () => {
//         const newRow = { teaId: tableData.length + 1, district: '', price: '', teaName: '' };
//         setTableData([...tableData, newRow]);
//     };

//     // Function to handle input changes in the table
//     const handleInputChange = (index, field, value) => {
//         const updatedData = [...tableData];
//         updatedData[index][field] = value;
//         setTableData(updatedData);
//     };

//     // Function to update the backend
//     const updateBackend = async () => {
//         try {
//             const response = await fetch('/api/updateData', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(tableData),
//             });

//             if (response.ok) {
//                 setUpdateStatus({ message: 'Data updated successfully!', className: 'success' });
//             } else {
//                 setUpdateStatus({ message: 'Failed to update data.', className: 'error' });
//             }
//         } catch (error) {
//             console.error('Error updating backend:', error);
//             setUpdateStatus({ message: 'An error occurred while updating data.', className: 'error' });
//         }
//     };

//     return (
//         <div className='table1Black'>
//             <div className='dataLogoAndName'>
//                 <div className='dataLogo'><img src={logo} className='logoSize' alt="logo" /></div>
//                 <div className='dataName'>Ever Tea</div>
//             </div>
//             <Link to="/HomePage">
//                 <div className='menu'><img src={Menu} className='MenuLogo' alt="menu" /></div>
//             </Link>
//             <Link to="/DataBase">
//                 <div className='arrow1'><img src={arrow1} className='arrow1' alt="arrow" /></div>
//             </Link>

//             <div className='districtTopic'>TeaModels Data</div>
//             <div className='dataBox1'>
//                 <div className='insideBox'>
//                     <div className='scrollableTable'>
//                         <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
//                             <thead>
//                                 <tr>
//                                     <th>Tea Id</th>
//                                     <th>District</th>
//                                     <th>Price</th>
//                                     <th>Tea Name</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {tableData.map((row, index) => (
//                                     <tr key={index}>
//                                         <td>
//                                             <input
//                                                 type="number"
//                                                 value={row.teaId}
//                                                 onChange={(e) => handleInputChange(index, 'teaId', e.target.value)}
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="text"
//                                                 value={row.district}
//                                                 onChange={(e) => handleInputChange(index, 'district', e.target.value)}
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="number"
//                                                 value={row.price}
//                                                 onChange={(e) => handleInputChange(index, 'price', e.target.value)}
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="text"
//                                                 value={row.teaName}
//                                                 onChange={(e) => handleInputChange(index, 'teaName', e.target.value)}
//                                             />
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>

//             {/* Button to add a new row */}
//             <button onClick={addRow} className='addRowButton'>
//                 Add Row
//             </button>

//             {/* Button to update backend */}
//             <button onClick={updateBackend} className='updateBackendButton'>
//                 Update Backend
//             </button>

//             {/* Display update status */}
//             {updateStatus && (
//                 <div className={`updateStatus ${updateStatus.className}`}>
//                     {updateStatus.message}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Table3;

import React, { useState, useEffect } from 'react';
import './Table3.css';
import logo from '../../../assets/logo.jpg';
import Menu from '../../../assets/Menu.png';
import arrow1 from '../../../assets/arrow1.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Table3 = () => {
    const [tableData, setTableData] = useState([]);
    const [updateStatus, setUpdateStatus] = useState(null);

    useEffect(() => {
        fetchTeaModels();
    }, []);

    const fetchTeaModels = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/v1/district/get-teaModels');
            if (response.ok) {
                const data = await response.json();
                setTableData(data);
            } else {
                console.error('Failed to fetch tea models');
            }
        } catch (error) {
            console.error('Error fetching tea models:', error);
        }
    };

    // Function to add a new row
    const addRow = () => {
        const newRow = { teaId: tableData.length + 1, district: '', price: '', teaName: '' };
        setTableData([...tableData, newRow]);
    };

    // Function to handle input changes in the table
    const handleInputChange = (index, field, value) => {
        const updatedData = [...tableData];
        updatedData[index][field] = value;
        setTableData(updatedData);
    };

    // Function to update the backend
    const updateBackend = async () => {
        try {
            const response = await fetch('/api/updateData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tableData),
            });

            if (response.ok) {
                setUpdateStatus({ message: 'Data updated successfully!', className: 'success' });
            } else {
                setUpdateStatus({ message: 'Failed to update data.', className: 'error' });
            }
        } catch (error) {
            console.error('Error updating backend:', error);
            setUpdateStatus({ message: 'An error occurred while updating data.', className: 'error' });
        }
    };

    return (
        <div className='table1Black'>
            <div className='dataLogoAndName'>
                <div className='dataLogo'><img src={logo} className='logoSize' alt="logo" /></div>
                <div className='dataName'>Ever Tea</div>
            </div>
            <Link to="/HomePage">
                <div className='menu'><img src={Menu} className='MenuLogo' alt="menu" /></div>
            </Link>
            <Link to="/DataBase">
                <div className='arrow1'><img src={arrow1} className='arrow1' alt="arrow" /></div>
            </Link>

            <div className='districtTopic'>TeaModels Data</div>
            <div className='dataBox1'>
                <div className='insideBox'>
                    <div className='scrollableTable'>
                        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th>Tea Id</th>
                                    <th>District</th>
                                    <th>Price</th>
                                    <th>Tea Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.teaId}
                                                onChange={(e) => handleInputChange(index, 'teaId', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.district}
                                                onChange={(e) => handleInputChange(index, 'district', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.price}
                                                onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.teaName}
                                                onChange={(e) => handleInputChange(index, 'teaName', e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Button to add a new row */}
            <button onClick={addRow} className='addRowButton'>
                Add Row
            </button>

            {/* Button to update backend */}
            <button onClick={updateBackend} className='updateBackendButton'>
                Update Backend
            </button>

            {/* Display update status */}
            {updateStatus && (
                <div className={`updateStatus ${updateStatus.className}`}>
                    {updateStatus.message}
                </div>
            )}
        </div>
    );
};

export default Table3;