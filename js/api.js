/*
====================================================
 Mutual Fund Dashboard
 API / Data Provider Layer
 Version 2.0
====================================================
*/


const DataProvider = {


    /*
    ----------------------------------------
    Main function called by dashboard
    ----------------------------------------
    */

    async getFund(fund) {

        try {

            // Temporary provider placeholder
            // We will connect the verified NAV source here

            const data = await this.provider(fund);


            return this.formatFundData(data);


        } catch(error) {

            console.error(
                "Fund loading error:",
                error
            );

            throw error;

        }

    },



    /*
    ----------------------------------------
    Data Source Provider
    ----------------------------------------

    Only this function changes when we
    change NAV source.

    UI will never change.
    ----------------------------------------
    */


    async provider(fund) {


        /*
        Current placeholder response.

        This allows us to test the complete
        dashboard flow before connecting
        live NAV.
        */


        return {

            name: fund.name,

            nav: 0,

            previousNav: 0,

            date: "",

            schemeCode: ""

        };

    },



    /*
    ----------------------------------------
    Standard output format
    ----------------------------------------
    */


    formatFundData(data) {


        const nav =
            Number(data.nav || 0);


        const previous =
            Number(data.previousNav || 0);



        let change = 0;

        let changePercent = 0;



        if(previous > 0) {


            change =
                nav - previous;


            changePercent =
                (
                    (change / previous)
                    * 100
                );

        }



        return {


            name:
                data.name,


            nav:
                nav,


            previousNav:
                previous,


            change:
                change.toFixed(2),


            changePercent:
                changePercent.toFixed(2),


            date:
                data.date,


            schemeCode:
                data.schemeCode


        };


    }


};
