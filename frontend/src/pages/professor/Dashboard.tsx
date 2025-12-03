import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { ConfirmModal } from '@/components/ConfirmModal';
import { useAuth } from '@/contexts/AuthContext';
import { useQuiz } from '@/contexts/QuizContext';
import { toast } from 'sonner';

export const ProfessorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { savedQuizzes, loadQuizzes, deleteQuiz } = useQuiz();
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; quizId: string; quizTitle: string }>({
    isOpen: false,
    quizId: '',
    quizTitle: '',
  });
  const [startModal, setStartModal] = useState<{ isOpen: boolean; quizId: string; quizTitle: string }>({
    isOpen: false,
    quizId: '',
    quizTitle: '',
  });

  useEffect(() => {
    loadQuizzes();
  }, []);

  const handleCreateQuiz = () => {
    navigate('/professor/quiz/criar/etapa-1');
  };

  const handleLogout = () => {
    logout();
    toast.success('Logout realizado! Até logo!');
    navigate('/');
  };

  const handleDeleteQuiz = () => {
    deleteQuiz(deleteModal.quizId);
    toast.success(`"${deleteModal.quizTitle}" foi removido com sucesso.`);
  };

  const openDeleteModal = (quizId: string, quizTitle: string) => {
    setDeleteModal({ isOpen: true, quizId, quizTitle });
  };

  const closeDeleteModal = () => {
    setDeleteModal({ isOpen: false, quizId: '', quizTitle: '' });
  };

  const handleStartQuiz = () => {
    navigate(`/professor/quiz/sala/${startModal.quizId}`);
  };

  const openStartModal = (quizId: string, quizTitle: string) => {
    setStartModal({ isOpen: true, quizId, quizTitle });
  };

  const closeStartModal = () => {
    setStartModal({ isOpen: false, quizId: '', quizTitle: '' });
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
              Meus Quizzes ({savedQuizzes.length})
            </h2>
            
            {savedQuizzes.length === 0 ? (
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
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedQuizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="bg-gradient-to-br from-[#605BEF] to-[#7B73E8] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
                  >
                    <div className="flex flex-col h-full">
                      <h3 className="text-white font-bold text-xl mb-3 line-clamp-2">
                        {quiz.config.titulo}
                      </h3>
                      
                      <div className="flex-1 space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-white/90">
                          <span className="text-sm">📊 Nível:</span>
                          <span className="font-semibold">{quiz.config.nivel}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-white/90">
                          <span className="text-sm">📝 Questões:</span>
                          <span className="font-semibold">{quiz.questoes.length}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-white/90">
                          <span className="text-sm">⏱️ Tempo:</span>
                          <span className="font-semibold">{quiz.config.tempoPorQuestao}s</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-white/90">
                          <span className="text-sm">📅 Criado:</span>
                          <span className="font-semibold text-xs">{formatDate(new Date(quiz.criadoEm).getTime())}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <button
                          onClick={() => openStartModal(quiz.id, quiz.config.titulo || 'Quiz sem título')}
                          className="w-full bg-[#00D9B5] hover:bg-[#00C9A5] text-white px-4 py-3 rounded-lg font-semibold text-sm transition-colors shadow-lg"
                        >
                          🚀 Iniciar Quiz
                        </button>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => toast.info('Funcionalidade de visualização em desenvolvimento.')}
                            className="flex-1 bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg font-semibold text-xs transition-colors"
                          >
                            👁️ Ver
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openDeleteModal(quiz.id, quiz.config.titulo || 'Quiz sem título');
                            }}
                            className="flex-1 bg-red-500/80 hover:bg-red-600 text-white px-3 py-2 rounded-lg font-semibold text-xs transition-colors"
                          >
                            🗑️ Excluir
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modal de confirmação de exclusão */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDeleteQuiz}
        title="Excluir Quiz"
        description={`Tem certeza que deseja excluir o quiz "${deleteModal.quizTitle}"? Esta ação não pode ser desfeita.`}
        confirmText="Excluir"
        cancelText="Cancelar"
      />

      {/* Modal de confirmação para iniciar quiz */}
      <ConfirmModal
        isOpen={startModal.isOpen}
        onClose={closeStartModal}
        onConfirm={handleStartQuiz}
        title="Iniciar Quiz"
        description={`Deseja iniciar o quiz "${startModal.quizTitle}"? Uma sala de espera será criada para os alunos.`}
        confirmText="Iniciar"
        cancelText="Cancelar"
        variant="success"
      />
    </div>
  );
};
