import Rebase from 're-base';
import Firebase from 'firebase';
const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyAxBmR_IdAQzTmv4RN4uXoasT8Q5al3kek",
      authDomain: "react-cv-d3e03.firebaseapp.com",
      databaseURL: "https://react-cv-d3e03.firebaseio.com"
});
const base = Rebase.createClass(firebaseApp.database());
//named export
export { firebaseApp };
export default base;