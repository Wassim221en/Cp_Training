import { useState } from "react";
import { motion } from "framer-motion";
import DuolingoPath from "@/components/DuolingoPath";
import UserStatsSidebar from "@/components/UserStatssidebar";
import SessionModal, { Session } from "@/components/SessionModal";
import { advancedSessions } from "@/data/advancedSessions";
import { mockUserData } from "@/data/mockUserData";
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
    <div className="flex min-h-screen bg-gradient-to-br from-background via-advanced/3 to-destructive/5">
      {/* User Statistics Sidebar */}
      <UserStatsSidebar stats={mockUserData} />
      
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
                    <Trophy className="w-5 h-5 text-advanced" />
                    <div className="text-center">
                      <div className="font-bold text-lg text-foreground">{completedSessions}/{totalSessions}</div>
                      <div className="text-xs text-muted-foreground">Sessions</div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-advanced" />
                    <div className="text-center">
                      <div className="font-bold text-lg text-foreground">{solvedProblems}/{totalProblems}</div>
                      <div className="text-xs text-muted-foreground">Problems</div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-advanced" />
                    <div className="text-center">
                      <div className="font-bold text-lg text-advanced">{Math.round(overallProgress)}%</div>
                      <div className="text-xs text-muted-foreground">Complete</div>
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
            <div className="inline-flex items-center gap-3 bg-advanced/10 text-advanced px-8 py-4 rounded-2xl border border-advanced/20 mb-8 shadow-lg">
              <Trophy className="w-6 h-6" />
              <span className="font-bold text-lg">Advanced Level - 18 Sessions</span>
            </div>
            
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Master <span className="text-advanced">Elite</span> Algorithms
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The ultimate competitive programming challenge. Advanced data structures, complex algorithms, and ICPC-level problems await the brave.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
                <Cpu className="w-5 h-5 text-advanced" />
                <span className="font-medium">Advanced Data Structures</span>
              </div>
              <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
                <Crown className="w-5 h-5 text-advanced" />
                <span className="font-medium">ICPC World Finals</span>
              </div>
              <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
                <Users className="w-5 h-5 text-advanced" />
                <span className="font-medium">1,800+ Elite Programmers</span>
              </div>
            </div>

            {/* Elite Warning */}
            <div className="inline-flex items-center gap-3 bg-advanced/10 text-advanced px-6 py-3 rounded-2xl border border-advanced/20 mb-6 shadow-lg">
              <Flame className="w-5 h-5" />
              <span className="font-medium">🔥 For competitive programming masters only</span>
            </div>

            <div className="bg-gradient-to-r from-advanced/10 to-destructive/10 rounded-2xl p-6 max-w-3xl mx-auto border border-advanced/20 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-advanced">Elite Training Ground</h3>
              <p className="text-muted-foreground">
                This level contains the most sophisticated algorithms and data structures used in international programming contests. 
                Expect 10-15 hours per session with problems at ICPC World Finals difficulty.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Duolingo-style Learning Path */}
          <div className="flex justify-center">
            <DuolingoPath 
              sessions={advancedSessions}
              level="advanced"
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
