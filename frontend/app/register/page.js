'use client';

import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = () => {
    // Registro simulado
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow w-80">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Crear cuenta
        </h1>

        <input
          type="text"
          placeholder="Nombre"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Registrarse
        </button>

        <p className="text-sm text-center mt-4">
          ¿Ya tienes cuenta?{' '}
          <a href="/login" className="text-blue-600 underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}
