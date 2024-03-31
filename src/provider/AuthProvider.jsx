import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../config/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  //   SIGNUP USER
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   LOGIN USER
  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   LOGOUT USER
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  // GOOGLE SIGNUP/SIGNIN

  const handleGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  //   UPDATE PROFILE
  const handleUpdate = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
  };

  //   ALL FIREBASE VALUE HERE
  const values = {
    createUser,
    login,
    logOut,
    handleUpdate,
    user,
    isloading,
    handleGoogle,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
