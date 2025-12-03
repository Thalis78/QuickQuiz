import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { QuizProvider } from "@/contexts/QuizContext";
import { RoomProvider } from "@/contexts/RoomContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import { ProfessorLogin } from "./pages/professor/Login";
import { ProfessorDashboard } from "./pages/professor/Dashboard";
import { CreateQuizStep1 } from "./pages/professor/CreateQuiz/Step1";
import { CreateQuizStep2 } from "./pages/professor/CreateQuiz/Step2";
import { CreateQuizStep3 } from "./pages/professor/CreateQuiz/Step3";
import { QuizRoomPage } from "./pages/professor/QuizRoom";
import { StudentJoinPage } from "./pages/student/JoinRoom";
import { StudentWaitingRoom } from "./pages/student/WaitingRoom";
import { StudentQuizPage } from "./pages/student/QuizPlay";
import { StudentResultsPage } from "./pages/student/Results";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <QuizProvider>
        <RoomProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/professor/login" element={<ProfessorLogin />} />
            <Route 
              path="/professor/dashboard" 
              element={
                <ProtectedRoute>
                  <ProfessorDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/professor/quiz/criar/etapa-1" 
              element={
                <ProtectedRoute>
                  <CreateQuizStep1 />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/professor/quiz/criar/etapa-2" 
              element={
                <ProtectedRoute>
                  <CreateQuizStep2 />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/professor/quiz/criar/etapa-3" 
              element={
                <ProtectedRoute>
                  <CreateQuizStep3 />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/professor/quiz/sala/:quizId" 
              element={
                <ProtectedRoute>
                  <QuizRoomPage />
                </ProtectedRoute>
              } 
            />
            <Route path="/aluno/entrar" element={<StudentJoinPage />} />
            <Route path="/aluno/entrar/:code" element={<StudentJoinPage />} />
            <Route path="/aluno/sala/:code" element={<StudentWaitingRoom />} />
            <Route path="/aluno/quiz/:code" element={<StudentQuizPage />} />
            <Route path="/aluno/resultados/:code" element={<StudentResultsPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
        </RoomProvider>
      </QuizProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
