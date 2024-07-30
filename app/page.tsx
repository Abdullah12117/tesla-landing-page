import Image from "next/image";
import Head from "next/head";
export default function Home() {
  return (
    <div>
    <section className="bg-main-bg bg-cover bg-center min-h-screen flex flex-col">
      <div className="text-center py-16 flex-1 flex flex-col justify-center items-center mt-18">
        <h1 className="lg:text-5xl text-3xl font-bold pt-12">Model 3</h1>
        <h3 className="lg:text-2xl text-1xl pt-2 font-semibold">$7,500 Federal Tax Credit Available</h3>
        <a href="https://www.tesla.com/model3/design?financeModalTab=finance_options#overview" className="lg:text-2xl text-1xl underline decoration-1 underline-offset-3">
          From $29,990 After Est. Savings
        </a>

        <div className="mt-auto mb-8 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center">
          <a href="#" className="bg-white text-#171a20 px-20 py-2 rounded-lg transition duration-300">Order Now</a>
          <a href="#" className="bg-gray-900 text-white px-20 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Demo Drive</a>
        </div>
      </div>
    </section>
    <section className="bg-2nd-bg bg-cover bg-center min-h-screen flex flex-col">
    <div className="text-center py-16 flex-1 flex flex-col justify-center items-center mt-18">
        <h1 className="lg:text-5xl text-3xl font-bold pt-10">Model Y</h1>
        <div className="flex items-center justify-center pt-2">
        <a href="https://www.tesla.com/modely/design?financeModalTab=finance_options&financeProduct=finplat.AUTO_LOAN%3ALOAN%3ACT_PRIVATE#overview" className="lg:text-2xl text-1xl pt-2 font-semibold underline decoration-1 underline-offset-3">1.99% APR Financing Ending August 21</a>
        
        </div>
        <p  className="lg:text-2xl text-1xl font-semibold" >
        From $31,490        </p>
        <div className="mt-auto mb-8 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center">
          <a href="#" className="bg-white text-#171a20 px-20 py-2 rounded-lg transition duration-300">Order Now</a>
          <a href="#" className="bg-gray-900 text-white px-20 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Demo Drive</a>
        </div>
      </div>
      </section>
      <section className="bg-3rd-bg bg-cover bg-center min-h-screen flex flex-col">
      <div className="text-center py-16 flex-1 flex flex-col justify-center items-center mt-18">
        <h1 className="lg:text-5xl text-3xl font-bold pt-12">Model X</h1>
        <h3 className="lg:text-2xl text-1xl pt-2 font-semibold">From $65,990</h3>
        <a href="https://www.tesla.com/modelx/design?financeModalTab=finance_options&financeProduct=cash#overview://www.tesla.com/model3/design?financeModalTab=finance_options#overview" className="lg:text-2xl text-1xl underline decoration-1 underline-offset-3">
        After $14,000 Est. Savings  </a>

        <div className="mt-auto mb-8 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center">
          <a href="#" className="bg-white text-#171a20 px-20 py-2 rounded-lg transition duration-300">Order Now</a>
          <a href="#" className="bg-gray-900 text-white px-20 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Demo Drive</a>
        </div>
      </div>
      </section>
      <section className="bg-4th-bg bg-cover bg-center min-h-screen flex flex-col">
      <div className="text-center py-16 flex-1 flex flex-col justify-center items-center mt-18">
        <h1 className="lg:text-5xl text-3xl font-bold pt-12 text-white">Model S</h1>
        <h3 className="lg:text-2xl text-1xl pt-2 font-semibold text-white">From $68,490</h3>
        <a href="https://whttps://www.tesla.com/models/design?financeModalTab=finance_options&financeProduct=cash#overviewww.tesla.com/modelx/design?financeModalTab=finance_options&financeProduct=cash#overview://www.tesla.com/model3/design?financeModalTab=finance_options#overview" className="lg:text-2xl text-1xl underline decoration-1 underline-offset-3 text-customeGrey">
        After $65,00 Est. Savings  </a>

        <div className="mt-auto mb-8 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center">
          <a href="#" className="bg-white text-#171a20 px-20 py-2 rounded-lg transition duration-300">Order Now</a>
          <a href="#" className="bg-gray-900 text-white px-20 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Demo Drive</a>
        </div>
      </div>
      </section>
      <section className="bg-5th-bg bg-cover bg-center min-h-screen flex flex-col">
      <div className="text-center py-16 flex-1 flex flex-col justify-center items-center mt-18">
        <div className="mb-4 pt-12">
          <Image src="/icon.svg" alt="logo" width={500} height={200} />
        
        </div>

        <div className="mt-auto mb-8 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center">
          <a href="#" className="bg-black-bg text-txtgrey px-20 py-3 hover:bg-gray-700 transition duration-300">Order Now</a>
          <a href="#" className="bg-black-bg text-txtgrey px-20 py-3  hover:bg-gray-700 transition duration-300">Learn More</a>
        </div>
      </div>
      </section>
      <section className="bg-6th-bg bg-cover bg-center min-h-screen flex flex-col">
      <div className="text-center py-16 flex-1 flex flex-col justify-center items-center mt-18">
        <h1 className="lg:text-5xl text-3xl font-bold pt-12 text-white">Solar Panels</h1>
        <a href="https://www.tesla.com/event/schedule-virtual-energy-consultations://whttps://www.tesla.comhttps://www.tesla.com/event/schedule-virtual-energy-consultations/models/design?financeModalTab=finance_options&financeProduct=cash#overviewww.tesla.com/modelx/design?financeModalTab=finance_options&financeProduct=cash#overview://www.tesla.com/model3/design?financeModalTab=finance_options#overview" className="lg:text-2xl text-1xl underline decoration-1 underline-offset-3 text-customeGrey font-semibold">
        Schedule a Virtual Consultation  </a>

        <div className="mt-auto mb-8 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center">
          <a href="#" className="bg-white text-#171a20 px-20 py-2 rounded-lg transition duration-300">Order Now</a>
          <a href="#" className="bg-gray-900 text-white px-20 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Learn More</a>
        </div>
      </div>
      </section>
      <section className="bg-7th-bg bg-cover bg-center min-h-screen flex flex-col">
      <div className="text-center py-16 flex-1 flex flex-col justify-center items-center mt-18">
        <h1 className="lg:text-5xl text-3xl font-bold pt-12 ">Solar Roof</h1>
        <h3 className="lg:text-2xl text-1xl pt-2 font-semibold ">Produce Clean Energy From Your Roof</h3>

        <div className="mt-auto mb-8 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center">
          <a href="#" className="bg-white text-#171a20 px-20 py-2 rounded-lg transition duration-300">Order Now</a>
          <a href="#" className="bg-gray-900 text-white px-20 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Learn More</a>
        </div>
      </div>
      </section>
      <section className="bg-8th-bg bg-cover bg-center min-h-screen flex flex-col">
      <div className="text-center py-16 flex-1 flex flex-col justify-center items-center mt-18">
        <h1 className="lg:text-5xl text-3xl font-bold pt-12 ">Powerwall</h1>
        <div className="mt-auto mb-8 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center">
          <a href="#" className="bg-white text-#171a20 px-20 py-2 rounded-lg transition duration-300">Order Now</a>
          <a href="#" className="bg-gray-900 text-white px-20 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Learn More</a>
        </div>
      </div>
      </section>
      <section className="bg-9th-bg bg-center bg-cover min-h-screen flex flex-col">
      <div className="text-center py-16 flex-1 flex flex-col justify-center items-center mt-18">
        <h1 className="lg:text-5xl text-1xl font-bold pt-12 ">Accessories</h1>
        <div className="mt-auto mb-8 flex space-x-4 justify-center">
          <a href="#" className="bg-white text-#171a20 px-20 py-2 rounded-lg transition duration-300">shop Now</a>

        </div>
      </div>
      </section>
      <section className="bg-black bg-center bg-cover h-auto flex flex-col justify-between items-center">
  <div className="text-txtgrey text-sm pt-10 lg:px-40 px-0">
    <p className="text-center lg:px-40 px-4"> $7,500 Federal Tax Credit available for eligible buyers and subject to MSRP caps. Model 3 Rear-Wheel Drive not eligible.</p>
    <p className="text-center lg:px-40 px-4 pt-4"> Price before estimated savings is $42,490, excluding taxes and fees. Subject to change. Estimated savings includes $5,000 in estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. </p>
    <p className="text-center lg:px-40 px-4 pt-4">Price before estimated savings is $44,990, excluding taxes and fees. Subject to change. Estimated savings includes $5,000 in estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps.</p>
    <p className="text-center lg:px-40 px-4 pt-4">Price before estimated savings is $79,990, excluding taxes and fees. Subject to change. Estimated savings includes $5,000 in estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps.</p>
    <p className="text-center lg:px-40 px-4 pt-4">Price before estimated savings is $74,990, excluding taxes and fees. Subject to change. Estimated savings includes $5,000 in estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps.</p>
  </div>
  <footer className="text-txtgrey font-semibold text-xs pb-4 flex flex-col items-center">
    
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 pt-2 pb-3 items-center">
    <a href="#" className="hover:underline">Tesla © 2024</a>
      <a href="#" className="hover:underline">Privacy & Legal</a>
      <a href="#" className="hover:underline">Vehicle Recalls</a>
      <a href="#" className="hover:underline">Contact</a>
      <a href="#" className="hover:underline">News</a>
      <a href="#" className="hover:underline">Get Updates</a>
      <a href="#" className="hover:underline">Locations</a>
    </div>
  </footer>
</section>

    </div>
  );
}
