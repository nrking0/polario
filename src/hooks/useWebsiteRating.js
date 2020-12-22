import React, { useState, useEffect } from 'react';
import mbfc from '../data/mbfc.json';

/**
 * 
 * @param {string} url URL of the current website the user is visiting. 
 * @returns {object} Returns JSON object with keys name, dispaly_name, url, bias, accuracy, mbfc_url, verified_date
 */
const useWebsiteRating = (url) => {

    const [rating, setRating] = useState(null);

    useEffect(() => { 
        /**
         * searches Media Bias Fact Checker json for website
         * 
         * @source : http://mbfcapi.herokuapp.com/api/v1/sources
         */

        console.log("here 2!")
        const search_results = mbfc.sources.find(source => {
            return source.url === url;
        })


        setRating(search_results);
    });


    return rating;

}

export default useWebsiteRating;