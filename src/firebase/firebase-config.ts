const config = {
    apiKey: "AIzaSyCU2p9iQ1ySTkpEewHWWnMT3VN_dkk-d5E",
  authDomain: "past-papers-e2f09.firebaseapp.com",
  projectId: "past-papers-e2f09",
  storageBucket: "past-papers-e2f09.appspot.com",
  messagingSenderId: "904161698968",
  appId: "1:904161698968:web:d1000944854ddbf307dced",
  measurementId: "G-24HBL2MS7G"
  };

  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.ts');
    } else {
      return config;
    }
  }