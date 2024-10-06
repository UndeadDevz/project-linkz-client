import { useState } from "react";
import { Login } from "../components/authForms/Login";
import { Register } from "../components/authForms/Register";

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
