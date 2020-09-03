//   const gallery = document.querySelectorAll('.gallery img');
//   const options = {
//     rootMargin: '50px',
//     threshold: 0.5,
//   };

//   const onEntry = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//           console.log(1);
//       }
//     });
//   };

//   const observer = new IntersectionObserver(onEntry, options);
//   gallery.forEach(img => img);

//   for (let i = 0; i < gallery.length; i += 1) {
//     observer.observe(gallery[i])
//   }

















  // export default function OBS(callback) {
  //   const gallery = document.querySelector('.gallery'),

  //     onEntry = (entries, observer) => {
  //       entries.forEach(entry => {
  //           if (entry.isIntersecting){
  //               console.log(1);
  //           }
  //           });
  //       };

  //       const observer = new IntersectionObserver(onEntry, {
  //         rootMargin: '0px',
  //         threshold: 0.1,
  //       });
  //       observer.observe(gallery);
  //     }
