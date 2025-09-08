import { motion } from "framer-motion";
import { CheckCircle2, Lock, Star, Trophy, Zap, Crown, Shield, Gem, Target, Brain } from "lucide-react";
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
    gradient: "from-beginner to-green-400",
    ring: "ring-beginner/20"
  },
  intermediate: {
    primary: "bg-intermediate", 
    light: "bg-intermediate/10",
    border: "border-intermediate",
    text: "text-intermediate",
    gradient: "from-intermediate to-yellow-400",
    ring: "ring-intermediate/20"
  },
  advanced: {
    primary: "bg-advanced",
    light: "bg-advanced/10", 
    border: "border-advanced",
    text: "text-advanced",
    gradient: "from-advanced to-red-400",
    ring: "ring-advanced/20"
  }
};

const levelIcons = {
  beginner: [Star, Shield, Target, Gem],
  intermediate: [Zap, Brain, Trophy, Crown], 
  advanced: [Trophy, Crown, Target, Star]
};

// Enhanced Duolingo-style zigzag pattern with wider spread
const getNodePosition = (index: number) => {
  const patterns = [50, 20, 80, 35, 65, 25, 75, 40, 60, 30, 70, 45, 55, 35, 65, 25, 75, 50]; 
  return patterns[index % patterns.length];
};

// Generate enhanced smooth path between nodes
const generatePathData = (sessions: Session[]) => {
  if (sessions.length === 0) return "";
  
  let pathData = "";
  for (let i = 0; i < sessions.length; i++) {
    const x = getNodePosition(i);
    const y = 150 + (i * 200); // Increased spacing to 200px
    
    if (i === 0) {
      pathData = `M ${x} ${y}`;
    } else {
      const prevX = getNodePosition(i - 1);
      const prevY = 150 + ((i - 1) * 200);
      
      // Create smoother S-curve between nodes
      const midY = prevY + 100;
      const controlX1 = prevX;
      const controlX2 = x;
      pathData += ` C ${controlX1} ${midY} ${controlX2} ${midY} ${x} ${y}`;
    }
  }
  return pathData;
};

