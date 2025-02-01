
/* Given the array of events, sort them by the month that they occur in and return the sorted array.

Each object in the events array will have properties event and month */

const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    return events.sort( (a,b) => {
        if(MONTHS.indexOf(a.month) < MONTHS.indexOf(b.month) ){
            return -1;
        }
        if (MONTHS.indexOf(b.month) < MONTHS.indexOf(a.month)){
            return 1;
        }
    }

    );
    
}

module.exports = sortByMonth;