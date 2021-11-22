import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
    const [ results, setResults ] = useState([]);

    useEffect( () => {

        const searchApi = async () => {
        
            try{
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b705047581114ce982126552b47da374')
                setResults(response.data.articles);
                
            }catch(err){
                console.log(err);
            }
        };

        searchApi()
    }, []);

    return [results];
};