// Conta de teste do professor CIEL CURSOS
// Futuramente pode ser expandida para múltiplas contas

export interface Professor {
  id: string;
  name: string;
  email: string;
  password: string;
  type: 'professor';
}

// Credenciais da conta de teste
const TEST_PROFESSOR: Professor = {
  id: '1',
  name: 'Professor CIEL',
  email: 'professor@ciel.com',
  password: 'ciel123',
  type: 'professor'
};

// Função auxiliar para validar login
export const validateProfessorLogin = (email: string, password: string): Professor | null => {
  if (email === TEST_PROFESSOR.email && password === TEST_PROFESSOR.password) {
    return TEST_PROFESSOR;
  }
  return null;
};
