import React from 'react'

function Map() {
  return (
    <div className='mt-10 lg:mt-12' data-aos="fade-up">
      <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3026.9169988777685!2d22.933373!3d40.65376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839beb1576dcf%3A0xab0878f76d2c73d5!2sYAMAHA%20MATAKOS!5e0!3m2!1sel!2sgr!4v1764714658086!5m2!1sel!2sgr" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
        ></iframe>
      </div>
    </div>
  )
}

export default Map
