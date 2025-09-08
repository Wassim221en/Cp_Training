import { useState } from "react";
import { motion } from "framer-motion";
import DuolingoPath from "@/components/DuolingoPath";
import UserStatsSidebar from "@/components/UserStatssidebar";
import SessionModal, { Session } from "@/components/SessionModal";
import { intermediateSessions } from "@/data/intermediateSessions";
import { mockUserData } from "@/data/mockUserData";
import {
  Zap,
  Target,
  Award,
  Users,
  TrendingUp,
  Brain,
  Cpu,
} from "lucide-react";

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
    alert(
      `Session "${selectedSession?.title}" started! This would normally take you to the coding interface.`,
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSession(null);
  };

  const completedSessions = intermediateSessions.filter(
    (s) => s.completed,
  ).length;
  const totalSessions = intermediateSessions.length;
  const overallProgress = (completedSessions / totalSessions) * 100;
  const totalProblems = intermediateSessions.reduce(
    (acc, session) => acc + session.problems.length,
    0,
  );
  const solvedProblems = intermediateSessions.reduce(
    (acc, session) => acc + session.problems.filter((p) => p.solved).length,
    0,
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-intermediate/3 to-accent/5">
      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        {/* Floating Header Stats */}
        <div className="sticky top-20 z-40 pointer-events-none">
          <div className="container mx-auto px-6">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card/95 backdrop-blur-lg rounded-2xl border border-border/50 px-8 py-4 shadow-2xl pointer-events-auto">
                <div className="flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-intermediate" />
                    <div className="text-center">
                      <div className="font-bold text-lg text-foreground">
                        {completedSessions}/{totalSessions}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Sessions
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-intermediate" />
                    <div className="text-center">
                      <div className="font-bold text-lg text-foreground">
                        {solvedProblems}/{totalProblems}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Problems
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-intermediate" />
                    <div className="text-center">
                      <div className="font-bold text-lg text-intermediate">
                        {Math.round(overallProgress)}%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Complete
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-6 py-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 bg-intermediate/10 text-intermediate px-8 py-4 rounded-2xl border border-intermediate/20 mb-8 shadow-lg">
              <Zap className="w-6 h-6" />
              <span className="font-bold text-lg">
                Intermediate Level - 18 Sessions
              </span>
            </div>

            <h1 className="text-5xl font-bold text-foreground mb-6">
              Level Up Your <span className="text-intermediate">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Advanced algorithms and data structures await. Master dynamic
              programming, graph theory, and complex problem-solving techniques.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
                <Brain className="w-5 h-5 text-intermediate" />
                <span className="font-medium">Advanced Algorithms</span>
              </div>
              <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
                <TrendingUp className="w-5 h-5 text-intermediate" />
                <span className="font-medium">Contest Preparation</span>
              </div>
              <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
                <Users className="w-5 h-5 text-intermediate" />
                <span className="font-medium">8,500+ Active Learners</span>
              </div>
            </div>

            {/* Difficulty Warning */}
            <div className="inline-flex items-center gap-3 bg-warning/10 text-warning px-6 py-3 rounded-2xl border border-warning/20 shadow-lg">
              <span className="font-medium">
                ⚡ Requires solid foundation in basic algorithms
              </span>
            </div>
          </motion.div>

          {/* Enhanced Duolingo-style Learning Path */}
          <div className="flex justify-center">
            <DuolingoPath
              sessions={intermediateSessions}
              level="intermediate"
              onSessionClick={handleSessionClick}
            />
          </div>
        </div>
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
