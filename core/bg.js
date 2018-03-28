chrome['runtime']['onMessage'].addListener(
    function (request, sender, sendResponse) {
        if (request.type == "getPrices") {
            $.ajax({
                url: "https://www.coinbase.com/charts",
                success: function (data) {
                    sendResponse({
                        "ETH": $(data).find("[data-currency='ETH'] span span")[1].innerHTML
                    })
                }
            })
        } else if (request.type == "pageLoaded") {

        }
        return true;
    });