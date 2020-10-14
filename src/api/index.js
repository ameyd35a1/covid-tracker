import axios from 'axios';

export const fetchTotalData = async () => {

    const apiUrl = 'https://api.covid19api.com/world/total';
    try {
        const { data: { TotalConfirmed, TotalDeaths, TotalRecovered } } = await axios.get(apiUrl);
        // const { data } = await axios.get(apiUrl);
        // console.log(TotalConfirmed, TotalDeaths, TotalRecovered);
        return { "Confirmed": TotalConfirmed, "Deaths": TotalDeaths, "Recovered": TotalRecovered };

    } catch (error) {

    }
}

export const fetchCountries = async () => {

    const apiUrl = "https://api.covid19api.com/countries";
    try {
        const { data } = await axios.get(apiUrl);
        return data.map((item) => item.Country).sort();
    } catch (error) {

    }
}

export const fetchCountryData = async (country) => {

    const apiUrl = `https://api.covid19api.com/total/country/${country}`;
    try {
        const { data } = await axios.get(apiUrl);
        return data.map((item) => { return { "Confirmed": item.Confirmed, "Deaths": item.Deaths, "Recovered": item.Recovered, "Active": item.Active, "Date": item.Date } });
    } catch (error) {

    }
}

export const fetchCountryTotalData = async (country) => {

    const apiUrl = 'https://api.covid19api.com/summary';
    try {
        const { data: { Countries, Global } } = await axios.get(apiUrl);
        const totalData = Countries.map((item) => { return { "Confirmed": item.TotalConfirmed, "Deaths": item.TotalDeaths, "Recovered": item.TotalRecovered, "Country": item.Country } });
        totalData.push({ "Confirmed": Global.TotalConfirmed, "Deaths": Global.TotalDeaths, "Recovered": Global.TotalRecovered, "Country": "Global" });

        return totalData;
    } catch (error) {

    }
}