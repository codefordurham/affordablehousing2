var chart = c3.generate({
    bindto: '#chart1',
    data: {
        x: 'Year',
        url: '/static/data/population-and-housing-units-by-year.csv',
        type: 'line'
    },
    color: {
        pattern: ['#986246',
                  '#324A63']
    }
});