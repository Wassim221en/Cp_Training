import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Clock, Users, Trophy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Problem {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
  solved?: boolean;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  problems: Problem[];
  completed?: boolean;
  difficulty: "Easy" | "Medium" | "Hard";
  estimatedTime: string;
  participants?: number;
}

interface SessionModalProps {
  session: Session | null;
  isOpen: boolean;
  onClose: () => void;
  onStart: (sessionId: string) => void;
}

const difficultyColors = {
  Easy: "text-beginner",
  Medium: "text-intermediate", 
  Hard: "text-advanced"
};

const difficultyBgColors = {
  Easy: "bg-beginner/10",
  Medium: "bg-intermediate/10",
  Hard: "bg-advanced/10"
};

export default function SessionModal({ session, isOpen, onClose, onStart }: SessionModalProps) {
  if (!session) return null;

  const completedProblems = session.problems.filter(p => p.solved).length;
  const totalProblems = session.problems.length;
  const progressPercentage = (completedProblems / totalProblems) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl bg-card rounded-2xl border border-border shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 p-6 border-b border-border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">{session.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyBgColors[session.difficulty]} ${difficultyColors[session.difficulty]}`}>
                      {session.difficulty}
                    </span>
                    {session.completed && (
                      <CheckCircle2 className="w-6 h-6 text-success" />
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{session.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{session.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-muted-foreground" />
                      <span>{totalProblems} problems</span>
                    </div>
                    {session.participants && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{session.participants.toLocaleString()} participants</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={onClose}
                  className="hover:bg-background/80"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Progress Bar */}
              {completedProblems > 0 && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{completedProblems}/{totalProblems} problems solved</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-success h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Problems List */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Problems</h3>
              <div className="space-y-3">
                {session.problems.map((problem, index) => (
                  <motion.div
                    key={problem.id}
                    className={`
                      p-4 rounded-xl border-2 transition-all duration-200
                      ${problem.solved 
                        ? "bg-muted/50 border-border hover:border-primary/30"
                        : "bg-muted/50 border-border hover:border-primary/30"
                      }
                    `}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div>
                          <h4 className="font-medium text-foreground">{problem.title}</h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className={`text-xs font-medium ${difficultyColors[problem.difficulty]}`}>
                              {problem.difficulty}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {problem.timeEstimate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border bg-muted/30">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {session.completed 
                    ? "You've completed this session! You can retry to improve your skills." 
                    : "Ready to start your coding journey?"
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
