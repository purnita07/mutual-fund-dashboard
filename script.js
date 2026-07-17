
async function fetchFund(url, navId, dateId){

const response = await fetch(url);

const data = await response.json();

document.getElementById(navId).innerHTML=data.data[0].nav;

document.getElementById(dateId).innerHTML=data.data[0].date;

}

function loadData(){

fetchFund(
"https://api.mfapi.in/mf/118955",
"hdfc-nav",
"hdfc-date"
);

// We'll replace these placeholders with the verified scheme codes.
fetchFund(
"https://api.mfapi.in/mf/118955",
"invesco-nav",
"invesco-date"
);

fetchFund(
"https://api.mfapi.in/mf/118955",
"bandhan-nav",
"bandhan-date"
);

}

loadData();
