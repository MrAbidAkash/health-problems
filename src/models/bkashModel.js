// const mongoose = require('mongoose')

// const bkashPaymentSchema = new mongoose.Schema(
//   {
//     paymentID: { type: String, required: true, unique: true },
//     amount: { type: Number, required: true },
//     currency: { type: String, default: 'BDT' },
//     merchantInvoiceNo: { type: String },
//     payerReference: { type: String },
//     transactionStatus: { type: String },
//     trxID: { type: String },
//     payerAccount: { type: String },
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // optional if user is logged in
//   },
//   { timestamps: true },
// )

// module.exports = mongoose.model('BkashPayment', bkashPaymentSchema)

// // Callback execute response: {
// //     paymentID: 'TR0011FmkI9VV1760611265064',
// //     trxID: 'CJG60NLTWG',
// //     transactionStatus: 'Completed',
// //     amount: '100',
// //     currency: 'BDT',
// //     intent: 'sale',
// //     paymentExecuteTime: '2025-10-16T16:41:21:059 GMT+0600',
// //     merchantInvoiceNumber: 'INV_1760611264784',
// //     payerType: 'Customer',
// //     payerReference: 'user-id-or-phone',
// //     customerMsisdn: '01619777283',
// //     payerAccount: '01619777283',
// //     maxRefundableAmount: '100',
// //     statusCode: '0000',
// //     statusMessage: 'Successful'
// //   }
