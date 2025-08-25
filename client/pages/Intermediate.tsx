import { useState } from "react";
import { motion } from "framer-motion";
import DuolingoPath from "@/components/DuolingoPath";
import SessionModal, { Session } from "@/components/SessionModal";
import { intermediateSessions } from "@/data/intermediateSessions";
import { Zap, Target, Award, Users, TrendingUp, Brain } from "lucide-react";

export default function Intermediate() {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSessionClick = (session: Session) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  const handleStartSession = (sessionId: string) => {
    console.log(`Starting session: ${sessionId}`);
    setIsModalOpen(false);
    alert(`Session "${selectedSession?.title}" started! This would normally take you to the coding interface.`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSession(null);
  };

  const completedSessions = intermediateSessions.filter(s => s.completed).length;
  const totalSessions = intermediateSessions.length;
  const overallProgress = (completedSessions / totalSessions) * 100;
  const totalProblems = intermediateSessions.reduce((acc, session) => acc + session.problems.length, 0);
  const solvedProblems = intermediateSessions.reduce((acc, session) => 
    acc + session.problems.filter(p => p.solved).length, 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-intermediate/5 to-accent/10">
      {/* Floating Header Stats */}
      <div className="sticky top-20 z-40 pointer-events-none">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card/90 backdrop-blur-md rounded-full border border-border/50 px-6 py-3 shadow-lg pointer-events-auto">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-intermediate" />
                  <span className="font-medium">{completedSessions}/{totalSessions} Sessions</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-intermediate" />
                  <span className="font-medium">{solvedProblems}/{totalProblems} Problems</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-intermediate" />
                  <span className="font-medium text-intermediate">{Math.round(overallProgress)}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-intermediate/10 text-intermediate px-6 py-3 rounded-full border border-intermediate/20 mb-6">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Intermediate Level - 18 Sessions</span>
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Level Up Your <span className="text-intermediate">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Advanced algorithms and data structures await. Master dynamic programming, graph theory, and complex problem-solving techniques.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/50">
              <Brain className="w-4 h-4 text-intermediate" />
              <span className="text-sm font-medium">Advanced Algorithms</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/50">
              <TrendingUp className="w-4 h-4 text-intermediate" />
              <span className="text-sm font-medium">Contest Preparation</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/50">
              <Users className="w-4 h-4 text-intermediate" />
              <span className="text-sm font-medium">8,500+ Active Learners</span>
            </div>
          </div>

          {/* Difficulty Warning */}
          <div className="inline-flex items-center gap-3 bg-warning/10 text-warning px-4 py-2 rounded-full border border-warning/20">
            <span className="text-sm font-medium">⚡ Requires solid foundation in basic algorithms</span>
          </div>
        </motion.div>

        {/* Duolingo-style Learning Path */}
        <DuolingoPath 
          sessions={intermediateSessions}
          level="intermediate"
          onSessionClick={handleSessionClick}
        />
      </div>

      {/* Session Modal */}
      <SessionModal
        session={selectedSession}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onStart={handleStartSession}
      />
    </div>
  );
}
