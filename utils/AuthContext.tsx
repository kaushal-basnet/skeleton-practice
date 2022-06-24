import { onAuthStateChanged } from "firebase/auth";
import { useState, createContext } from "react";
import { auth } from "./firebase";

interface Props {
  user: any;
  setUser: any;
  loading: any;
  setLoading: any;
}

export const Context = createContext<Partial<Props>>({});
export const Provider = (props: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   console.log(info, "user");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("context", user);
      setUser(user);
      const uid = user.uid;
    }
  });

  return (
    <Context.Provider value={{ user, setUser, loading, setLoading }}>
      {props.children}
    </Context.Provider>
  );
};
