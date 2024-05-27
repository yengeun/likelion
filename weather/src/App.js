import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const URL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      console.log('Fetching data with API Key:', process.env.REACT_APP_API_KEY);

      const response = await axios.get(URL, {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          numOfRows: 10,  // Adjusted to fetch more rows
          pageNo: 1,
          dataType: 'JSON',
          base_date: '20240526',
          base_time: '0500',
          nx: 55,
          ny: 127
        }
      });

      console.log('API Response:', response);

      if (response.data.response.header.resultCode !== '00') {
        throw new Error(`API Error: ${response.data.response.header.resultMsg}`);
      }

      setData(response.data.response.body.items.item);
    } catch (e) {
      console.error('Error fetching data:', e);
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading ... </div>;
  if (error) return (
    <div>
      <div>Error fetching data...</div>
      <pre>{error.message}</pre>
      {error.response && <pre>{JSON.stringify(error.response.data, null, 2)}</pre>}
    </div>
  );
  if (!data) return null;

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.category}</h2>
            <p>Date: {item.fcstDate}</p>
            <p>Time: {item.fcstTime}</p>
            <p>Forecast: {item.fcstValue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
