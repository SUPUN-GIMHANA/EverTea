


import React, { useState, useEffect } from 'react';
import './Table1.css';
import logo from '../../../assets/logo.jpg';
import Menu from '../../../assets/Menu.png';
import arrow1 from '../../../assets/arrow1.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Table1 = () => {
    const [tableData, setTableData] = useState([]);
    const [updateStatus, setUpdateStatus] = useState(null);

    // Fetch data from the backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/v1/district/get-districts');
                setTableData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const addRow = () => {
        const newRow = { districtId: '', districtName: '', mainPlant: '', avgPlants: '' };
        setTableData([...tableData, newRow]);
    };

    const handleInputChange = (index, field, value) => {
        const updatedData = [...tableData];
        updatedData[index][field] = value;
        setTableData(updatedData);
    };


    const updateBackend = async () => {
        try {
            const response = await axios.post('http://localhost:8081/api/v1/district/save-districts', tableData);
            if (response.status === 200) {
                setUpdateStatus({ message: 'Data updated successfully!', className: 'success' });
                // Optionally, fetch the updated data again
                const fetchResponse = await axios.get('http://localhost:8081/api/v1/district/get-districts');
                setTableData(fetchResponse.data);
            } else {
                setUpdateStatus({ message: 'Failed to update data.', className: 'error' });
            }
        } catch (error) {
            console.error('Error updating backend:', error);
            setUpdateStatus({ message: 'An error occurred while updating data.', className: 'error' });
        }
    };
    // const updateBackend = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:8081/api/v1/district/save-district', tableData[0]);
    //         if (response.status === 200) {
    //             setUpdateStatus({ message: 'Data updated successfully!', className: 'success' });
    //             // Optionally, fetch the updated data again
    //             const fetchResponse = await axios.get('http://localhost:8081/api/v1/district/get-districts');
    //             setTableData(fetchResponse.data);
    //         } else {
    //             setUpdateStatus({ message: 'Failed to update data.', className: 'error' });
    //         }
    //     } catch (error) {
    //         console.error('Error updating backend:', error);
    //         setUpdateStatus({ message: 'An error occurred while updating data.', className: 'error' });
    //     }
    // };

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

            <div className='districtTopic'>District Data</div>
            <div className='dataBox1'>
                <div className='insideBox'>
                    <div className='scrollableTable'>
                        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th>District ID</th>
                                    <th>District Name</th>
                                    <th>Main Plant</th>
                                    <th>Avg Plants</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.districtId}
                                                onChange={(e) => handleInputChange(index, 'districtId', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.districtName}
                                                onChange={(e) => handleInputChange(index, 'districtName', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.mainPlant}
                                                onChange={(e) => handleInputChange(index, 'mainPlant', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.avgPlants}
                                                onChange={(e) => handleInputChange(index, 'avgPlants', e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button onClick={addRow} className='addRowButton'>
                Add Row
            </button>

            <button onClick={updateBackend} className='updateBackendButton'>
                Update Backend
            </button>

            {updateStatus && (
                <div className={`updateStatus ${updateStatus.className}`}>
                    {updateStatus.message}
                </div>
            )}
        </div>
    );
};

export default Table1;