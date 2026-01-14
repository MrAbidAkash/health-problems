'use client'

import React, { useState, useEffect } from 'react'

export default function HeroSection({ page }: { page: any }) {
  const images = page?.hero?.mainImage || []
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    if (images.length === 0) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="grid grid-cols-2 gap-5 items-center justify-center md:py-12  w-full max-md:px-2">
      <div className="relative max-w-7xl w-full min-h-[50vh] rounded-xl overflow-hidden mt-8">
        {/* Header with countdown */}
        <header className="header-section ">
          <div className="main-header text-white text-start">
            <h1 className="main-title text-white text-sm">
              যৌ*ন স্বাস্থ্য সমস্যা ও সমাধানের Complete Guideline
            </h1>

            <h2 className="text-white text-4xl my-5"> পূর্ণাঙ্গ গাইড </h2>
            <p className="header-description text-white text-2xl">
              Professional Grade • High Resolution
            </p>
            <div className="glass-card p-6 mb-8">
              <div className="flex items-center gap-6 mb-4">
                <div className="text-center">
                  <div className="text-sm text-gray-400 bengali-text">পূর্বের দাম</div>
                  <div className="text-2xl text-red-400 line-through font-bold">৳১৫,০০০</div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-accent bengali-text">বর্তমান দাম</div>
                  <div className="text-4xl font-bold price-highlight">৳৪৯৯</div>
                </div>

                <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-center">
                  <div className="text-sm font-bold bengali-text">৯৭% সাশ্রয়</div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="countdown-modern">
                <div className="text-center mb-4">
                  <span className="text-lg font-semibold bengali-text text-accent">
                    ⏰ অফার শেষ হবে:
                  </span>
                </div>

                <div className="flex justify-center gap-3">
                  <div className="countdown-box">
                    <div className="text-2xl font-bold">01</div>
                    <div className="text-xs bengali-text">দিন</div>
                  </div>

                  <div className="countdown-box">
                    <div className="text-2xl font-bold">23</div>
                    <div className="text-xs bengali-text">ঘন্টা</div>
                  </div>

                  <div className="countdown-box">
                    <div className="text-2xl font-bold">40</div>
                    <div className="text-xs bengali-text">মিনিট</div>
                  </div>

                  <div className="countdown-box">
                    <div className="text-2xl font-bold">22</div>
                    <div className="text-xs bengali-text">সেকেন্ড</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://digibeex.com/purchase/complete-guideline-on-sexual-health-problems/"
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:scale-105 transition-all shadow-2xl border-2 border-primary/30 hover:border-accent/50 hover:shadow-primary/30"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>🚀</span>
                  <span className="whitespace-nowrap">ইনস্ট্যান্ট ডাউনলোড - ৳৪৯৯</span>
                </span>
              </a>

              <button
                type="button"
                className="glass-card text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:scale-105 transition-all border border-white/20 hover:border-white/40 hover:bg-white/10"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>📋</span>
                  <span>বিস্তারিত দেখুন</span>
                </span>
              </button>
            </div>

            <div className="rating-section flex items-center gap-5 mt-10">
              <div className="rating-text">
                <span className="stars">⭐⭐⭐⭐⭐</span>
                4.9/5 (২,০০০+ রিভিউ)
              </div>
              <div className="text-lg -mt-2 flex items-center gap-1">
                <span className="w-4 h-4">
                  <svg
                    className="w-4 h-4 mr-1 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>১০০% নিরাপদ ও নির্ভরযোগ্য</span>
              </div>
            </div>

          </div>
        </header>
      </div>
      <div>
        {' '}
        <div className="glass-card p-8 floating-element">
          <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 text-center text-white">
            <svg
              className="w-32 h-32 mx-auto mb-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0zm0 0V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2M7 13h10l-4-8H7l4 8z"
              />
            </svg>

            <h3 className="text-2xl font-bold mb-2 bengali-text">
              যৌ*ন স্বাস্থ্য সমস্যা ও সমাধানের Complete Guideline
            </h3>

            <p className="text-gray-200 bengali-text">PDF + JPG + AutoCAD ফরম্যাট</p>
          </div>
        </div>
      </div>
    </section>
  )
}
