import { createContext, useState } from "react";

type User = {
  name: string;
  email: string;
  password: string;
} | null;

type FormContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const formContext = createContext<FormContextType | null>(null);

export function FormProvider({ children }: any) {
  const [user, setUser] = useState<User>(null);

  return (
    <formContext.Provider value={{ user, setUser }}>
      {children}
    </formContext.Provider>
  );
}