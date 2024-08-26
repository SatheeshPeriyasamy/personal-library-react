// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// // const firebaseConfig = {
    
// //   apiKey: "YOUR_API_KEY",
// //   authDomain: "YOUR_AUTH_DOMAIN",
// //   projectId: "YOUR_PROJECT_ID",
// //   storageBucket: "YOUR_STORAGE_BUCKET",
// //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
// //   appId: "YOUR_APP_ID"
// // };

// const firebaseConfig = {
//     apiKey: "AIzaSyAyjvCdrK4Z-Zo5XC0L4qDT-Q5AZMTuYYk",
//     authDomain: "personal-library-60e75.firebaseapp.com",
//     projectId: "personal-library-60e75",
//     storageBucket: "personal-library-60e75.appspot.com",
//     messagingSenderId: "573510994581",
//     appId: "1:573510994581:web:170b0310cf44c72027699c"
//   };
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const firestore = getFirestore(app);
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyAyjvCdrK4Z-Zo5XC0L4qDT-Q5AZMTuYYk",
        authDomain: "personal-library-60e75.firebaseapp.com",
        projectId: "personal-library-60e75",
        storageBucket: "personal-library-60e75.appspot.com",
        messagingSenderId: "573510994581",
        appId: "1:573510994581:web:170b0310cf44c72027699c"
      };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export instances
export const auth = getAuth(app);
export const firestore = getFirestore(app);
