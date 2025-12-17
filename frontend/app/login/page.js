'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // Login simulado
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow w-80">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Iniciar sesión
        </h1>

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
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>

        <p className="text-sm text-center mt-4">
          ¿No tienes cuenta?{' '}
          <a href="/register" className="text-blue-600 underline">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}
