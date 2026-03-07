// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// export default function Gallery() {
//   const images = [
//     "/images/event1.jpg",
//     "/images/event2.jpg",
//     "/images/event3.jpg",
//     "/images/event4.jpg",
//     "/images/event5.jpg",
//     "/images/event6.jpg"
//   ];

//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Modern Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <span className="w-12 h-[2px] bg-blue-600 rounded-full" />
//               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
//                 Visual Journey
//               </span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
//               CAMPUS <span className="text-slate-400 font-light italic">MOMENTS</span>
//             </h2>
//           </div>
//           <p className="text-slate-500 text-sm max-w-xs leading-relaxed border-l-2 border-slate-100 pl-6">
//             Exploring the vibrant life, events, and academic achievements at RNS Public School.
//           </p>
//         </div>

//         {/* Swiper Container */}
//         <div className="relative group">
//           <Swiper
//             modules={[Autoplay, Pagination]}
//             spaceBetween={30}
//             slidesPerView={1.2} // Shows a peek of the next slide
//             centeredSlides={true}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3, centeredSlides: false },
//             }}
//             className="pb-16 !overflow-visible" 
//           >
//             {images.map((img, index) => (
//               <SwiperSlide key={index}>
//                 <div className="relative h-[450px] w-full group/card transition-all duration-700">
//                   {/* Image Container */}
//                   <div className="w-full h-full overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-100 shadow-sm group-hover/card:shadow-2xl group-hover/card:shadow-blue-900/10 transition-all duration-500">
//                     <img
//                       src={img}
//                       alt="School Event"
//                       className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover/card:scale-110"
//                     />
                    
//                     {/* Minimal Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-end p-8">
//                       <div className="translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
//                         <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
//                           RNS Highlights
//                         </span>
//                         <p className="text-white font-bold text-lg">Annual Celebration 2026</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Bottom Call to Action */}
//         <div className="mt-10 flex justify-center">
//           <div className="inline-flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
//              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//                Swipe to explore more
//              </span>
//              <div className="flex gap-1">
//                 <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
//                 <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0.2s]" />
//                 <span className="w-1.5 h-1.5 rounded-full bg-blue-200 animate-bounce [animation-delay:0.4s]" />
//              </div>
//           </div>
//         </div>

//       </div>

//       <style jsx global>{`
//         .swiper-pagination-bullet-active {
//           background: #2563eb !important;
//           width: 24px !important;
//           border-radius: 10px !important;
//         }
//         .swiper-pagination {
//           bottom: 0 !important;
//         }
//       `}</style>
//     </section>
//   );
// }