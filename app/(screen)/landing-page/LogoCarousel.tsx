// import Image from 'next/image'
// import logo from "../../../public/badge.jpeg"
// import logo1 from "../../../public/logo.png"
// import logo2 from "../../../public/herobg2.png"
// import logo3 from "../../../public/sharpbg.jpg"



// export default function Section6() {

//   const logos = [
//     { 
//         id:1,
//         img:logo1,
//         alt:"logo",
//      },
    
//     { 
//         id:2,
//         img:logo2,
//         alt:"logo",
//      },
    
//     { 
//         id:3,
//         img:logo3,
//         alt:"logo",
//      },
    
//     { 
//         id:4,
//         img:logo,
//         alt:"logo",
//      },
    
//     { 
//         id:5,
//         img:logo1,
//         alt:"logo",
//      },
    
//     { 
//         id:6,
//         img:logo2,
//         alt:"logo",
//      },
    
//   ]

//   return (
//     <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] min-h[150px]">
//       <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
//         {logos.map((el:any) => (
//           <li key={el.id}>
//             <Image src={el.img} alt={el.alt} width={1000} height={1000} className='w-[100px] h-[100px]' />
//           </li>
//         ))}
//       </ul>
//       <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
//         {logos.map((el) => (
//           <li key={el.id}>
//             <Image src={el.img} alt={el.alt} width={1000} height={1000} className='w-[100px] h-[100px]' />
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }


import Image from 'next/image'
import logo from "../../../public/badge.jpeg"
import logo1 from "../../../public/logo.png"
import logo2 from "../../../public/herobg2.png"
import logo3 from "../../../public/sharpbg.jpg"

export default function LogoCarousel() {

  const logos = [
    { src: logo, alt: 'Disney' },
    { src: logo1, alt: 'Airbnb' },
    { src: logo2, alt: 'Apple' },
    { src: logo3, alt: 'Spark' },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} className='w-[100px] h-[70px] ' />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} className='w-[100px] h-[70px] ' />
          </li>
        ))}
      </ul>
    </div>
  )
}