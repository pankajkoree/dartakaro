"use client";

import { Input } from "@/components/customComponent/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    userImage: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    maritalStatus: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = re.test(user.email);
    if (
      user.userImage !== null &&
      user.firstName !== "" &&
      user.lastName !== "" &&
      isEmailValid &&
      user.phone !== "" &&
      user.age !== "" &&
      user.gender !== "" &&
      user.maritalStatus !== ""
    ) {
      console.log(user);
    } else if (user.userImage === null) {
      console.log("please upload the image");
    } else if (!isEmailValid) {
      console.log("Not valid email");
    } else if (user.firstName === "") {
      console.log("please enter firstname");
    } else if (user.lastName === "") {
      console.log("please enter lastname");
    } else if (user.phone === "") {
      console.log("please enter phone");
    } else if (user.age === "") {
      console.log("please enter age");
    }
  };
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="relative flex flex-col justify-center items-center border border-silver-400 p-2 xl:w-[25%] xl:top-20">
        <h1 className="xl:text-4xl">Register</h1>
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col text-xl gap-2 xl:w-full mt-8"
        >
          <div className="relative flex flex-col justify-center items-center">
            <label>Upload the image</label>
            <input
              id={user.userImage}
              type="file"
              name="userImage"
              placeholder="uplaod the image"
              accept="image/*"
              onChange={(e) => setUser({ ...user, image: e.target.files[0] })}
              className="relative flex text-xl border-2 xl:w-[30%] xl:h-[120px] left-30"
            />
          </div>
          <div>
            <label>Firstname</label>
            <Input
              id={user.firstName}
              type="text"
              name="firstName"
              value={user.firstName}
              placholder="Firstname"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              className="text-xl border-2 border-blue-200 w-full"
            />
          </div>
          <div>
            <label>Lastname</label>
            <Input
              id={user.lastName}
              type="text"
              name="lastname"
              value={user.lastName}
              placholder="Lastname"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              className="text-xl border-2 border-blue-200 w-full"
            />
          </div>
          <div>
            <label>Email</label>
            <Input
              id={user.email}
              type="text"
              name="email"
              value={user.email}
              placholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="text-xl border-2 border-blue-200 w-full"
            />
          </div>
          <div>
            <label>Phone</label>
            <Input
              id={user.phone}
              type="number"
              name="phone"
              value={user.phone}
              placholder="Phone"
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="text-xl border-2 border-blue-200 w-full"
            />
          </div>
          <div>
            <label>Age</label>
            <Input
              id={user.age}
              type="number"
              name="age"
              value={user.age}
              placholder="Age"
              onChange={(e) => setUser({ ...user, age: e.target.value })}
              className="text-xl border-2 border-blue-200 w-full"
            />
          </div>
          <div className="relative flex flex-col">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={user.gender}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
              className="border-2 border-blue-200"
              required
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
          <div className="relative flex flex-col">
            <label htmlFor="maritalStatus">Marital Status</label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={user.maritalStatus}
              onChange={(e) =>
                setUser({ ...user, maritalStatus: e.target.value })
              }
              className="border-2 border-blue-200"
              required
            >
              <option value="" disabled>
                Select your marital status
              </option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </select>
          </div>

          <Button
            type="submit"
            variant="outline"
            className="relative xl:text-2xl xl:p-6 font-semibold border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
