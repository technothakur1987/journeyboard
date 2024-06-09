import React, { useEffect, useState } from 'react';
import dummydatas from './components/DummyData';


const UseFetch = (url) => {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        let res = await response.json();
        setData(res);
        setLoading(false)
      } catch (error) {
       // console.log(error);
        setError(error.message);
        setLoading(false)
       
      }
    };

    getData();
  }, [url]);

  return [data, loading, error];
};

export default UseFetch;
