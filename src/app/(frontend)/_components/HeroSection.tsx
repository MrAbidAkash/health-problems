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
    <section className="grid grid-cols-2 gap-5 items-center justify-center md:py-12 mb-20 md:mb-14 w-full max-md:px-2">
      <div className="relative max-w-7xl w-full min-h-[50vh] rounded-xl overflow-hidden mt-8">
        {/* Header with countdown */}
        <header className="header-section">
          <div className="main-header">
            <div className="subtitle">💫 বয়স ধরে রাখার বৈজ্ঞানিক কৌশল</div>
            <h1 className="main-title">
              বিজ্ঞান বলছে —<br />
              বয়স থামানো সম্ভব!
            </h1>
            <p className="header-description">
              🔬 নিজের বয়স ১০ বছর পর্যন্ত কমিয়ে ফেলুন বৈজ্ঞানিক পদ্ধতিতে। তরুন থাকা এখন আর শুধু
              ইচ্ছার ব্যাপার নয় — এটা একটি প্রমাণিত কৌশল!
            </p>

            <div className="pricing-section">
              <div className="original-price">
                <span className="price-label">পূর্বের দাম</span>
                <span className="price-amount old">৳১,৫০০</span>
              </div>
              <div className="current-price">
                <span className="price-label">বর্তমান দাম</span>
                <span className="price-amount new">৳৪৯৯</span>
              </div>
              <div className="discount-badge">৬৭% ছাড়</div>
            </div>

            <div className="rating-section">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="rating-text">4.9/5 (২,০০০+ রিভিউ)</div>
              <div className="science-badge">১০০% বৈজ্ঞানিক পদ্ধতি</div>
            </div>

            <div className="product-tagline">
              <h2>বয়স ধরে রাখার গাইডবুক</h2>
              <p>বিজ্ঞান • স্বাস্থ্য • তারুণ্য</p>
            </div>
          </div>
        </header>
      </div>
      <div>hu</div>
    </section>
  )
}
