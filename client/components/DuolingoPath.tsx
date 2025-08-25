import { motion } from "framer-motion";
import { CheckCircle2, Lock, Star, Trophy, Zap, Crown } from "lucide-react";
import { Session } from "./SessionModal";

interface DuolingoPathProps {
  sessions: Session[];
  level: "beginner" | "intermediate" | "advanced";
  onSessionClick: (session: Session) => void;
}

const levelColors = {
  beginner: {
    primary: "bg-beginner",
    light: "bg-beginner/10",
    border: "border-beginner",
    text: "text-beginner",
    gradient: "from-beginner to-green-400"
  },
  intermediate: {
    primary: "bg-intermediate", 
    light: "bg-intermediate/10",
    border: "border-intermediate",
    text: "text-intermediate",
    gradient: "from-intermediate to-yellow-400"
  },
  advanced: {
    primary: "bg-advanced",
    light: "bg-advanced/10", 
    border: "border-advanced",
    text: "text-advanced",
    gradient: "from-advanced to-red-400"
  }
};

const levelIcons = {
  beginner: Star,
  intermediate: Zap, 
  advanced: Trophy
};

// Duolingo-style path positions (zigzag pattern)
const getNodePosition = (index: number) => {
  const baseOffset = 50; // Center position
  const amplitude = 40; // How far left/right
  const frequency = 0.5; // How often it zigzags
  
  // Create a sinusoidal pattern for positioning
  const position = baseOffset + Math.sin(index * frequency) * amplitude;
  return Math.max(10, Math.min(90, position)); // Constrain between 10% and 90%
};

