const expandMonth = month => {
    switch (month) {
        case 'Jan':
            return 'January';
        case 'Feb':
            return 'February';
        case 'Mar':
            return 'March';
        case 'Apr':
            return 'April';
        case 'May':
            return 'May';
        case 'Jun':
            return 'June';
        case 'Jul':
            return 'July';
        case 'Aug':
            return 'August';
        case 'Sep':
            return 'September';
        case 'Oct':
            return 'October';
        case 'Nov':
            return 'November';
        case 'Dec':
            return 'December';

        default:
            return;
    }
};

export function formatDate(date) {
    const strDate = date.toDateString();
    const month = expandMonth(strDate.split(' ')[1]);
    const day = strDate.split(' ')[2];
    const year = strDate.split(' ')[3];

    return `${month} ${day}, ${year}`;
};