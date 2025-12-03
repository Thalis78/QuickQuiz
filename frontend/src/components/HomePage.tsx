import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Header } from './Header';
import { UserTypeCard } from './UserTypeCard';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    // Could open a contact modal, navigate to contact page, etc.
    toast.info('Funcionalidade de contato será implementada em breve!');
  };

  const handleStudentClick = () => {
    navigate('/aluno/entrar');
  };

  const handleTeacherClick = () => {
    navigate('/professor/login');
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
      
      {/* Main Content */}
      <main className="relative z-[1] flex flex-col items-center px-4 pb-12">
        {/* Logo */}
        <section className="flex justify-center mt-[80px] max-md:mt-[60px] max-sm:mt-[80px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/02860aef18c993020c6cd55bcab4a7836ad4b4a5?width=604"
            alt="CIEL CURSOS Logo"
            className="w-[302px] h-[278px] max-md:w-[250px] max-md:h-[230px] max-sm:w-[200px] max-sm:h-[184px]"
          />
        </section>

        {/* User Type Selection */}
        <section className="flex w-full max-w-[653px] flex-col items-center gap-[50px] mt-[40px] max-md:gap-10 max-md:mt-[30px] max-sm:gap-[30px] max-sm:mt-[20px]">
          <h2 className="text-white text-center text-5xl font-semibold max-md:text-4xl max-sm:text-[28px]">
            Quem é você?
          </h2>
          
          <div className="flex justify-between items-center w-full max-md:flex-col max-md:gap-[30px] max-sm:gap-[25px]" role="group" aria-label="Selecione seu tipo de usuário">
            <UserTypeCard
              type="student"
              title="Aluno"
              iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/025b9c6df2eac5de10d3c632cc91f2c43fc130c9?width=284"
              iconAlt="Ícone representando um aluno"
              onClick={handleStudentClick}
            />
            
            <UserTypeCard
              type="teacher"
              title="Professor"
              iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/ef263a52258bbe9a374560e02155169f1fceebf7?width=290"
              iconAlt="Ícone representando um professor"
              onClick={handleTeacherClick}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
