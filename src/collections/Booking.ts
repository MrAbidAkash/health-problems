import { CollectionConfig } from 'payload'

const Booking: CollectionConfig = {
  slug: 'booking',
  admin: {
    useAsTitle: 'bookingId',
    defaultColumns: [
      'bookingID',
      'product',
      'pricingId',
      'amount',
      'user',
      'paymentStatus',
      'updatedAt',
    ],
  },
  fields: [
    { name: 'bookingId', type: 'text', required: true },
    // ✅ Relation to ProductLanding
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'product-landing',
      required: true,
    },

    // ✅ Which pricing option user selected
    {
      name: 'pricingId',
      type: 'text',
      required: true,
      admin: {
        description: 'pricing.pricingId from ProductLanding',
      },
    },
    { name: 'size', type: 'text' },
    { name: 'amount', type: 'number' },
    { name: 'currency', type: 'text', defaultValue: 'BDT' },
    { name: 'merchantInvoiceNo', type: 'text' },
    { name: 'payerReference', type: 'text' },
    // { name: 'trxID', type: 'text' },
    {
      name: 'paymentStatus',
      type: 'select',
      options: ['Pending', 'Completed', 'Failed'],
      defaultValue: 'Pending',
    },
    {
      name: 'user',
      type: 'text',
    },
    {
      name: 'customerInfo',
      type: 'json',
    },
  ],
}

export default Booking
