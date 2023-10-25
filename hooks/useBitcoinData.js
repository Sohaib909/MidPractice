import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useBitcoinData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchBitcoinData = async () => {
    try {
      const localData = await AsyncStorage.getItem('bitcoinData');
      if (localData) {
        setData(JSON.parse(localData));
      }

      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const json = await response.json();

      const bitcoinData = Object.values(json.bpi);
      setData(bitcoinData);
      await AsyncStorage.setItem('bitcoinData', JSON.stringify(bitcoinData));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBitcoinData();

    // Refresh data every 5 minutes (300,000 milliseconds)
    const refreshInterval = setInterval(fetchBitcoinData, 300000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  return { loading, data };
};

export default useBitcoinData;
