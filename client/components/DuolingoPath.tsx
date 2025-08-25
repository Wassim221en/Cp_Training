import { motion } from "framer-motion";
import { CheckCircle2, Lock, Star, Trophy, Zap, Crown, Shield, Gem } from "lucide-react";
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

// Enhanced Duolingo-style zigzag pattern
const getNodePosition = (index: number) => {
  const positions = [50, 25, 75, 50, 25, 75, 50, 25, 75, 50, 25, 75, 50, 25, 75, 50, 25, 75]; // Zigzag pattern
  return positions[index % positions.length];
};

// Generate smooth path between nodes
const generatePathData = (sessions: Session[]) => {
  if (sessions.length === 0) return "";
  
  let pathData = "";
  for (let i = 0; i < sessions.length; i++) {
    const x = getNodePosition(i);
    const y = 120 + (i * 160); // Vertical spacing of 160px
    
    if (i === 0) {
      pathData = `M ${x} ${y}`;
    } else {
      const prevX = getNodePosition(i - 1);
      const prevY = 120 + ((i - 1) * 160);
      
      // Create smooth curve between nodes
      const midY = prevY + 80;
      pathData += ` Q ${prevX} ${midY} ${x} ${y}`;
    }
  }
  return pathData;
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

  const pathData = generatePathData(sessions);
  const totalHeight = 120 + (sessions.length * 160) + 100; // Extra padding at bottom

  return (
    <div className="relative w-full mx-auto max-w-md" style={{ height: `${totalHeight}px` }}>
      {/* Background Path */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox={`0 0 100 ${totalHeight}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`pathGradient-${level}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={`hsl(var(--${level}))`} stopOpacity="0.3"/>
            <stop offset="100%" stopColor={`hsl(var(--${level}))`} stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        
        {/* Main connecting path */}
        <path
          d={pathData}
          stroke={`hsl(var(--${level}))`}
          strokeWidth="4"
          fill="none"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Session Nodes */}
      {sessions.map((session, index) => {
        const isUnlocked = isSessionUnlocked(index);
        const isCompleted = isSessionCompleted(session);
        const leftPosition = getNodePosition(index);
        const topPosition = 120 + (index * 160);
        
        const nodeState = isCompleted ? "completed" : isUnlocked ? "unlocked" : "locked";
        
        const completedProblems = session.problems.filter(p => p.solved).length;
        const totalProblems = session.problems.length;
        const progressPercentage = (completedProblems / totalProblems) * 100;

        // Choose icon based on session type and index
        const getSessionIcon = () => {
          if (nodeState === "completed") return CheckCircle2;
          if (nodeState === "locked") return Lock;
          
          // Rotate icons for variety
          const icons = [Star, Shield, Gem, Trophy];
          return icons[index % icons.length];
        };

        const SessionIcon = getSessionIcon();

        return (
          <motion.div
            key={session.id}
            className="absolute"
            style={{
              left: `${leftPosition}%`,
              top: `${topPosition}px`,
              transform: 'translateX(-50%)'
            }}
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              delay: index * 0.15,
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
          >
            {/* Individual Connection Line to Next Node */}
            {index < sessions.length - 1 && (
              <svg 
                className="absolute pointer-events-none z-0"
                style={{
                  left: '50%',
                  top: '80px',
                  transform: 'translateX(-50%)',
                  width: `${Math.abs(getNodePosition(index + 1) - leftPosition) + 50}px`,
                  height: '100px'
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d={`M 50 0 Q ${getNodePosition(index + 1) > leftPosition ? 75 : 25} 50 ${getNodePosition(index + 1) > leftPosition ? 100 : 0} 100`}
                  stroke={isCompleted || isUnlocked ? `hsl(var(--${level}))` : "hsl(var(--muted-foreground))"}
                  strokeWidth="3"
                  fill="none"
                  strokeOpacity={isCompleted || isUnlocked ? "0.6" : "0.3"}
                  strokeLinecap="round"
                />
              </svg>
            )}

            {/* Session Node */}
            <motion.div
              className={`
                relative w-20 h-20 rounded-full border-4 cursor-pointer transition-all duration-300 shadow-lg z-10
                ${nodeState === "completed" 
                  ? `${colors.primary} border-white shadow-xl` 
                  : nodeState === "unlocked"
                  ? `bg-white ${colors.border} hover:scale-110 hover:shadow-xl`
                  : "bg-gray-200 border-gray-300"
                }
              `}
              onClick={isUnlocked ? () => onSessionClick(session) : undefined}
              whileHover={isUnlocked ? { scale: 1.1, y: -2 } : {}}
              whileTap={isUnlocked ? { scale: 0.95 } : {}}
              animate={nodeState === "unlocked" ? {
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 4px 20px rgba(0,0,0,0.1)",
                  "0 8px 25px rgba(0,0,0,0.15)",
                  "0 4px 20px rgba(0,0,0,0.1)"
                ]
              } : {}}
              transition={{
                repeat: nodeState === "unlocked" ? Infinity : 0,
                duration: 2,
                ease: "easeInOut"
              }}
            >
              {/* Node Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <SessionIcon className={`w-8 h-8 ${
                  nodeState === "completed" 
                    ? "text-white" 
                    : nodeState === "locked" 
                    ? "text-gray-500" 
                    : colors.text
                }`} />
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
                  className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Crown className="w-3 h-3 text-yellow-800" />
                </motion.div>
              )}

              {/* Glow effect for current session */}
              {nodeState === "unlocked" && (
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors.gradient} opacity-20 blur-lg scale-125 pointer-events-none`} />
              )}
            </motion.div>

            {/* Session Number Badge */}
            <div className={`
              absolute -top-2 -left-2 w-6 h-6 rounded-full border-2 border-background text-xs font-bold flex items-center justify-center z-20
              ${nodeState === "completed" 
                ? "bg-green-500 text-white" 
                : nodeState === "unlocked"
                ? `${colors.primary} text-white`
                : "bg-gray-400 text-white"
              }
            `}>
              {index + 1}
            </div>

            {/* Session Info Card */}
            <motion.div
              className={`
                absolute left-1/2 transform -translate-x-1/2 bg-card rounded-xl shadow-lg border border-border p-3 mt-6 min-w-48 text-center z-10
                ${nodeState === "locked" ? "opacity-50" : "opacity-100"}
              `}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: nodeState === "locked" ? 0.5 : 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.2 }}
            >
              <h3 className="text-sm font-bold text-foreground mb-1">
                {session.title}
              </h3>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-1">
                <span>{session.problems.length} problems</span>
                <span>•</span>
                <span>{session.estimatedTime}</span>
              </div>
              
              {/* Difficulty badge */}
              <div className={`
                inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                ${session.difficulty === "Easy" ? "bg-green-100 text-green-800" :
                  session.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }
              `}>
                {session.difficulty}
              </div>

              {/* Progress indicator */}
              {nodeState === "unlocked" && completedProblems > 0 && (
                <div className="mt-2">
                  <div className="text-xs text-muted-foreground mb-1">
                    {completedProblems}/{totalProblems}
                  </div>
                  <div className="w-full bg-muted rounded-full h-1">
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

      {/* Floating Achievement Badges */}
      <div className="absolute top-4 right-4 space-y-2 z-30">
        {[5, 10, 15].map(milestone => {
          const completed = sessions.slice(0, milestone).every(s => s.completed);
          return (
            <motion.div
              key={milestone}
              className={`
                w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold shadow-lg
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