export default function DuolingoPath({ sessions, level, onSessionClick }: DuolingoPathProps) {
  const colors = levelColors[level];
  const icons = levelIcons[level];

  const isSessionUnlocked = (index: number) => {
    if (index === 0) return true;
    const previousSession = sessions[index - 1];
    return previousSession.completed || false;
  };

  const isSessionCompleted = (session: Session) => {
    return session.completed || false;
  };

  const pathData = generatePathData(sessions);
  const totalHeight = 150 + (sessions.length * 200) + 150; // Extra padding

  return (
    <div className="relative w-full mx-auto max-w-2xl" style={{ height: `${totalHeight}px` }}>
      {/* Enhanced Background Path */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox={`0 0 100 ${totalHeight}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`pathGradient-${level}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={`hsl(var(--${level}))`} stopOpacity="0.4"/>
            <stop offset="50%" stopColor={`hsl(var(--${level}))`} stopOpacity="0.2"/>
            <stop offset="100%" stopColor={`hsl(var(--${level}))`} stopOpacity="0.1"/>
          </linearGradient>
          <filter id={`glow-${level}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main connecting path with glow */}
        <path
          d={pathData}
          stroke={`url(#pathGradient-${level})`}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#glow-${level})`}
        />
        
        {/* Secondary shadow path */}
        <path
          d={pathData}
          stroke={`hsl(var(--${level}))`}
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Session Nodes - ENLARGED */}
      {sessions.map((session, index) => {
        const isUnlocked = isSessionUnlocked(index);
        const isCompleted = isSessionCompleted(session);
        const leftPosition = getNodePosition(index);
        const topPosition = 150 + (index * 200);
        
        const nodeState = isCompleted ? "completed" : isUnlocked ? "unlocked" : "locked";
        
        const completedProblems = session.problems.filter(p => p.solved).length;
        const totalProblems = session.problems.length;
        const progressPercentage = (completedProblems / totalProblems) * 100;

        // Enhanced icon selection
        const getSessionIcon = () => {
          if (nodeState === "completed") return CheckCircle2;
          if (nodeState === "locked") return Lock;
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
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            {/* Enhanced Session Node - MUCH LARGER */}
            <motion.div
              className={`
                relative w-28 h-28 rounded-3xl border-4 cursor-pointer transition-all duration-500 shadow-2xl z-10
                ${nodeState === "completed" 
                  ? `${colors.primary} border-white shadow-green-500/30` 
                  : nodeState === "unlocked"
                  ? `bg-white ${colors.border} hover:scale-110 hover:shadow-2xl ${colors.ring} ring-4`
                  : "bg-gray-100 border-gray-300 shadow-gray-300/20"
                }
              `}
              onClick={isUnlocked ? () => onSessionClick(session) : undefined}
              whileHover={isUnlocked ? { 
                scale: 1.1, 
                y: -8,
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
              } : {}}
              whileTap={isUnlocked ? { scale: 0.95 } : {}}
              animate={nodeState === "unlocked" ? {
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 10px 30px rgba(0,0,0,0.15)",
                  "0 15px 40px rgba(0,0,0,0.2)",
                  "0 10px 30px rgba(0,0,0,0.15)"
                ]
              } : {}}
              transition={{
                repeat: nodeState === "unlocked" ? Infinity : 0,
                duration: 3,
                ease: "easeInOut"
              }}
            >
              {/* Node Icon - LARGER */}
              <div className="absolute inset-0 flex items-center justify-center">
                <SessionIcon className={`w-12 h-12 ${
                  nodeState === "completed" 
                    ? "text-white drop-shadow-lg" 
                    : nodeState === "locked" 
                    ? "text-gray-400" 
                    : colors.text + " drop-shadow-sm"
                }`} />
              </div>

              {/* Enhanced Progress Ring */}
              {nodeState === "unlocked" && completedProblems > 0 && (
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    fill="none"
                    stroke="rgba(0,0,0,0.08)"
                    strokeWidth="3"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    fill="none"
                    stroke={`hsl(var(--${level}))`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progressPercentage / 100 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    style={{
                      strokeDasharray: "1 1",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                    }}
                  />
                </svg>
              )}

              {/* Enhanced Crown for milestone sessions */}
              {(index + 1) % 5 === 0 && isCompleted && (
                <motion.div
                  className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-3 border-white shadow-xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Crown className="w-4 h-4 text-white drop-shadow" />
                </motion.div>
              )}

              {/* Enhanced Glow effect */}
              {nodeState === "unlocked" && (
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.gradient} opacity-25 blur-xl scale-110 pointer-events-none`} />
              )}

              {/* Premium border effect for completed nodes */}
              {nodeState === "completed" && (
                <div className="absolute inset-0 rounded-3xl border-2 border-white/50 pointer-events-none" />
              )}
            </motion.div>

            {/* Enhanced Session Number Badge */}
            <motion.div 
              className={`
                absolute -top-4 -left-4 w-8 h-8 rounded-full border-3 border-background text-sm font-bold flex items-center justify-center z-20 shadow-lg
                ${nodeState === "completed" 
                  ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white" 
                  : nodeState === "unlocked"
                  ? `${colors.primary} text-white`
                  : "bg-gray-400 text-white"
                }
              `}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
            >
              {index + 1}
            </motion.div>

          </motion.div>
        );
      })}

      {/* Enhanced Floating Achievement Badges */}
      <div className="absolute top-8 right-8 space-y-3 z-30">
        {[5, 10, 15].map(milestone => {
          const completed = sessions.slice(0, milestone).every(s => s.completed);
          return (
            <motion.div
              key={milestone}
              className={`
                w-14 h-14 rounded-2xl border-3 flex items-center justify-center text-sm font-bold shadow-xl
                ${completed 
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500 border-yellow-300 text-white" 
                  : "bg-gray-100 border-gray-300 text-gray-500"
                }
              `}
              animate={completed ? { 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              } : {}}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
            >
              {milestone}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
