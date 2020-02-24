export default class CurrencyService {

    _apiBase = 'https://bank.gov.ua/NBUStatService/v1/statdirectory';

    getResource = async (url) => {
        const currency = await fetch(`${this._apiBase}${url}`);
        return await currency.json();
    }
    
    getCurrency = async (currency, date) => {
        const res = await this.getResource(`/exchange?valcode=${currency}&date=${date}&json`);
        
        return res[0];
    }
}