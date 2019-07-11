const axios = require('axios');
import "babel-polyfill";

const url = 'http://www.json-generator.com/api/json/get/cqclnKfhsO?indent=2';

async function getWidgetsData() {
    try {
        const response = await axios.get(url);
        console.log(response.data);
        dataPrint(response.data);
    } catch (error) {
        console.error(error);
    }
}

const dataValue = (value) => `${value.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)}`;

const dataMoneyWidget = (elementValue, value, currency, elementPercents, percents) => {
    document.getElementById(elementValue).innerHTML = `${currency}${value.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)}`;

    const percentsContainer = document.getElementById(elementPercents);
    percentsContainer.innerHTML = (percents > 0 ? '+' : '') + percents + '%';
    percentsContainer.className += percents >= 0 ? ' small-widgets__badge--positive' : ' small-widgets__badge--negative';
}

const dataPrint = (data) => {
    dataMoneyWidget('dollar__value', data.budget.value, '$', 'dollar__percents', data.budget.percents);
    
    document.getElementById('operations__value').innerHTML = dataValue(data.operations.value);

    dataMoneyWidget('requests__value', data.requests.value, '$', 'requests__percents', data.requests.percents);
    
    document.getElementById('progress__value').innerHTML = data.progress.value + '%';
    document.getElementById('progress__bar').style = 'width:' + data.progress.value + '%';
};

getWidgetsData()
