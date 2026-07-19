alert("script.js loaded");


document.addEventListener(
    "DOMContentLoaded",
    init
);



async function init() {


    document.getElementById("lastUpdated").innerText =
        "Loading...";


    await loadFunds();


}




async function loadFunds() {


    try {


        for (const fund of FUNDS) {


            const data =
                await DataProvider.getFund(fund);


            updateFundCard(
                fund.id,
                data
            );


        }


        document.getElementById("lastUpdated").innerText =
            new Date().toLocaleDateString("en-IN");


    }


    catch(error) {


        console.error(
            "Dashboard error:",
            error
        );


        document.getElementById("lastUpdated").innerText =
            "Error loading data";


    }


}





function updateFundCard(id, data) {


    const navElement =
        document.getElementById(
            id + "Nav"
        );


    const prevElement =
        document.getElementById(
            id + "Prev"
        );


    const dateElement =
        document.getElementById(
            id + "Date"
        );


    const changeElement =
        document.getElementById(
            id + "Change"
        );



    if(navElement){

        navElement.innerText =
            "₹" + data.nav;

    }



    if(prevElement){

        prevElement.innerText =
            "₹" + data.previousNav;

    }



    if(dateElement){

        dateElement.innerText =
            data.date;

    }



    if(changeElement){


        const change =
            Number(data.change);



        if(change >= 0){


            changeElement.innerHTML =
                "🟢 ▲ ₹" +
                data.change +
                " (" +
                data.changePercent +
                "%)";


        }
        else{


            changeElement.innerHTML =
                "🔴 ▼ ₹" +
                Math.abs(change).toFixed(2) +
                " (" +
                data.changePercent +
                "%)";


        }

    }


}
