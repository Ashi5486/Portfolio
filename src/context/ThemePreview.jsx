// import React from 'react';

// const colors = [
//   { name: 'Primary', className: 'bg-[#8245ec]' },
//   { name: 'Secondary', className: 'bg-pink-400' },
//   { name: 'Accent', className: 'bg-[#050414]' },
//   { name: 'Text', className: 'text-white', isText: true },
//   { name: 'Border', className: 'border border-gray-300' },
// ];

// const ThemePreview = () => {
//   return (
//     <div className="grid md:grid-cols-2 gap-8 px-8 py-8">
//       {/* Light Theme Preview */}
//       <div className="rounded-lg border p-4 bg-white text-black shadow-md">
//         <h2 className="text-xl font-bold mb-4">🌞 Light Theme</h2>
//         <div className="space-y-3">
//           {colors.map((color, i) => (
//             <div key={i} className={`h-10 rounded flex items-center justify-between px-4 ${color.className}`}>
//               <span className={color.isText ? '' : 'text-white'}>{color.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dark Theme Preview */}
//       <div className="rounded-lg border p-4 bg-gray-900 text-white shadow-md dark">
//         <h2 className="text-xl font-bold mb-4">🌙 Dark Theme</h2>
//         <div className="space-y-3">
//           {colors.map((color, i) => (
//             <div key={i} className={`h-10 rounded flex items-center justify-between px-4 ${color.className}`}>
//               <span>{color.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThemePreview;
