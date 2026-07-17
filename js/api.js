const FUND_NAMES = [
    {
        query: "HDFC Flexi Cap Direct Growth",
        prefix: "hdfc"
    },
    {
        query: "Invesco India Mid Cap Direct Growth",
        prefix: "invesco"
    },
    {
        query: "Bandhan Small Cap Direct Growth",
        prefix: "bandhan"
    }
];

async function searchFund(query){

    const response = await fetch(
        "https://api.mfapi.in/mf/search?q=" +
        encodeURIComponent(query)
    );

    return await response.json();

}

async function latestNAV(code){

    const response = await fetch(
        "https://api.mfapi.in/mf/" + code
    );

    return await response.json();

}

function calculateChange(latest, previous){

    latest = Number(latest);
    previous = Number(previous);

    const amount = latest - previous;

    const percent = (amount/previous)*100;

    return{

        amount,

        percent

    };

}
