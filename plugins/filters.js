import Vue from 'vue'
import moment from 'moment'
import { mapValues } from 'lodash'

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MMM DD, YYYY - h:mm a')
    }
})

Vue.filter('formatTime', function(value) {
    if (value) {
        return moment(String(value)).format('hh:mm:ss')
    }
})

Vue.filter('formatDateWithoutTime', function(value) {
    if (value) {
        return moment(String(value)).format('MMMM DD, YYYY')
    }
})

Vue.filter('YearformatDate', function(value) {
    if (value) {
        var d = new Date(value);
        return d.getFullYear();    
    }
})

Vue.filter('MonthformatDate', function(value) {
    if (value) {
        return value.toLocaleString('default', { month: 'long' });
    }
})
Vue.filter('MonthformatDate_fullDay', function(value) {
    if (value) {
        return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(value);
        
    }
})

Vue.filter('uppercase', function (value) {
	return value.toUpperCase()
})

Vue.filter('dateFormatter', function(value) {
    if (value) {
        return moment(String(value), 'DD/MM/YYYY').format('MMM DD, YYYY')
    }
})
Vue.filter('time', function(value) {
    if (value) {
        return moment(String(value)).format('hh:mm A')
    }
})

Vue.filter('time_without_ampm', function(value) {
    if (value) {
        return moment(String(value)).format('hh:mm')
    }
})

Vue.filter('time_with_ampm', function(value) {
    if (value) {
        return moment(String(value)).format('hh:mm A')
    }
})

Vue.filter('ampm', function(value) {
    if (value) {
        return moment(String(value)).format('A')
    }
})

Vue.filter('ticketingDateFormatter', function(value) {
    if (value) {
        return moment(String(value)).format('MMM DD, YYYY')
    }
})

Vue.filter('militoTime', function (duration) {
    var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
})

Vue.filter('nocDateFormatter', function(value) {
    if (value) {
        return moment(String(value), 'YYYY/MM/DD').format('DD MMM, YYYY')
    }
})

Vue.filter('nocDateFormatterNew', function(value) {
    if (value) {
        return moment(String(value), 'DD/MM/YYYY').format('DD MMM, YYYY')
    }
})

Vue.filter('eventDate', function(value) {
    if (value) {
        return moment(String(value)).format('MMM DD')
    }
})

Vue.filter('PayslipDateFormatter', function(value) {
    if (value) {
        return moment(String(value), 'YYYY/MM').format('MMM, YYYY')
    }
})

Vue.filter('dayMonth', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM')
    }
})

// Regex for Rewards page content which is present in html

Vue.filter('HTMLFormatter', function(value) {
    if (value) {
        return value.replace(/<\/?[^>]+(>|$)/g, "").replace('&nbsp;', '').replace('&amp;', '&');
    }
})

Vue.filter('ArrayFormatter', function(value) {
    if (value) {
        return value.toString().replace('&amp;', '&');
    }
})

//date formatter

Vue.filter('DaysFinder', function(value) {
    if (value) {
        let year = value.split('-')
        return new Date(year[0], year[1], 0).getDate();
    }
})

Vue.filter('truncateText', function (text, length, suffix) {
    if (text.length > length) {
        return text.substring(0, length) + suffix;
    } else {
        return text;
    }
});

Vue.filter('firstLetter', function (s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase()
});


// (12345.67).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

Vue.filter('amountFormatter', function(value) {
    // if (value) {
    //     if (value == '' || value == null || value == 0) {
    //         value = 0.00
    //         return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    //     } else {
    //         return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    //     }
    // }
    return value
})