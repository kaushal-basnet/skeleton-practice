import { useRouter } from "next/router";
import { useState, useEffect, createContext } from "react";

interface editElemType {
  editElem: string;
  editInd: number | null;
}
interface Props {
  user: any;
  setUser: any;
}

export const Context = createContext<Partial<Props>>({});
export const Provider = (props: any) => {
  const [user, setUser] = useState({
    email: "",
    uid: "",
  });

  return (
    <Context.Provider value={{ user, setUser }}>
      {props.children}
    </Context.Provider>
  );
};
