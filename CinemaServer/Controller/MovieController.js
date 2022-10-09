const fetch = require('node-fetch');

module.exports = {
    GetMovie: async (req, res) => {
        //https://webmomoapi.momo.vn/api/ci-film/paging?pageIndex=0&year=2022&PageSize=1000
        let data = {
            now: [],
            soon: []
        };
        let date = new Date();
        let datePrevious = new Date()
        datePrevious.setDate(1)
        datePrevious.setMonth(datePrevious.getMonth() - 1)
        console.log(date);
        console.log(datePrevious);

        await fetch(`https://webmomoapi.momo.vn/api/ci-film/paging?pageIndex=0&year=${date.getFullYear()}&PageSize=1000`)
            .then(res => res.json())
            .then(json => {
                data.soon = json.Data.Items.filter(n => new Date(n.OpeningDate) > date);
                data.now = json.Data.Items.filter(
                    n => {
                        if (n.OpeningDate.split('-')[1] * 1 > datePrevious.getMonth()) {
                            // var res = await fetch(`https://webmomoapi.momo.vn/api/ci-film/session/${n.ApiFilmId}`)
                            // var json = await res.json();

                            // return json.Data.Cineplexs.length > 0;
                            return true

                        }

                        return false;

                    }
                )
            })

        res.send(data);
    },
    GetMovieDetail: async (req, res) => {
        //https://webmomoapi.momo.vn/api/ci-film/session/6020?&sortType=1&sortDir=1&apiCityId=50&date=2022-10-08
        let data = {};
        let pageIndex = req.query.pageIndex;
        let query = req.query.query;
        let pageSize = req.query.pageSize;

        await fetch(`https://webmomoapi.momo.vn/api/ci-film/paging?pageIndex=${pageIndex}&query=${query}&pageSize=${pageSize}`)
            .then(res => res.json())
            .then(json => data = json.Data)

        res.send(data);
    }
}

DateFormat = function (date, formatString) {
    var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th;
    YY = ((YYYY = date.getFullYear()) + "").slice(-2);
    MM = (M = date.getMonth() + 1) < 10 ? ('0' + M) : M;
    MMM = (MMMM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][M - 1]).substring(0, 3);
    DD = (D = date.getDate()) < 10 ? ('0' + D) : D;
    DDD = (DDDD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()]).substring(0, 3);
    th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) == 1) ? 'st' : (dMod == 2) ? 'nd' : (dMod == 3) ? 'rd' : 'th';
    formatString = formatString.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);
    h = (hhh = date.getHours());
    if (h == 0) h = 24;
    if (h > 12) h -= 12;
    hh = h < 10 ? ('0' + h) : h;
    hhhh = hhh < 10 ? ('0' + hhh) : hhh;
    AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase();
    mm = (m = date.getMinutes()) < 10 ? ('0' + m) : m;
    ss = (s = date.getSeconds()) < 10 ? ('0' + s) : s;
    return formatString.replace("#hhhh#", hhhh).replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h).replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s).replace("#ampm#", ampm).replace("#AMPM#", AMPM);
};