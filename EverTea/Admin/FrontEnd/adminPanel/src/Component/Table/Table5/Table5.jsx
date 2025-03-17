// import React from 'react'
// import './Table5.css'

// import logo from '../../../assets/logo.jpg'
// import Menu from '../../../assets/Menu.png'
// import arrow1 from '../../../assets/arrow1.jpg'
// import { Link } from 'react-router-dom'

// const Table5 = () => {
//   return (
//     <div className='table1Black'>
//         <div className='dataLogoAndName'>
//             <div className='dataLogo'><img src={logo} className='logoSize'/></div>
//             <div className='dataName'>Ever Tea</div>
//         </div>
//         <Link to="/HomePage">
//             <div className='menu'><img src={Menu} className='MenuLogo'/></div>
//         </Link>
//         <Link to="/DataBase">
//         <div className='arrow1'><img src={arrow1} className='arrow1'/></div>
//         </Link>

//         <div className='districtTopic'>Weatherd Data</div>
//         <div className='dataBox1'>
//             <div className='insideBox'>
//                 <div>
//                     <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
//                         <thead>
//                             <tr>

//                                 <th>Weather ID</th>
//                                 <th>Condition Type</th>
//                                 <th>Message</th>
//                                 <th>Priority</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>1</td>
//                                 <td>weather</td>
//                                 <td>USA</td>
//                                 <td>1</td>
//                             </tr>
//                             <tr>
//                                 <td>2</td>
//                                 <td>weather</td>
//                                 <td>USA</td>
//                                 <td>1</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }

// export default Table5


// import React, { useState } from 'react';
// import './Table5.css';
// import logo from '../../../assets/logo.jpg';
// import Menu from '../../../assets/Menu.png';
// import arrow1 from '../../../assets/arrow1.jpg';
// import { Link } from 'react-router-dom';

// const Table5 = () => {
//     // State to manage table data
//     const [tableData, setTableData] = useState([
//         { name: 'John Doe', age: 25, country: 'USA', district: 'Galle' },
//         { name: 'Jane Smith', age: 30, country: 'UK', district: 'Srilaka' },
//     ]);

//     // State to manage backend update status
//     const [updateStatus, setUpdateStatus] = useState(null);

//     // Function to add a new row
//     const addRow = () => {
//         const newRow = { name: '', age: '', country: '', district: '' };
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

//             <div className='districtTopic'>Weather Data</div>
//             <div className='dataBox1'>
//                 <div className='insideBox'>
//                     <div className='scrollableTable'>
//                         <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
//                             <thead>
//                                 <tr>
//                                     <th>Weather ID</th>
//                                     <th>Condition Type</th>
//                                     <th>Message</th>
//                                     <th>Priority</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {tableData.map((row, index) => (
//                                     <tr key={index}>
//                                         <td>
//                                             <input
//                                                 type="text"
//                                                 value={row.name}
//                                                 onChange={(e) => handleInputChange(index, 'name', e.target.value)}
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="number"
//                                                 value={row.age}
//                                                 onChange={(e) => handleInputChange(index, 'age', e.target.value)}
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="text"
//                                                 value={row.country}
//                                                 onChange={(e) => handleInputChange(index, 'country', e.target.value)}
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="text"
//                                                 value={row.district}
//                                                 onChange={(e) => handleInputChange(index, 'district', e.target.value)}
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

// export default Table5;


import React, { useState, useEffect } from 'react';
import './Table5.css';
import logo from '../../../assets/logo.jpg';
import Menu from '../../../assets/Menu.png';
import arrow1 from '../../../assets/arrow1.jpg';
import { Link } from 'react-router-dom';

const Table5 = () => {
    // State to manage table data
    const [tableData, setTableData] = useState([]);
    const [updateStatus, setUpdateStatus] = useState(null);

    // Fetch weather data from the backend when the component mounts
    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/v1/district/get-weather');
            if (response.ok) {
                const data = await response.json();
                setTableData(data);
            } else {
                console.error('Failed to fetch weather data');
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    // Function to add a new row
    const addRow = () => {
        const newRow = {
            weatherId: tableData.length + 1,
            conditionType: '',
            message: '',
            priority: '',
        };
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
            const response = await fetch('http://localhost:8081/api/v1/district/save-weather', {
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

            <div className='districtTopic'>Weather Data</div>
            <div className='dataBox1'>
                <div className='insideBox'>
                    <div className='scrollableTable'>
                        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th>Weather ID</th>
                                    <th>Condition Type</th>
                                    <th>Message</th>
                                    <th>Priority</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.weatherId}
                                                onChange={(e) => handleInputChange(index, 'weatherId', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.conditionType}
                                                onChange={(e) => handleInputChange(index, 'conditionType', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.message}
                                                onChange={(e) => handleInputChange(index, 'message', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.priority}
                                                onChange={(e) => handleInputChange(index, 'priority', e.target.value)}
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

export default Table5;