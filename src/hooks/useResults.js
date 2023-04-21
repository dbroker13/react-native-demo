import { useEffect, useState } from "react";
import weather from '../api/weather';

export default () => {

    const[results, setResults] = useState([]);
    const[errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log(searchTerm)
        console.log(searchTerm['term'])
        if(searchTerm['term'])
        {
            try{
                const response = await weather.get('/forecast', {
                    params: {
                        // term: searchTerm,
                        q: searchTerm['term'],
                        appid: ''
                    }
                });
                //response.data['list'][0]['main']['temp_max']
                setResults(response.data);
                console.log(response.data)
            }
            catch (err) {
                console.log(err)
                setErrorMessage('Something went wrong bubba')
            }
        }
        else{
            console.log("Search Term is empty")
        }
    };

    // Call serchApi when compoent is first rendered BAD
    //searchApi('pasta')
    useEffect(()=> {
        // let searchTerm = {};
        const term = "Columbus, Ohio"
        console.log(term);
        searchApi({term})}, []);
    return [searchApi, results, errorMessage];

};