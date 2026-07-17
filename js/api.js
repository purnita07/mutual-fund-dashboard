const API = {

    // Verified HDFC Flexi Cap Direct Growth
    HDFC: "https://api.mfapi.in/mf/118955"

    // Invesco and Bandhan will be added after we verify
    // their exact MFAPI scheme codes.
};

async function getFundData(url){

    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Unable to fetch fund data");
    }

    return await response.json();

}

function calculateChange(latest, previous){

    latest = parseFloat(latest);
    previous = parseFloat(previous);

    const amount = latest - previous;
    const percent = (amount / previous) * 100;

    return {

        amount: amount.toFixed(2),

        percent: percent.toFixed(2)

    };

}
