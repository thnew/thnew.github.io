'use strict';
app.factory('CustomersFactory', function () {
    var customers = [
        {
            imageSrc: "images/customers/airbus.png"
        },
        {
            imageSrc: "images/customers/otto.png"
        },
        {
            imageSrc: "images/customers/draeger.png"
        },
        {
            imageSrc: "images/customers/bdo.png"
        },
        {
            imageSrc: "images/customers/cbr.png"
        },
        {
            imageSrc: "images/customers/uno.png"
        },
        {
            imageSrc: "images/customers/baumarkt_direkt.png"
        },
        {
            imageSrc: "images/customers/hpa.png"
        },
        {
            imageSrc: "images/customers/glueckkanja.png"
        }
    ];
    return {
        getCustomers: function () {
            return customers;
        }
    };
});
//# sourceMappingURL=customers.factory.js.map