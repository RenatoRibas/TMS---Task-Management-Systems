import React from 'react';
import './styles.css';
import wolferLogo from "../../images/wolfer.png";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center"> {/* Adicione h-screen */}
      <div className="flex w-2/5 flex-col items-center rounded-md bg-gray-100 p-5 shadow-md">
        <img src={wolferLogo} alt="Wolfer Logo" className="mb-4 w-1/4 max-w-xs" />
        <h1 className="pb-3 text-center text-3xl font-bold text-blue-900">Login</h1>
        <label className="pb-1">Usuário:</label>
        <input
          type="text"
          className="rounded-md border-gray-300 p-2 focus:outline-none focus:border-blue-500"
          placeholder="Digite seu usuário..."
        />

        <label className="pb-1 mt-3">Senha:</label>
        <input
          type="password"
          className="rounded-md border-gray-300 p-2 focus:outline-none focus:border-blue-500"
          placeholder="Digite sua senha..."
        />

        <div className="mt-3 flex w-full flex-col text-center">
          <button className="w-1/4 rounded-md bg-blue-600 p-2 text-center font-semibold text-white hover:bg-blue-500 focus:outline-none">
            Login
          </button>
          <p className="mt-2"> ou </p>
          <button className="font-semibold text-blue-600 hover:text-blue-400 focus:outline-none">
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
}
