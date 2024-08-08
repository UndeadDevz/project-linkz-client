import { useState } from "react";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const Authentication = () => {
  const [logged, setLogged] = useState(false);

  return (
    <div className='h-screen bg-gradient-to-tr from-blue-500 to-green-500 flex items-center justify-center font-nunito'>
      {logged ? (
        <Login setLogged={setLogged} />
      ) : (
        <Register setLogged={setLogged} />
      )}
    </div>
  );
};
