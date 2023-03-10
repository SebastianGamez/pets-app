// Description: This file contains the helper functions for fetching data from the backend
// Author: Sebastián Gámez Ariza

// Import axios
import axios from 'axios';
// Import swal 2
import Swal from 'sweetalert2';

// fetch data method
const fetchDataHelper = async (url, method, data) => {
    
    try{
        // fetch data from the backend
        const response = await axios({
            method,
            url,
            data
        });

        // return the response
        return response;

    } catch (error) {
        // show error message
        Swal.fire('Error', `${error}`, 'error');
    }
};

// export the fetch data method
export default fetchDataHelper;