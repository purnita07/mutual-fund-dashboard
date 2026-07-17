
alert("script.js loaded");

document.addEventListener("DOMContentLoaded", init);

async function init() {

    document.getElementById("lastUpdated").innerText = "Loading...";

    await loadHDFC();

}

async function loadHDFC() {

    try {

        const data = await getFundData(API.HDFC);

        const latest = data.data[0];
        const previous = data.data[1];

        const change = calculateChange(
            latest.nav,
            previous.nav
        );

        document.getElementById("hdfcNav").innerText =
            "₹" + latest.nav;

        document.getElementById("hdfcPrev").innerText =
            "₹" + previous.nav;

        document.getElementById("hdfcDate").innerText =
            latest.date;

        const amount = parseFloat(change.amount);

        if(amount >= 0){

            document.getElementById("hdfcChange").innerHTML =
            "🟢 ▲ ₹" +
            change.amount +
            " (" +
            change.percent +
            "%)";

        }else{

            document.getElementById("hdfcChange").innerHTML =
            "🔴 ▼ ₹" +
            Math.abs(amount).toFixed(2) +
            " (" +
            change.percent +
            "%)";

        }

        document.getElementById("lastUpdated").innerText =
            latest.date;

    }

    catch(error){

        console.log(error);

        document.getElementById("hdfcNav").innerText =
            "Error";

    }

}
