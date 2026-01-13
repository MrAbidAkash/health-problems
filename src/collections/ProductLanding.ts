/* eslint-disable @typescript-eslint/no-explicit-any */
// collections/ProductLanding.ts
import { CollectionConfig } from 'payload'

export const ProductLanding: CollectionConfig = {
  slug: 'product-landing',
  access: {
    read: () => true, // ✅ UNCOMMENT THIS for public access
    // ❌ Prevent creating more than one
    create: async ({ req }) => {
      const existing = await req.payload.find({
        collection: 'product-landing',
        limit: 1,
      })

      return existing.totalDocs === 0
    },
    update: () => true,
    delete: () => false,
  },
  admin: {
    useAsTitle: 'productName',
    defaultColumns: ['productName', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'productName',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },

    // Hero / Main
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'text' },
        {
          name: 'mainImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          hasMany: true,
        },
        // { name: 'ctaText', type: 'text', defaultValue: 'Order Now' },
        // { name: 'ctaLink', type: 'text', defaultValue: '#order-form' },
      ],
    },

    // Special Pricing Combos
    {
      name: 'specialPricing',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'price', type: 'number', required: true },
        { name: 'description', type: 'text' }, // Optional: for "Most Popular" tag
        { name: 'offerPrice', type: 'number' }, // Optional: "Save ₹500"
        { name: 'highlight', type: 'checkbox' }, // Optional: "Save ₹500"
      ],
    },
    // Pricing Combos
    {
      name: 'pricing',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'pricingId',
          type: 'text',
          required: true,
          admin: {
            description: 'Internal pricing identifier (e.g. combo_1, combo_2)',
          },
        },
        { name: 'label', type: 'text', required: true },
        { name: 'price', type: 'number', required: true },
        { name: 'description', type: 'text' }, // Optional: for "Most Popular" tag
        { name: 'saving', type: 'text' }, // Optional: "Save ₹500"
        {
          name: 'sizes',
          type: 'array',
          minRows: 1,
          required: true,
          fields: [{ name: 'size', type: 'select', options: ['S', 'M', 'L', 'XL', 'XXL'] }],
        },
      ],
      hooks: {
        beforeChange: [
          ({ value }) => {
            const ids = value?.map((v: any) => v.pricingId)
            const duplicates = ids?.filter((id: string, i: number) => ids.indexOf(id) !== i)

            if (duplicates?.length) {
              throw new Error(`Duplicate pricingId found: ${duplicates.join(', ')}`)
            }

            return value
          },
        ],
      },
    },

    // Countdown Offer
    // {
    //   name: 'offerEnd',
    //   type: 'date',
    //   required: true,
    //   admin: {
    //     date: { pickerAppearance: 'dayAndTime' }, // Enables time selection
    //   },
    // },

    // // Product Info
    // {
    //   name: 'details',
    //   type: 'textarea',
    //   required: true,
    // },

    // Sizes
    // {
    //   name: 'sizes',
    //   type: 'array',
    //   minRows: 1,
    //   fields: [
    //     {
    //       name: 'size',
    //       type: 'text',
    //       required: true,
    //     },
    //   ],
    // },

    // Footer text
    // {
    //   name: 'footer',
    //   type: 'text',
    // },
  ],
}
