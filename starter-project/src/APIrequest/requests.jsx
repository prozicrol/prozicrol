import { useState, useEffect } from 'react';
import './requests.css'


const useApiData = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal: abortController.signal,
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer YOUR_TOKEN' // Add auth if needed
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        
        if (!abortController.signal.aborted) {
          setState({
            data: jsonData,
            isLoading: false,
            error: null
          });
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          setState({
            data: null,
            isLoading: false,
            error: error.message
          });
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return state;
};

const DataComponent = () => {
  const { data, isLoading, error } = useApiData('https://flask-project-6vjl.onrender.com/waifu');
  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="data-container">
      {data && (
        <div>
          {data.map((img, i) => (
            <img key={i} src={img.url} alt=''/>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataComponent;