"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const gotoRegister = () => {
    router.push("/register");
  };
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Welcome to Our Service
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        Fast, reliable, and scalable registration for your business.
      </p>
      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
        onClick={gotoRegister}
      >
        Register
      </a>
    </div>
  );
}
