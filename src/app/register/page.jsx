"use client";

import { Input } from "@/components/customComponent/input";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    married: "",
  });
  return (
    <div className="relative flex justify-center items-center">
      <h1 className="xl:text-4xl">Register</h1>
      <form>
        <label>Firstname</label>
        <Input
          id={user.firstName}
          type="text"
          name="firstName"
          value={user.firstName}
          placholder="Firstname"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          className="text-xl border-2 border-green-300"
        />
      </form>
    </div>
  );
};

export default Register;
