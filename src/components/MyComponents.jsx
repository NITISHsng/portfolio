// import React, { useState, useEffect } from 'react';

// const roles = ['developer', 'blogger'];  // Only these two roles

// export default function RoleTyper() {
//   const [text, setText] = useState('');
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentRole = roles[roleIndex];

//     let timeout;

//     if (isDeleting) {
//       timeout = setTimeout(() => {
//         setText(currentRole.substring(0, charIndex - 1));
//         setCharIndex(charIndex - 1);
//       }, 100);
//     } else {
//       timeout = setTimeout(() => {
//         setText(currentRole.substring(0, charIndex + 1));
//         setCharIndex(charIndex + 1);
//       }, 150);
//     }

//     if (!isDeleting && charIndex === currentRole.length) {
//       timeout = setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
//     } else if (isDeleting && charIndex === 0) {
//       timeout = setTimeout(() => {
//         setIsDeleting(false);
//         setRoleIndex((roleIndex + 1) % roles.length);
//       }, 500); // wait before typing next
//     }

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, roleIndex]);

//   return (
//     <div className="text-2xl font-bold text-center mt-10">
//       I am a <span className="text-blue-600">{text}</span>
//       <span className="animate-pulse">|</span>
//     </div>
//   );
// }
