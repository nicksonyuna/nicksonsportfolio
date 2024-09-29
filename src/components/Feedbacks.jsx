// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { certifications } from "../constants";

// const CertificationCard = ({ title, image, description }) => (
//   <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
//     <img src={image} alt={title} className='w-16 h-16 mx-auto mb-4' />
//     <p className='text-gray-800 font-semibold text-lg'>{title}</p>
//     <p className='text-gray-600 text-sm'>{description}</p>
//   </div>
// );

// const Certifications = () => {
//   const certifications = [
//     { 
//       title: "Certified Java Developer", 
//       image: "path/to/java-cert.png", 
//       description: "Earned certification in Java development." 
//     },
//     { 
//       title: "Web Development Mastery", 
//       image: "path/to/web-cert.png", 
//       description: "Certified in full-stack web development." 
//     },
//     // Add more certifications here
//   ];

//   return (
//     <div className='mt-12 bg-gray-100 rounded-2xl'>
//       <div className='bg-tertiary rounded-2xl min-h-[300px] p-8'>
//         <h2 className='text-5xl font-bold'>My Certifications</h2>
//       </div>
//       <div className='-mt-16 pb-12 px-6 flex flex-wrap gap-8'>
//         {certifications.map((cert, index) => (
//           <CertificationCard key={index} {...cert} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Certifications, "");