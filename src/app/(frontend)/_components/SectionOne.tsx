'use client'

import React, { useState, useEffect } from 'react'

export default function SectionOne({ page }: { page: any }) {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              আপনার দাম্পত্য জীবন আরও পূর্ণ করুন
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              আপনি কি চান আপনার দাম্পত্য জীবনকে আরও পরিপূর্ণ, গভীর ও সুখময় করে তুলতে?
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              এবার বিজ্ঞানের আলোকে জানুন — কীভাবে শারীরিক ও মানসিকভাবে সুস্থ থেকে গড়ে তুলবেন এক
              পরিপূর্ণ ঘনিষ্ঠ সম্পর্ক।
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">এই ই-বুকে পাবেন:</p>
            <ul className="space-y-2 text-gray-300">
              <li>✓ ঘনিষ্ঠ সম্পর্কের পেছনের বাস্তব বিজ্ঞান</li>
              <li>✓ শারীরবৃত্তীয় ব্যাখ্যা এবং সমাধান</li>
              <li>✓ মানসিক সামঞ্জস্য রক্ষার উপায়</li>
              <li>✓ দীর্ঘস্থায়ী সুখের জন্য বাস্তব কৌশল</li>
            </ul>
          </div>

          <div className="bg-blue-900 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🔬</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">বৈজ্ঞানিক পদ্ধতি</h4>
                  <p className="text-gray-400">
                    চিকিৎসা বিশেষজ্ঞদের দ্বারা যাচাইকৃত প্রমাণভিত্তিক তথ্য
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">💬</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">সহজ ভাষায় লেখা</h4>
                  <p className="text-gray-400">জটিল বিষয় সহজভাবে বোঝানো হয়েছে</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">🎯</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">ব্যবহারিক সমাধান</h4>
                  <p className="text-gray-400">প্রতিটি সমস্যার বাস্তব সমাধান দেওয়া আছে</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
