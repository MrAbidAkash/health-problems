/* eslint-disable @typescript-eslint/no-explicit-any */
import AgeMaintainEbook from './AgeMaintainEbook'
import CTASection from './CTASection'
import Features from './Features'
import HeroSection from './HeroSection'
import LuxurySection from './LuxurySection'
import ParcelInfo from './ParcelInfo'
import PricingCards from './PricingCards'
import ProductCheckout from './ProductCheckout'
import SectionOne from './SectionOne'
import SizeChart from './SizeChart'
import SpecialPricing from './SpecialPricing'

const LandingPage = ({ page }: { page: any }) => {
  return (
    <div>
      <div className="hero-bg">
        <div className="max-w-7xl px-10 w-full flex flex-col justify-center items-center mx-auto">
          <HeroSection page={page} />
        </div>
      </div>
      <div className="hero-bg">
        <div className="max-w-7xl px-10 w-full flex flex-col justify-center items-center mx-auto">
          <SectionOne page={page} />
        </div>
      </div>

      <div className="max-w-7xl w-full flex flex-col justify-center items-center mx-auto">
        <SpecialPricing />
        <PricingCards page={page} />
        <CTASection />
      </div>

      <AgeMaintainEbook />

      <div className="bg-[linear-gradient(135deg,#ffffff,#f8f6f3)]">
        <div className="max-w-7xl w-full flex flex-col justify-center items-center mx-auto">
          <LuxurySection />

          {/* <Footer /> */}
        </div>
      </div>
      <div className="b-(--light)">
        <div className="max-w-7xl w-full flex flex-col justify-center items-center mx-auto">
          <SizeChart />
        </div>
      </div>
      <div className="bg-(--light)">
        <div className="max-w-7xl w-full flex flex-col justify-center items-center mx-auto">
          <CTASection />
        </div>
      </div>
      <div className="max-w-7xl w-full flex flex-col justify-center items-center mx-auto bg-white">
        <Features />

        {/* <Footer /> */}
      </div>
      <div className="bg-(--light)">
        <div className="max-w-7xl w-full flex flex-col justify-center items-center mx-auto">
          <ParcelInfo />
          <div id="checkout" className="sm:px-5 px-2 pb-20">
            <ProductCheckout page={page} />{' '}
          </div>
        </div>
      </div>
      <div>
        {' '}
        <a
          href="https://wa.me/+8801558291907?text=Hello!%20I%20want%20to%20know%20more."
          target="_blank"
          aria-label="Chat on WhatsApp"
          className="
    fixed bottom-20 left-6
    w-[60px] h-[60px]
    bg-[#25D366]
    rounded-full
    flex items-center justify-center
    shadow-[0_10px_30px_rgba(0,0,0,0.3)]
    cursor-pointer
    transition-transform
    hover:scale-110
    z-9999!
  "
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
            <path
              fill="#fff"
              d="M16 2.9C8.7 2.9 2.9 8.7 2.9 16c0 2.6.7 5.1 2.1 7.3L3 29l5.9-1.9c2.1 1.1 4.4 1.7 6.8 1.7 7.3 0 13.1-5.8 13.1-12.8S23.3 2.9 16 2.9z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default LandingPage
