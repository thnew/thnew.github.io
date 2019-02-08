'use strict';

interface CustomersFactory {
	getCustomers(): Customer[]
}

app.factory('CustomersFactory', function (): CustomersFactory {
	var customers: Customer[] = [
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
		getCustomers: function (): Customer[] {
			return customers;
		}
	};
});