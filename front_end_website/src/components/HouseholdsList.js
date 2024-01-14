import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HouseholdsList = () => {
    const [households, setHouseholds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8000/api/households/');
            setHouseholds(response.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Households List</h2>
//            <ul>
//                {households.map((household) => (
//                    <li key={household.household_id}>{household.household_name}</li>
//                ))}
//            </ul>
        </div>
    );
};

export default HouseholdsList;
