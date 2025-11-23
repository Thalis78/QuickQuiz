import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

export const ProfessorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  

  const handleCreateQuiz = () => {
    // TODO: Navegar para página de criar quiz quando estiver pronta
    alert('Funcionalidade de criar quiz será implementada em breve!');
  };

  const handleLogout = () => {
    logout();
    toast({
      title: 'Logout realizado',
      description: 'Até logo!',
    });
    navigate('/');
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
      <Header />
      
      {/* Dashboard Content */}
      <main className="relative z-[1] px-4 pt-32 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-[#4441AA]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-[#605BEF] mb-2">
                  Dashboard do Professor
                </h1>
                <p className='text-[#605BEF] font-bold text-lg'>
                    Bem-vindo, {user?.name}!
                </p>
                <p className="text-[#605BEF] font-semibold">
                     Gerencie seus quizzes aqui.
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="px-6 py-2 border-2 border-[#ee8697] text-[#ee8697] rounded-lg font-semibold hover:bg-[#ee8697] hover:text-white transition duration-200"
              >
                Sair
              </button>
            </div>
            
            {/* Action Button */}
            <button
              onClick={handleCreateQuiz}
              className="w-full sm:w-auto bg-[#FFC000] text-[#605BEF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ffb800] transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              + Criar Novo Quiz
            </button>
          </div>
          
          {/* Quizzes List Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-[#4441AA]">
            <h2 className="text-2xl font-bold text-[#605BEF] mb-6">
              Meus Quizzes
            </h2>
            
            {/* Placeholder - Will be replaced with actual quiz list */}
            <div className="text-center py-12 text-gray-500">
              <svg
                className="mx-auto h-24 w-24 text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-lg font-medium">Nenhum quiz criado ainda</p>
              <p className="text-sm mt-2">Clique em "Criar Novo Quiz" para começar</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
