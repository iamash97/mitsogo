import React, { createContext, useState, useEffect, useContext } from 'react';

const CurrencyContext = createContext();

export const CURRENCIES_SUPPORTED = [
    { language: 'en', currency: 'USD', symbol: '$' },
    { language: 'en', currency: 'EUR', symbol: '€' },
    { language: 'de', currency: 'EUR', symbol: '€' },
    { language: 'en', currency: 'INR', symbol: '₹' },
    { language: 'en', currency: 'CAD', symbol: '$' }
  ];

export const CurrencyProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState({ INR: null, EUR: null, CAD: null });
  const [currentCurrency, setCurrentCurrency] = useState(CURRENCIES_SUPPORTED[0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); // Example API
        if (!response.ok) {
          throw new Error('Failed to fetch currency data');
        }
        const data = await response.json();
        setCurrencies({ USD: 1, INR: data.rates.INR, EUR: data.rates.EUR, CAD: data.rates.CAD });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyData();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currencies, loading, error, currentCurrency, setCurrentCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  return useContext(CurrencyContext);
};
