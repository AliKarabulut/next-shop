'use client'
import { useState } from 'react'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // if (password !== confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }

    // if (password.length < 8) {
    //   alert("Password must be at least 8 characters long");
    //   return;
    // }

    // if (firstName.length < 2 || lastName.length < 2) {
    //   alert("First name and last name must be at least 2 characters long");
    //   return;
    // }

    // const response = await fetch("/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password, firstName, lastName }),
    // });

    // const data = await response.json();
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md">
      <div className="mb-4">
        <label htmlFor="email" className="text-gray-700 mb-2 block font-bold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="text-gray-700 mb-2 block font-bold">
          Şifre:
        </label>
        <input
          type="password"
          id="password"
          className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="text-gray-700 mb-2 block font-bold">
          Şifre Tekrar:
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="firstName" className="text-gray-700 mb-2 block font-bold">
          İsim:
        </label>
        <input
          type="text"
          id="firstName"
          className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="text-gray-700 mb-2 block font-bold">
          Soyisim:
        </label>
        <input
          type="text"
          id="lastName"
          className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 focus:shadow-outline rounded px-4 py-2 font-bold text-white focus:outline-none">
          Kayıt Ol
        </button>
      </div>
    </form>
  )
}

export default RegisterForm
