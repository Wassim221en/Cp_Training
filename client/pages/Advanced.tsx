import { useState } from "react";
import { motion } from "framer-motion";
import DuolingoPath from "@/components/DuolingoPath";
import SessionModal, { Session } from "@/components/SessionModal";
import { advancedSessions } from "@/data/advancedSessions";
import { Trophy, Target, Award, Users, Crown, Flame, Cpu } from "lucide-react";

export default function Advanced() {
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

  const completedSessions = advancedSessions.filter(s => s.completed).length;
  const totalSessions = advancedSessions.length;
  const overallProgress = (completedSessions / totalSessions) * 100;
  const totalProblems = advancedSessions.reduce((acc, session) => acc + session.problems.length, 0);
  const solvedProblems = advancedSessions.reduce((acc, session) => 
    acc + session.problems.filter(p => p.solved).length, 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-advanced/5 to-destructive/10">
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
                  <Trophy className="w-4 h-4 text-advanced" />
                  <span className="font-medium">{completedSessions}/{totalSessions} Sessions</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-advanced" />
                  <span className="font-medium">{solvedProblems}/{totalProblems} Problems</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-advanced" />
                  <span className="font-medium text-advanced">{Math.round(overallProgress)}%</span>
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
          <div className="inline-flex items-center gap-3 bg-advanced/10 text-advanced px-6 py-3 rounded-full border border-advanced/20 mb-6">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Advanced Level - 18 Sessions</span>
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Master <span className="text-advanced">Elite</span> Algorithms
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            The ultimate competitive programming challenge. Advanced data structures, complex algorithms, and ICPC-level problems await the brave.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/50">
              <Cpu className="w-4 h-4 text-advanced" />
              <span className="text-sm font-medium">Advanced Data Structures</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/50">
              <Crown className="w-4 h-4 text-advanced" />
              <span className="text-sm font-medium">ICPC World Finals</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/50">
              <Users className="w-4 h-4 text-advanced" />
              <span className="text-sm font-medium">1,800+ Elite Programmers</span>
            </div>
          </div>

          {/* Elite Warning */}
          <div className="inline-flex items-center gap-3 bg-advanced/10 text-advanced px-4 py-2 rounded-full border border-advanced/20 mb-4">
            <Flame className="w-4 h-4" />
            <span className="text-sm font-medium">🔥 For competitive programming masters only</span>
          </div>

          <div className="bg-gradient-to-r from-advanced/10 to-destructive/10 rounded-xl p-4 max-w-2xl mx-auto border border-advanced/20">
            <h3 className="text-lg font-semibold mb-2 text-advanced">Elite Training Ground</h3>
            <p className="text-sm text-muted-foreground">
              This level contains the most sophisticated algorithms and data structures used in international programming contests. 
              Expect 10-15 hours per session with problems at ICPC World Finals difficulty.
            </p>
          </div>
        </motion.div>

        {/* Duolingo-style Learning Path */}
        <DuolingoPath 
          sessions={advancedSessions}
          level="advanced"
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
