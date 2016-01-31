module.exports = {
    expenses: getExpenses()
};

function getExpenses() {
    return [
        {id: 1, item: 'Groceries', vendor: 'Costco', price: 98.10, location: 'Florida'},
        {id: 2, item: 'Hair cut', vendor: 'Bell Salon', price: 14, location: 'California'},
        {id: 3, item: 'Dinner', vendor: 'IHop', price: 33.00, location: 'New York'},
        {id: 4, item: 'Doctor', vendor: 'Dr. John', price: 30, location: 'North Dakota'},
        {id: 5, item: 'Commute', vendor: 'NJ Transit', price: 14.50, location: 'South Dakota'},
        {id: 6, item: 'Movie', vendor: 'AMC', price: 11, location: 'South Carolina'},
        {id: 7, item: 'Lunch', vendor: 'Tina\'s', price: 9.95, location: 'Wyoming'}
    ];
}
