import { useState } from "react";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { register } from "../../services/loginService";

interface Props {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RegisterInputs {
  email: string;
  password: string;
  username: string;
}

export const Register = ({ setLogged }: Props) => {
  const [registerInputs, setRegisterInputs] = useState<RegisterInputs>({
    email: "",
    password: "",
    username: "",
  });

  const [createdResponse, setCreatedResponse] = useState({
    message: "",
    color: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreatedResponse({
      message: "",
      color: "",
    });
    setRegisterInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const response = await register(registerInputs);
    if (response.username) {
      setCreatedResponse({
        message: "User created succefully",
        color: "text-green-500",
      });
    } else {
      setCreatedResponse({
        message: "Error while creating user",
        color: "text-red-500",
      });
    }
  };
  return (
    <div className="h-5/6 shadow rounded-lg w-1/3 bg-white p-7 flex flex-col items-center justify-between">
      <div className="flex flex-col gap-3 pt-10 w-4/6">
        <div className="font-bold text-3xl text-center">Register</div>
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <div className="flex flex-row gap-2 items-start">
            <MdOutlineEmail className="text-gray-400 mt-1" />
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Type your username"
              className="outline-none border-b-2 border-gray-200 pb-2"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <div className="flex flex-row gap-2 items-start">
            <MdOutlineEmail className="text-gray-400 mt-1" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Type your email"
              className="outline-none border-b-2 border-gray-200 pb-2"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <div className="flex flex-row gap-2 items-start">
            <MdOutlineLock className="text-gray-400 mt-1" />

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Type your password"
              className="outline-none border-b-2 border-gray-200 pb-2"
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 h-10 text-white font-semibold mt-6"
          onClick={handleRegister}
        >
          Register
        </button>
        {createdResponse.message && (
          <div
            className={`flex items-center justify-center p-2 ${createdResponse.color}`}
          >
            {createdResponse.message}
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div>Already registered?</div>
        <button
          className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 h-10 text-white font-semibold mt-6"
          onClick={() => setLogged(true)}
        >
          Login
        </button>
      </div>
    </div>
  );
};
