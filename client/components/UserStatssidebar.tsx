import { motion } from "framer-motion";
import { 
  User, 
  Trophy, 
  Target, 
  TrendingUp, 
  Award, 
  Calendar, 
  Flame,
  Code2,
  Star,
  Clock,
  BarChart3,
  Medal,
  Zap
} from "lucide-react";

interface UserStats {
  name: string;
  username: string;
  avatar?: string;
  codeforcesHandle: string;
  codeforcesRating: number;
  codeforcesRank: string;
  totalProblems: number;
  solvedProblems: number;
  currentStreak: number;
  maxStreak: number;
  contestsParticipated: number;
  globalRank: number;
  practiceTime: string;
  level: "beginner" | "intermediate" | "advanced";
  achievements: string[];
}

interface UserStatsSidebarProps {
  stats: UserStats;
}

const rankColors = {
  Newbie: "text-gray-600",
  Pupil: "text-green-600", 
  Specialist: "text-cyan-600",
  Expert: "text-blue-600",
  "Candidate Master": "text-purple-600",
  Master: "text-orange-600",
  "International Master": "text-orange-500",
  Grandmaster: "text-red-600",
  "International Grandmaster": "text-red-500",
  "Legendary Grandmaster": "text-red-700"
};

const levelColors = {
  beginner: "from-green-500 to-emerald-600",
  intermediate: "from-yellow-500 to-orange-500", 
  advanced: "from-red-500 to-pink-600"
};

export default function UserStatsSidebar({ stats }: UserStatsSidebarProps) {
  const completionRate = Math.round((stats.solvedProblems / stats.totalProblems) * 100);
  const ratingColor = rankColors[stats.codeforcesRank as keyof typeof rankColors] || "text-gray-600";
  const levelGradient = levelColors[stats.level];

  return (
    <motion.div
      className="w-80 h-screen overflow-y-auto bg-card/50 backdrop-blur-sm border-r border-border/50 p-6 space-y-6"
      initial={{ x: -320, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* User Profile Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative mb-4">
          <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${levelGradient} p-1 mx-auto`}>
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              {stats.avatar ? (
                <img src={stats.avatar} alt={stats.name} className="w-16 h-16 rounded-full" />
              ) : (
                <User className="w-10 h-10 text-muted-foreground" />
              )}
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-card flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-foreground mb-1">{stats.name}</h2>
        <p className="text-sm text-muted-foreground mb-2">@{stats.username}</p>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
          <Trophy className="w-3 h-3" />
          {stats.level.toUpperCase()} LEVEL
        </div>
      </motion.div>

      {/* Codeforces Stats */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Code2 className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Codeforces Profile</h3>
        </div>
        
        <div className="bg-background/50 rounded-xl p-4 border border-border/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">Handle</span>
            <span className="font-medium text-foreground">{stats.codeforcesHandle}</span>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">Rating</span>
            <div className="flex items-center gap-2">
              <span className={`font-bold ${ratingColor}`}>{stats.codeforcesRating}</span>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">Rank</span>
            <span className={`font-medium ${ratingColor}`}>{stats.codeforcesRank}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Contests</span>
            <div className="flex items-center gap-1">
              <Medal className="w-4 h-4 text-yellow-500" />
              <span className="font-medium">{stats.contestsParticipated}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Training Progress */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Training Progress</h3>
        </div>
        
        <div className="bg-background/50 rounded-xl p-4 border border-border/50 space-y-4">
          {/* Problems Solved */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Problems Solved</span>
              <span className="font-medium text-foreground">{stats.solvedProblems}/{stats.totalProblems}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <motion.div
                className="bg-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${completionRate}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">{completionRate}% Complete</p>
          </div>
          
          {/* Streak */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="text-lg font-bold text-foreground">{stats.currentStreak}</span>
              </div>
              <p className="text-xs text-muted-foreground">Current Streak</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-lg font-bold text-foreground">{stats.maxStreak}</span>
              </div>
              <p className="text-xs text-muted-foreground">Best Streak</p>
            </div>
          </div>
          
          {/* Practice Time & Rank */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-lg font-bold text-foreground">{stats.practiceTime}</span>
              </div>
              <p className="text-xs text-muted-foreground">Practice Time</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <BarChart3 className="w-4 h-4 text-purple-500" />
                <span className="text-lg font-bold text-foreground">#{stats.globalRank}</span>
              </div>
              <p className="text-xs text-muted-foreground">Global Rank</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recent Achievements */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Recent Achievements</h3>
        </div>
        
        <div className="space-y-2">
          {stats.achievements.slice(0, 3).map((achievement, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{achievement}</p>
                <p className="text-xs text-muted-foreground">Just earned</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Stats Cards */}
      <motion.div
        className="grid grid-cols-2 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-3 border border-blue-200/20">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-medium text-blue-700">This Week</span>
          </div>
          <p className="text-lg font-bold text-blue-800">24 Problems</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-3 border border-green-200/20">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4 text-green-500" />
            <span className="text-xs font-medium text-green-700">This Month</span>
          </div>
          <p className="text-lg font-bold text-green-800">156 Problems</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
