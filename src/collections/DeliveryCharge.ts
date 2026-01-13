// in your payload config file, e.g., payload.config.ts

import { CollectionConfig } from 'payload'

const DeliveryCharge: CollectionConfig = {
  slug: 'delivery-charge',
  labels: {
    singular: 'Delivery Charge',
    // plural: 'Delivery Charges',
  },
  access: {
    read: () => true,
    // ❌ Prevent creating more than one
    create: async ({ req }) => {
      const existing = await req.payload.find({
        collection: 'delivery-charge',
        limit: 1,
      })

      return existing.totalDocs === 0
    },
    update: () => true,
    // delete: () => true,
  },
  fields: [
    {
      name: 'deliveryCharge',
      type: 'number',
      required: true,
      // max: 1,
      defaultValue: 50,
    },
  ],
}

export default DeliveryCharge