export default function DuolingoPath({ sessions, level, onSessionClick }: DuolingoPathProps) {
  const Icon = levelIcons[level];
  const colors = levelColors[level];

  const isSessionUnlocked = (index: number) => {
    if (index === 0) return true;
    const previousSession = sessions[index - 1];
    return previousSession.completed || false;
  };

  const isSessionCompleted = (session: Session) => {
    return session.completed || false;
  };

  return (
    <div className="relative w-full min-h-screen py-8">
      {/* Path Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`pathGradient-${level}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={`hsl(var(--${level}))`} stopOpacity="0.2"/>
              <stop offset="100%" stopColor={`hsl(var(--${level}))`} stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          {/* Create winding path */}
          <path
            d={`M ${getNodePosition(0)}% 10% ${sessions.map((_, index) => {
              const x = getNodePosition(index);
              const y = 10 + (index * 8); // Vertical spacing
              return `L ${x}% ${y}%`;
            }).join(' ')}`}
            stroke={`hsl(var(--${level}))`}
            strokeWidth="4"
            fill="none"
            strokeOpacity="0.3"
            strokeDasharray="10,5"
          />
        </svg>
      </div>

      {/* Session Nodes */}
      <div className="relative z-10">
        {sessions.map((session, index) => {
          const isUnlocked = isSessionUnlocked(index);
          const isCompleted = isSessionCompleted(session);
          const leftPosition = getNodePosition(index);
          const topPosition = 10 + (index * 8);
          
          const nodeState = isCompleted ? "completed" : isUnlocked ? "unlocked" : "locked";
          
          const completedProblems = session.problems.filter(p => p.solved).length;
          const totalProblems = session.problems.length;
          const progressPercentage = (completedProblems / totalProblems) * 100;

          return (
            <motion.div
              key={session.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${leftPosition}%`,
                top: `${Math.min(topPosition, 85)}%` // Ensure we don't go below viewport
              }}
              initial={{ opacity: 0, scale: 0, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
            >
              {/* Connecting Line to Previous Node */}
              {index > 0 && (
                <div className="absolute">
                  <svg 
                    width="200" 
                    height="120" 
                    className="absolute -top-16 -left-20 pointer-events-none"
                    style={{ transform: `rotate(${Math.atan2(-8, getNodePosition(index) - getNodePosition(index - 1)) * 180 / Math.PI}deg)` }}
                  >
                    <path
                      d="M 50 60 Q 100 20 150 60"
                      stroke={isCompleted || isUnlocked ? `hsl(var(--${level}))` : "hsl(var(--muted-foreground))"}
                      strokeWidth="3"
                      fill="none"
                      strokeOpacity={isCompleted || isUnlocked ? "0.6" : "0.3"}
                    />
                  </svg>
                </div>
              )}

              {/* Session Node */}
              <motion.div
                className={`
                  relative w-16 h-16 rounded-full border-4 cursor-pointer transition-all duration-300 shadow-lg
                  ${nodeState === "completed" 
                    ? `${colors.primary} border-white shadow-xl` 
                    : nodeState === "unlocked"
                    ? `bg-white ${colors.border} hover:scale-110 hover:shadow-xl`
                    : "bg-gray-200 border-gray-300"
                  }
                `}
                onClick={isUnlocked ? () => onSessionClick(session) : undefined}
                whileHover={isUnlocked ? { scale: 1.1 } : {}}
                whileTap={isUnlocked ? { scale: 0.95 } : {}}
                animate={{
                  scale: nodeState === "unlocked" ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  repeat: nodeState === "unlocked" ? Infinity : 0,
                  duration: 2,
                  ease: "easeInOut"
                }}
              >
                {/* Node Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {nodeState === "completed" ? (
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  ) : nodeState === "locked" ? (
                    <Lock className="w-6 h-6 text-gray-500" />
                  ) : (
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  )}
                </div>

                {/* Progress Ring for Partial Completion */}
                {nodeState === "unlocked" && completedProblems > 0 && (
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="rgba(0,0,0,0.1)"
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke={`hsl(var(--${level}))`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: progressPercentage / 100 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      style={{
                        strokeDasharray: "1 1"
                      }}
                    />
                  </svg>
                )}

                {/* Crown for milestone sessions */}
                {(index + 1) % 5 === 0 && isCompleted && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Crown className="w-3 h-3 text-yellow-800" />
                  </motion.div>
                )}

                {/* Glow effect for current session */}
                {nodeState === "unlocked" && (
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors.gradient} opacity-30 blur-lg scale-125 pointer-events-none`} />
                )}
              </motion.div>

              {/* Session Info Card */}
              <motion.div
                className={`
                  absolute top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg border p-3 min-w-40 text-center
                  ${nodeState === "locked" ? "opacity-50" : "opacity-100"}
                `}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: nodeState === "locked" ? 0.5 : 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <h3 className="text-sm font-bold text-gray-800 mb-1">
                  {session.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-1">
                  <span>{session.problems.length} problems</span>
                  <span>•</span>
                  <span>{session.estimatedTime}</span>
                </div>
                
                {/* Session Number Badge */}
                <div className={`
                  inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white
                  ${nodeState === "completed" 
                    ? "bg-green-500" 
                    : nodeState === "unlocked"
                    ? `${colors.primary}`
                    : "bg-gray-400"
                  }
                `}>
                  {index + 1}
                </div>

                {/* Progress indicator */}
                {nodeState === "unlocked" && completedProblems > 0 && (
                  <div className="mt-2">
                    <div className="text-xs text-gray-500 mb-1">
                      {completedProblems}/{totalProblems}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <motion.div
                        className={`h-1 rounded-full ${colors.primary}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Achievement Badges */}
      <div className="absolute top-4 right-4 space-y-2">
        {[5, 10, 15].map(milestone => {
          const completed = sessions.slice(0, milestone).every(s => s.completed);
          return (
            <motion.div
              key={milestone}
              className={`
                w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold
                ${completed 
                  ? "bg-yellow-400 border-yellow-500 text-yellow-800" 
                  : "bg-gray-200 border-gray-300 text-gray-500"
                }
              `}
              animate={completed ? { 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {milestone}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
