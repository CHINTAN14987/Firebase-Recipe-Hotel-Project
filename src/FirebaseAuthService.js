import firebase from "./FirebaseConfig";

const auth = firebase.auth();
const registerUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

const loginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

const LogoutUser = () => {
  return auth.signOut();
};

const sendPasswordResetEmail = (email) => {
  return auth.sendPasswordResetEmail(email);
};
const loginwithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(provider);
};

const subscribeToAuthChanges = (handleAuthChange) => {
  auth.onAuthStateChanged((user) => {
    handleAuthChange(user);
  });
};
const firebaseAuthService = {
  registerUser,
  loginUser,
  sendPasswordResetEmail,
  loginwithGoogle,
  LogoutUser,
  subscribeToAuthChanges,
};
export default firebaseAuthService;
