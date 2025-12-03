import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Header } from '@/components/Header';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export const ProfessorLogin: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await login(email, password);
      
      if (result.success) {
        toast.success('Bem-vindo ao English Quizz CIEL CURSOS!');
        navigate('/professor/dashboard');
      } else {
        toast.error(result.error || 'Credenciais inválidas.');
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar fazer login.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactClick = () => {
    toast.info('Funcionalidade de contato será implementada em breve!');
  };

  return (
    <div className="w-full min-h-screen relative bg-[#605BEF]">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full z-0">
        <img
          src="/bg.svg"
          alt="Background pattern"
          className="w-full h-full object-cover opacity-100"
          onError={(e) => console.error('Erro ao carregar imagem:', e)}
          onLoad={() => console.log('Imagem carregada com sucesso')}
        />
      </div>
      
      {/* Header */}
      <div className="relative z-10">
        <Header/>
      </div>
      
      {/* Login Form */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-32 pb-12">
        <div className="w-full max-w-md bg-gray-50 rounded-2xl p-8 border-4 border-[#4441AA]">
          <div className="flex flex-col items-center mb-8">
            <img src="../public/Logo.svg" width='150px' alt="Logo" className="mb-4" />
            <h2 className="text-3xl font-bold text-[#605BEF] text-center mb-2">
              Login do Professor
            </h2>
            <p className="text-gray-600 text-center">
              Acesse sua conta para gerenciar quizzes
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5 w-100%">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#605BEF] focus:border-transparent outline-none transition"
                placeholder="seu.email@exemplo.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#605BEF] focus:border-transparent outline-none transition"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#605BEF] text-white py-3 rounded-lg font-semibold hover:bg-[#4f4bd9] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#605BEF] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-[#605BEF] hover:underline text-sm"
            >
              ← Voltar para início
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
