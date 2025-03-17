// import React from 'react'
// import './Table4.css'

// import logo from '../../../assets/logo.jpg'
// import Menu from '../../../assets/Menu.png'
// import arrow1 from '../../../assets/arrow1.jpg'
// import { Link } from 'react-router-dom'

// const Table4 = () => {
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

//         <div className='districtTopic'>TeaType Data</div>
//         <div className='dataBox1'>
//             <div className='insideBox'>
//                 <div>
//                     <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
//                         <thead>
//                             <tr>
//                                 <th>Tea Type ID</th>
//                                 <th>Fertilizer Schedule</th>
//                                 <th>Life Cycle week</th>
//                                 <th>Tea type Name</th>
//                                 <th>Watering Interval days </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>1</td>
//                                 <td>supun</td>
//                                 <td>2</td>
//                                 <td>005</td>
//                                 <td>3</td>
//                             </tr>
//                             <tr>
//                                 <td>2</td>
//                                 <td>gimhana</td>
//                                 <td>5</td>
//                                 <td>008</td>
//                                 <td>3</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Table4




import React, { useState, useEffect } from 'react';
import './Table4.css';
import logo from '../../../assets/logo.jpg';
import Menu from '../../../assets/Menu.png';
import arrow1 from '../../../assets/arrow1.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Table4 = () => {
    // State to manage table data
    const [tableData, setTableData] = useState([]);
    const [updateStatus, setUpdateStatus] = useState(null);

    // Fetch TeaType data from the backend when the component mounts
    useEffect(() => {

        const fetchTeaTypes = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/v1/district/get-teaType');
                if (response.ok) {
                    const data = await response.json();
                    setTableData(data);
                } else {
                    console.error('Failed to fetch tea types');
                }
            } catch (error) {
                console.error('Error fetching tea types:', error);
            }
        };
        fetchTeaTypes();
    }, []);


    // Function to add a new row
    const addRow = () => {
        const newRow = {
            teaTypeId: tableData.length + 1,
            fertilizerSchedule: '',
            lifeCycleWeek: '',
            teaTypeName: '',
            wateringIntervalDays: '',
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
            const response = await axios.post('http://localhost:8081/api/v1/district/save-teaType', tableData);
            if (response.status === 200) {
                setUpdateStatus({ message: 'Data updated successfully!', className: 'success' });
                // Optionally, fetch the updated data again
                const fetchResponse = await axios.get('http://localhost:8081/api/v1/district/get-teaType');
                setTableData(fetchResponse.data);
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

            <div className='districtTopic'>TeaType Data</div>
            <div className='dataBox1'>
                <div className='insideBox'>
                    <div className='scrollableTable'>
                        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th>Tea Type ID</th>
                                    <th>Fertilizer Schedule</th>
                                    <th>Life Cycle Week</th>
                                    <th>Tea Type Name</th>
                                    <th>Watering Interval Days</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.teaTypeId}
                                                onChange={(e) => handleInputChange(index, 'teaTypeId', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.fertilizerSchedule}
                                                onChange={(e) => handleInputChange(index, 'fertilizerSchedule', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                        <input
                                                type="number"
                                                value={row.lifeCycleWeek}
                                                onChange={(e) => handleInputChange(index, 'lifeCycleWeek', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.teaTypeName}
                                                onChange={(e) => handleInputChange(index, 'teaTypeName', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.wateringIntervalDays}
                                                onChange={(e) => handleInputChange(index, 'wateringIntervalDays', e.target.value)}
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

export default Table4;