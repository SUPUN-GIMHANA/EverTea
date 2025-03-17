

import React, { useState, useEffect } from 'react';
import './Table2.css';
import logo from '../../../assets/logo.jpg';
import Menu from '../../../assets/Menu.png';
import arrow1 from '../../../assets/arrow1.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Table2 = () => {
    const [tableData, setTableData] = useState([]);
    const [updateStatus, setUpdateStatus] = useState(null);

    // Fetch data from backend when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/v1/district/get-instruction');
                setTableData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Function to add a new row
    const addRow = () => {
        const newRow = {
            instructionId: tableData.length + 1,
            action: '',
            details: '',
            endDay: '',
            recurringFrequencyWeek: '',
            startDay: '',
            teaTypeId: '',
            triggerDay: '',
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
            const response = await axios.post('http://localhost:8081/api/v1/district/save-teaModel', tableData);
            if (response.status === 200) {
                setUpdateStatus({ message: 'Data updated successfully!', className: 'success' });
                // Optionally, fetch the updated data again
                const fetchResponse = await axios.get('http://localhost:8081/api/v1/district/get-instruction');
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

            <div className='districtTopic'>Instruction Data</div>
            <div className='dataBox1'>
                <div className='insideBox'>
                    <div className='scrollableTable'>
                        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th>Instruction id</th>
                                    <th>Action</th>
                                    <th>Details</th>
                                    <th>End Day</th>
                                    <th>Recurring Frequency Week</th>
                                    <th>Start Day</th>
                                    <th>Tea Type id</th>
                                    <th>Trigger Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.instructionId}
                                                onChange={(e) => handleInputChange(index, 'instructionId', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.action}
                                                onChange={(e) => handleInputChange(index, 'action', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.details}
                                                onChange={(e) => handleInputChange(index, 'details', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.endDay}
                                                onChange={(e) => handleInputChange(index, 'endDay', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.recurringFrequencyWeek}
                                                onChange={(e) => handleInputChange(index, 'recurringFrequencyWeek', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.startDay}
                                                onChange={(e) => handleInputChange(index, 'startDay', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.teaTypeId1}
                                                onChange={(e) => handleInputChange(index, 'teaTypeId1', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.triggerDay}
                                                onChange={(e) => handleInputChange(index, 'triggerDay', e.target.value)}
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

export default Table2;