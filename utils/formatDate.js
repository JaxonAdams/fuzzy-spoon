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

export function formatTime(date) {
    const strTime = date.toTimeString().split(' ')[0];
    let hour = strTime.split(':')[0];
    const minute = strTime.split(':')[1];
    let meridiem;

    // define if time is am or pm depending on hour
    if (hour < 12) {
        meridiem = 'AM';
    } else if (hour === 12) {
        meridiem = 'PM';
    } else if (hour > 12 && hour < 24) {
        meridiem = 'PM';
        hour -= 12;
    } else if (hour === 24) {
        meridiem = 'AM';
        hour -= 12;
    };

    return `${hour}:${minute} ${meridiem}`;
};