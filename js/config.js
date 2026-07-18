/*
====================================================
 Mutual Fund Dashboard - Configuration
 Version : 2.0
====================================================
*/

const CONFIG = {

    APP_NAME: "Mutual Fund Dashboard",

    VERSION: "2.0",

    REFRESH_INTERVAL: 0, // Manual refresh only

    DATE_FORMAT: "en-IN",

    CURRENCY: "INR"

};


/*
====================================================
 Portfolio Funds
====================================================
*/

const FUNDS = [

    {
        id: "hdfc",

        name: "HDFC Flexi Cap Fund",

        searchName: "HDFC Flexi Cap Fund Direct Growth",

        amfiCode: "",

        color: "#0d6efd"
    },

    {
        id: "invesco",

        name: "Invesco India Mid Cap Fund",

        searchName: "Invesco India Mid Cap Fund Direct Growth",

        amfiCode: "",

        color: "#198754"
    },

    {
        id: "bandhan",

        name: "Bandhan Small Cap Fund",

        searchName: "Bandhan Small Cap Fund Direct Growth",

        amfiCode: "",

        color: "#dc3545"
    }

];


/*
====================================================
 Helper Functions
====================================================
*/

function getFund(id){

    return FUNDS.find(fund => fund.id === id);

}


function formatCurrency(value){

    return new Intl.NumberFormat("en-IN", {

        style: "currency",

        currency: CONFIG.CURRENCY,

        maximumFractionDigits: 2

    }).format(value);

}


function formatNumber(value){

    return Number(value).toLocaleString("en-IN");

}
