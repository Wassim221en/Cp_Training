import { motion } from "framer-motion";
import { CheckCircle2, Lock, Star, Trophy, Zap } from "lucide-react";
import { Session } from "./SessionModal";

interface PathNodeProps {
  session: Session;
  isUnlocked: boolean;
  isCompleted: boolean;
  onClick: () => void;
  index: number;
  level: "beginner" | "intermediate" | "advanced";
}

const levelColors = {
  beginner: {
    primary: "bg-beginner",
    light: "bg-beginner/10",
    border: "border-beginner",
    text: "text-beginner"
  },
  intermediate: {
    primary: "bg-intermediate", 
    light: "bg-intermediate/10",
    border: "border-intermediate",
    text: "text-intermediate"
  },
  advanced: {
    primary: "bg-advanced",
    light: "bg-advanced/10", 
    border: "border-advanced",
    text: "text-advanced"
  }
};

const levelIcons = {
  beginner: Star,
  intermediate: Zap, 
  advanced: Trophy
};

export default function PathNode({ session, isUnlocked, isCompleted, onClick, index, level }: PathNodeProps) {
  const Icon = levelIcons[level];
  const colors = levelColors[level];
  
  const getNodeState = () => {
    if (isCompleted) return "completed";
    if (isUnlocked) return "unlocked";
    return "locked";
  };

  const nodeState = getNodeState();

  const nodeVariants = {
    locked: {
      scale: 0.9,
      opacity: 0.6,
    },
    unlocked: {
      scale: 1,
      opacity: 1,
    },
    completed: {
      scale: 1,
      opacity: 1,
    }
  };

  const completedProblems = session.problems.filter(p => p.solved).length;
  const totalProblems = session.problems.length;
  const progressPercentage = (completedProblems / totalProblems) * 100;

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Connection Line (except for first node) */}
      {index > 0 && (
        <div className="absolute -top-16 left-1/2 w-1 h-16 bg-gradient-to-b from-border to-transparent transform -translate-x-1/2" />
      )}

      {/* Node */}
      <motion.div
        className={`
          relative w-20 h-20 rounded-2xl border-4 cursor-pointer transition-all duration-300
          ${nodeState === "completed" 
            ? `${colors.primary} border-transparent shadow-lg` 
            : nodeState === "unlocked"
            ? `${colors.light} ${colors.border} hover:scale-105 hover:shadow-md`
            : "bg-muted border-muted-foreground/30"
          }
        `}
        variants={nodeVariants}
        animate={nodeState}
        onClick={isUnlocked ? onClick : undefined}
        whileHover={isUnlocked ? { scale: 1.05 } : {}}
        whileTap={isUnlocked ? { scale: 0.95 } : {}}
      >
        {/* Node Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {nodeState === "completed" ? (
            <CheckCircle2 className="w-8 h-8 text-white" />
          ) : nodeState === "locked" ? (
            <Lock className="w-6 h-6 text-muted-foreground" />
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
              r="35%"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-border"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="35%"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className={colors.text}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progressPercentage / 100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                pathLength: progressPercentage / 100,
                strokeDasharray: "1 1"
              }}
            />
          </svg>
        )}

        {/* Glow effect for unlocked nodes */}
        {nodeState === "unlocked" && (
          <div className={`absolute inset-0 rounded-2xl ${colors.primary} opacity-20 blur-lg scale-110 pointer-events-none`} />
        )}
      </motion.div>

      {/* Session Info */}
      <motion.div
        className="mt-4 text-center max-w-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        <h3 className={`text-sm font-semibold mb-1 ${nodeState === "locked" ? "text-muted-foreground" : "text-foreground"}`}>
          {session.title}
        </h3>
        <p className="text-xs text-muted-foreground">{session.problems.length} problems</p>
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

      {/* Session Number Badge */}
      <div className={`
        absolute -top-2 -right-2 w-6 h-6 rounded-full border-2 border-background text-xs font-bold flex items-center justify-center
        ${nodeState === "completed" 
          ? "bg-success text-white" 
          : nodeState === "unlocked"
          ? `${colors.primary} text-white`
          : "bg-muted text-muted-foreground"
        }
      `}>
        {index + 1}
      </div>
    </motion.div>
  );
}
