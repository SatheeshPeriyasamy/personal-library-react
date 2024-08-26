// // import React from 'react';
// // import { auth } from '../firebase/config';
// // import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// // const SignIn = () => {
// //   const signInWithGoogle = () => {
// //     const provider = new GoogleAuthProvider();
// //     signInWithPopup(auth, provider);
// //   };

// //   return (
// //     <div>
// //       <h2>Please Sign In</h2>
// //       <button onClick={signInWithGoogle}>Sign in with Google</button>
// //     </div>
// //   );
// // };

// // export default SignIn;


// import React from 'react';
// import { auth } from '../firebase/config';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// const SignIn = () => {
//   const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // Handle result
//       })
//       .catch((error) => {
//         console.error("Error signing in: ", error);
//       });
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '50px' }}>
//       <h1>Welcome to Your Personal Library</h1>
//       <p>Organize your reading life, track your progress, and discover new books. Sign in to start building your library!</p>

//       {/* Add an image or an icon to make it visually appealing */}
//       <img 
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdSB3HRkaUONd5OIi0dpa3RZJSUjyVoAZJQ&s" 
//         alt="Bookshelf illustration"
//         style={{ margin: '20px auto', display: 'block' }}
//       />

//       <p>Keep track of the books you love, create personalized lists, and explore new recommendations. Whether you're a fiction fan or a non-fiction enthusiast, this app is the perfect companion for all your reading adventures.</p>

//       <button 
//         onClick={signInWithGoogle} 
//         style={{ 
//           padding: '10px 20px', 
//           fontSize: '16px', 
//           backgroundColor: '#4285F4', 
//           color: 'white', 
//           border: 'none', 
//           borderRadius: '5px', 
//           cursor: 'pointer'
//         }}>
//         Sign in with Google
//       </button>
//     </div>
//   );
// };

// export default SignIn;


import React from 'react';
import { auth } from '../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './SignIn.css';  // Import your CSS file

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle result
      })
      .catch((error) => {
        console.error("Error signing in: ", error);
      });
  };

  return (
    <div className="signin-container">
      <h1 className="signin-header">Welcome to Your Personal Library</h1>
      <p className="signin-description">
        Organize your reading life, track your progress, and discover new books. Sign in to start building your library!
      </p>

      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdSB3HRkaUONd5OIi0dpa3RZJSUjyVoAZJQ&s" 
        alt="Bookshelf illustration"
        className="signin-image"
      />

      <h2>Features you'll love:</h2>
      <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '400px' }}>
        <li>📚 Organize your personal library by categories and genres</li>
        <li>📝 Keep track of books you've read, want to read, or are currently reading</li>
        <li>🔍 Search for books, filter by genre, and sort your collection easily</li>
        <li>📊 View reading stats and progress over time</li>
      </ul>

      <button 
        onClick={signInWithGoogle} 
        className="signin-button"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
