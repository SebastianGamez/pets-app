// Description: This file contains the helper functions for fetching data from the backend
// Author: Sebastián Gámez Ariza

// Import axios
import axios from 'axios';

// fetch data method
const fetchData = async (url, method, data) => {
    
    // fetch data from the backend
    const response = await axios({
        method,
        url,
        data,
    });
    
    // return the response
    return response;
};
