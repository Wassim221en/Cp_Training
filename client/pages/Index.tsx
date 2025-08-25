import { useState } from "react";
import { motion } from "framer-motion";
import PathNode from "@/components/PathNode";
import SessionModal, { Session } from "@/components/SessionModal";
import { Trophy, Users, Clock } from "lucide-react";

// Sample data for beginner level
const beginnerSessions: Session[] = [
  {
    id: "beginner-1",
    title: "Basic Algorithms",
    description: "Learn fundamental algorithms like sorting and searching. Perfect for getting started with competitive programming.",
    difficulty: "Easy",
    estimatedTime: "2 hours",
    participants: 12500,
    problems: [
      { id: "1", title: "Two Sum", difficulty: "Easy", timeEstimate: "15 min", solved: true },
      { id: "2", title: "Binary Search", difficulty: "Easy", timeEstimate: "20 min", solved: true },
      { id: "3", title: "Bubble Sort", difficulty: "Easy", timeEstimate: "25 min", solved: false },
      { id: "4", title: "Linear Search", difficulty: "Easy", timeEstimate: "15 min", solved: false },
    ],
    completed: false
  },
  {
    id: "beginner-2", 
    title: "Array Fundamentals",
    description: "Master array operations and common patterns used in competitive programming.",
    difficulty: "Easy",
    estimatedTime: "2.5 hours",
    participants: 9800,
    problems: [
      { id: "5", title: "Maximum Subarray", difficulty: "Easy", timeEstimate: "30 min" },
      { id: "6", title: "Remove Duplicates", difficulty: "Easy", timeEstimate: "20 min" },
      { id: "7", title: "Rotate Array", difficulty: "Easy", timeEstimate: "25 min" },
      { id: "8", title: "Merge Sorted Arrays", difficulty: "Easy", timeEstimate: "35 min" },
    ]
  },
  {
    id: "beginner-3",
    title: "String Manipulation", 
    description: "Explore string algorithms and pattern matching techniques.",
    difficulty: "Easy",
    estimatedTime: "3 hours",
    participants: 8200,
    problems: [
      { id: "9", title: "Valid Palindrome", difficulty: "Easy", timeEstimate: "20 min" },
      { id: "10", title: "Reverse String", difficulty: "Easy", timeEstimate: "15 min" },
      { id: "11", title: "First Unique Character", difficulty: "Easy", timeEstimate: "25 min" },
      { id: "12", title: "Anagram Check", difficulty: "Easy", timeEstimate: "30 min" },
    ]
  },
  {
    id: "beginner-4",
    title: "Basic Data Structures",
    description: "Introduction to stacks, queues, and linked lists.",
    difficulty: "Medium", 
    estimatedTime: "4 hours",
    participants: 6500,
    problems: [
      { id: "13", title: "Valid Parentheses", difficulty: "Easy", timeEstimate: "25 min" },
      { id: "14", title: "Implement Queue", difficulty: "Medium", timeEstimate: "45 min" },
      { id: "15", title: "Reverse Linked List", difficulty: "Easy", timeEstimate: "30 min" },
      { id: "16", title: "Min Stack", difficulty: "Medium", timeEstimate: "40 min" },
    ]
  },
  {
    id: "beginner-5",
    title: "Recursion Basics",
    description: "Learn recursive thinking and solve problems using recursion.",
    difficulty: "Medium",
    estimatedTime: "3.5 hours", 
    participants: 5200,
    problems: [
      { id: "17", title: "Factorial", difficulty: "Easy", timeEstimate: "15 min" },
      { id: "18", title: "Fibonacci Sequence", difficulty: "Easy", timeEstimate: "20 min" },
      { id: "19", title: "Tree Traversal", difficulty: "Medium", timeEstimate: "45 min" },
      { id: "20", title: "Power Function", difficulty: "Medium", timeEstimate: "35 min" },
    ]
  },
  {
    id: "beginner-6",
    title: "Hash Tables",
    description: "Master hash tables and their applications in solving problems efficiently.",
    difficulty: "Medium",
    estimatedTime: "4 hours",
    participants: 4100,
    problems: [
      { id: "21", title: "Two Sum with Hash", difficulty: "Easy", timeEstimate: "20 min" },
      { id: "22", title: "Group Anagrams", difficulty: "Medium", timeEstimate: "45 min" },
      { id: "23", title: "Top K Frequent", difficulty: "Medium", timeEstimate: "50 min" },
      { id: "24", title: "Valid Sudoku", difficulty: "Medium", timeEstimate: "40 min" },
    ]
  }
];

export default function Index() {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSessionClick = (session: Session) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  const handleStartSession = (sessionId: string) => {
    // In a real app, this would navigate to the problem-solving interface
    console.log(`Starting session: ${sessionId}`);
    setIsModalOpen(false);
    // For demo purposes, just show an alert
    alert(`Session "${selectedSession?.title}" started! This would normally take you to the coding interface.`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSession(null);
  };

  const isSessionUnlocked = (index: number) => {
    if (index === 0) return true; // First session is always unlocked
    const previousSession = beginnerSessions[index - 1];
    return previousSession.completed || false;
  };

  const isSessionCompleted = (session: Session) => {
    return session.completed || false;
  };

  const completedSessions = beginnerSessions.filter(s => s.completed).length;
  const totalSessions = beginnerSessions.length;
  const overallProgress = (completedSessions / totalSessions) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-3 bg-beginner/10 text-beginner px-6 py-3 rounded-full border border-beginner/20 mb-6">
          <Trophy className="w-5 h-5" />
          <span className="font-semibold">Beginner Level</span>
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Master the <span className="text-beginner">Fundamentals</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Build a solid foundation in algorithms and data structures. Perfect for beginners starting their competitive programming journey.
        </p>

        {/* Progress Overview */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{completedSessions}</div>
            <div className="text-sm text-muted-foreground">Sessions Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{totalSessions}</div>
            <div className="text-sm text-muted-foreground">Total Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-beginner">{Math.round(overallProgress)}%</div>
            <div className="text-sm text-muted-foreground">Progress</div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="w-full bg-muted rounded-full h-3">
            <motion.div
              className="bg-beginner h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Learning Path */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Your Learning Path</h2>
            <p className="text-muted-foreground">Complete each session to unlock the next challenge</p>
          </div>

          {/* Path Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
            {beginnerSessions.map((session, index) => (
              <PathNode
                key={session.id}
                session={session}
                isUnlocked={isSessionUnlocked(index)}
                isCompleted={isSessionCompleted(session)}
                onClick={() => handleSessionClick(session)}
                index={index}
                level="beginner"
              />
            ))}
          </div>

          {/* Achievement Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-accent/10 text-accent-foreground px-6 py-3 rounded-full border border-accent/20">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Join 25,000+ learners mastering the basics</span>
            </div>
          </motion.div>
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