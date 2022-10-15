const db = require('./Common/DbHelper');

const CM = {
    EMAIL: 'email',
    PASS: 'password',
    CARD: 'card',
    CARD_NUM: 'cardNum',
    EXPIRATION_DATE: 'exDate',
    CVC: 'cvc'
}

module.exports = {
    Login: async (req, res) => {
        try {
            let data = db.Read(n => n.email);
            let email = req.body[CM.EMAIL];
            let pass = req.body[CM.PASS]
            if (email && pass) {
                if (data[email] && data[email][CM.PASS] == pass) {
                    res.sendStatus(200)
                    return;
                }
            }

            res.sendStatus(404);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    Register: async (req, res) => {
        try {
            let data = db.Read(n => n.email);
            let email = req.body[CM.EMAIL];
            let pass = req.body[CM.PASS]

            if (email && pass) {
                if (!data[email]) {
                    db.Insert({
                        [email]: {
                            [CM.EMAIL]: email,
                            [CM.PASS]: pass,
                            [CM.CARD]: {}
                        }
                    });
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404)
                }
            } else {
                res.sendStatus(400);
            }
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
}