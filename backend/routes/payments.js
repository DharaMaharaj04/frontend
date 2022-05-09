const router = require('express').Router();
let Payment = require('../models/payments.model');

router.route('/').get((req, res) => {
    Payment.find()
        .then(payments => res.json(payments))
        .catch(err => res.json(400).json('Error:' + err));
});

router.route('/').post((req, res) => {
    const {billNo, patient, doctor, billDate, charges, tax, discount, total } = req.body;
  
    const newPayment = new Payment({billNo, patient, doctor, billDate, charges, tax, discount, total })
  
    newPayment.save()
      .then(() => res.json(newPayment))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  
  
module.exports = router;