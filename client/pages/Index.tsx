import { useState } from "react";
import { motion } from "framer-motion";
import DuolingoPath from "@/components/DuolingoPath";
import UserStatsSidebar from "@/components/UserStatssidebar";
import SessionModal, { Session } from "@/components/SessionModal";
import { mockUserData } from "@/data/mockUserData";
import { Trophy, Users, Target, Award, TrendingUp, Brain } from "lucide-react";
import { SiCodeforces } from 'react-icons/si';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// Expanded beginner sessions with 18 sessions
const beginnerSessions: Session[] = [
  {
    id: "beginner-1",
    title: "Basic problems and explanation of the Codeforces",
    description:
      "",
    difficulty: "Easy",
    estimatedTime: "1.5 hours",
    participants: 15000,
    problems: [
      {
        id: "1",
        title: "explanation of the Codeforces",
        difficulty: "Easy",
        timeEstimate: "5 min",
        solved: true,
        url: "https://youtu.be/XL1Wdk38gRw?si=wOMao7-8pwMku36P",
        source: "youtube"
      },
      {
        id: "2",
        title: "Watermelon",
        difficulty: "Easy",
        timeEstimate: "10 min",
        solved: true,
        url: "https://codeforces.com/problemset/problem/4/A",
        source: "codeforces"
      },
      {
        id: "3",
        title: "Way Too Long Words",
        difficulty: "Easy",
        timeEstimate: "15 min",
        solved: false,
        url: "https://codeforces.com/problemset/problem/71/A",
        source: "codeforces"
      },
      {
        id: "4",
        title: "Team",
        difficulty: "Easy",
        timeEstimate: "15 min",
        solved: false,
        url: "https://codeforces.com/problemset/problem/231/A",
        source: "codeforces"
      },
      {
        id: "5",
        title: "Bit++",
        difficulty: "Easy",
        timeEstimate: "15 min",
        solved: false,
        url: "https://codeforces.com/problemset/problem/282/A",
        source: "codeforces"
      },
      {
        id: "6",
        title: "Elephant",
        difficulty: "Easy",
        timeEstimate: "15 min",
        solved: false,
        url: "https://codeforces.com/problemset/problem/617/A",
        source: "codeforces"
      },
      {
        id: "7",
        title: "Next Round",
        difficulty: "Easy",
        timeEstimate: "15 min",
        solved: false,
        url: "https://codeforces.com/problemset/problem/158/A",
        source: "codeforces"
      },
    ],
    completed: false,
  },
  {
    id: "beginner-2",
    title: "Complexity",
    description:
      "",
    difficulty: "Easy",
    estimatedTime: "2 hours",
    participants: 13500,
    problems: [
      {
        id: "4",
        title: "Sum of Two Numbers",
        difficulty: "Easy",
        timeEstimate: "10 min",
      },
      {
        id: "5",
        title: "Average Calculator",
        difficulty: "Easy",
        timeEstimate: "15 min",
      },
      {
        id: "6",
        title: "Temperature Converter",
        difficulty: "Easy",
        timeEstimate: "20 min",
      },
      {
        id: "7",
        title: "Simple Interest",
        difficulty: "Easy",
        timeEstimate: "25 min",
      },
    ],
  },
  {
    id: "beginner-3",
    title: "Frequency Array",
    description:
      "",
    difficulty: "Easy",
    estimatedTime: "2.5 hours",
    participants: 12000,
    problems: [
      {
        id: "8",
        title: "Frequency Array Explanation",
        difficulty: "Easy",
        timeEstimate: "15 min",
        url: "https://www.youtube.com/watch?v=73dAQba23-I&pp=ygUl2LnYp9iv2YQg2KfZhNmG2LPZitmFIGZyZXF1ZW1jeSBhcnJheQ%3D%3D",
        source: "youtube"
      },
      {
        id: "9",
        title: "B. Permutation",
        difficulty: "Easy",
        timeEstimate: "20 min",
        url:"https://codeforces.com/contest/137/problem/B",
        source:"codeforces"
      },
      {
        id: "10",
        title: "A. Pangram",
        difficulty: "Easy",
        timeEstimate: "25 min",
        url:"https://codeforces.com/problemset/problem/520/A",
        source:"codeforces"
      },
      {
        id: "12",
        title: "A. Next Test",
        difficulty: "Easy",
        timeEstimate: "30 min",
        url:"https://codeforces.com/contest/27/problem/A",
        source:"codeforces"
      },
      {
        id: "13",
        title: "A. Presents",
        difficulty: "Easy",
        timeEstimate: "30 min",
        url:"http://codeforces.com/problemset/problem/136/A",
        source:"codeforces"
      },
      {
        id: "14",
        title: "B. Remove Prefix",
        difficulty: "Easy",
        timeEstimate: "30 min",
        url:"https://codeforces.com/problemset/problem/1714/B",
        source:"codeforces"
      },
      {
        id: "15",
        title: "A. Yaroslav and Permutations",
        difficulty: "Easy",
        timeEstimate: "30 min",
        url:"https://codeforces.com/problemset/problem/296/A",
        source:"codeforces"
      },
    ],
  },
  {
    id: "beginner-4",
    title: "Cumulative Sum",
    description: "Master for loops, while loops, and iteration patterns.",
    difficulty: "Easy",
    estimatedTime: "3 hours",
    participants: 11200,
    problems: [
      {
        id: "16",
        title: "Print Numbers",
        difficulty: "Easy",
        timeEstimate: "15 min",
      },
      {
        id: "15",
        title: "Static Range Sum Queries",
        difficulty: "Easy",
        timeEstimate: "20 min",
        url:"https://cses.fi/problemset/task/1646",
        source:"cses"
      },
      {
        id: "16",
        title: "B. Kuriyama Mirai's Stones",
        difficulty: "Easy",
        timeEstimate: "25 min",
        url:"https://codeforces.com/contest/433/problem/B",
        source:"codeforces"
      },
      {
        id: "17",
        title: "B. Fence",
        difficulty: "Easy",
        timeEstimate: "35 min",
        url:"https://codeforces.com/contest/363/problem/B",
        source:"codeforces"
      },
      {
        id: "18",
        title: "B. Ilya and Queries",
        difficulty: "Easy",
        timeEstimate: "35 min",
        url:"https://codeforces.com/contest/313/problem/B",
        source:"codeforces"
      },
      {
        id: "19",
        title: "B. Karen and Coffeeس",
        difficulty: "Easy",
        timeEstimate: "35 min",
        url:"https://codeforces.com/problemset/problem/816/B",
        source:"codeforces"
      },
    ],
  },
  {
    id: "beginner-5",
    title: "STL",
    description:
      "",
    difficulty: "Easy",
    estimatedTime: "3.5 hours",
    participants: 10500,
    problems: [
      {
        id: "20",
        title: "Introduction To STL",
        difficulty: "Easy",
        timeEstimate: "20 min",
        url:"https://www.youtube.com/watch?v=4hhz69S15wU&list=PLCInYL3l2AainAE4Xq2kdNGDfG0bys2xp&index=1&pp=iAQB",
        source:"youtube"
      },
      {
        id: "17",
        title: "Find Maximum",
        difficulty: "Easy",
        timeEstimate: "25 min",
      },
      {
        id: "18",
        title: "Array Average",
        difficulty: "Easy",
        timeEstimate: "30 min",
      },
      {
        id: "19",
        title: "Count Elements",
        difficulty: "Easy",
        timeEstimate: "35 min",
      },
    ],
  },
  {
    id: "beginner-6",
    title: "String Manipulation",
    description:
      "Learn string operations, character manipulation, and basic string algorithms.",
    difficulty: "Easy",
    estimatedTime: "3 hours",
    participants: 9800,
    problems: [
      {
        id: "20",
        title: "String Length",
        difficulty: "Easy",
        timeEstimate: "15 min",
      },
      {
        id: "21",
        title: "Reverse String",
        difficulty: "Easy",
        timeEstimate: "25 min",
      },
      {
        id: "22",
        title: "Count Vowels",
        difficulty: "Easy",
        timeEstimate: "30 min",
      },
      {
        id: "23",
        title: "Palindrome Check",
        difficulty: "Easy",
        timeEstimate: "40 min",
      },
    ],
  },
  {
    id: "beginner-7",
    title: "Searching Algorithms",
    description: "Master linear search and binary search techniques.",
    difficulty: "Easy",
    estimatedTime: "4 hours",
    participants: 9200,
    problems: [
      {
        id: "24",
        title: "Linear Search",
        difficulty: "Easy",
        timeEstimate: "25 min",
      },
      {
        id: "25",
        title: "Binary Search",
        difficulty: "Easy",
        timeEstimate: "45 min",
      },
      {
        id: "26",
        title: "Search in String",
        difficulty: "Easy",
        timeEstimate: "35 min",
      },
      {
        id: "27",
        title: "Count Occurrences",
        difficulty: "Easy",
        timeEstimate: "40 min",
      },
    ],
  },
  {
    id: "beginner-8",
    title: "Sorting Fundamentals",
    description:
      "Learn bubble sort, selection sort, and basic sorting concepts.",
    difficulty: "Medium",
    estimatedTime: "4.5 hours",
    participants: 8600,
    problems: [
      {
        id: "28",
        title: "Bubble Sort",
        difficulty: "Easy",
        timeEstimate: "40 min",
      },
      {
        id: "29",
        title: "Selection Sort",
        difficulty: "Easy",
        timeEstimate: "45 min",
      },
      {
        id: "30",
        title: "Sort Array",
        difficulty: "Medium",
        timeEstimate: "50 min",
      },
      {
        id: "31",
        title: "Custom Sorting",
        difficulty: "Medium",
        timeEstimate: "60 min",
      },
    ],
  },
  {
    id: "beginner-9",
    title: "Two Pointers Technique",
    description:
      "Master the two pointers approach for solving array problems efficiently.",
    difficulty: "Medium",
    estimatedTime: "4 hours",
    participants: 8000,
    problems: [
      {
        id: "32",
        title: "Two Sum",
        difficulty: "Easy",
        timeEstimate: "30 min",
      },
      {
        id: "33",
        title: "Pair with Target",
        difficulty: "Medium",
        timeEstimate: "45 min",
      },
      {
        id: "34",
        title: "Remove Duplicates",
        difficulty: "Medium",
        timeEstimate: "40 min",
      },
      {
        id: "35",
        title: "Container With Water",
        difficulty: "Medium",
        timeEstimate: "60 min",
      },
    ],
  },
  {
    id: "beginner-10",
    title: "Basic Recursion",
    description:
      "Introduction to recursive thinking and solving problems recursively.",
    difficulty: "Medium",
    estimatedTime: "5 hours",
    participants: 7400,
    problems: [
      {
        id: "36",
        title: "Factorial Recursive",
        difficulty: "Easy",
        timeEstimate: "30 min",
      },
      {
        id: "37",
        title: "Fibonacci Recursive",
        difficulty: "Medium",
        timeEstimate: "45 min",
      },
      {
        id: "38",
        title: "Power Function",
        difficulty: "Medium",
        timeEstimate: "50 min",
      },
      {
        id: "39",
        title: "Sum of Digits",
        difficulty: "Medium",
        timeEstimate: "40 min",
      },
    ],
  },
  {
    id: "beginner-11",
    title: "Hash Tables Intro",
    description:
      "Learn hash tables, maps, and their applications in problem solving.",
    difficulty: "Medium",
    estimatedTime: "5.5 hours",
    participants: 6800,
    problems: [
      {
        id: "40",
        title: "Frequency Counter",
        difficulty: "Easy",
        timeEstimate: "35 min",
      },
      {
        id: "41",
        title: "Two Sum with Hash",
        difficulty: "Medium",
        timeEstimate: "45 min",
      },
      {
        id: "42",
        title: "First Unique Character",
        difficulty: "Medium",
        timeEstimate: "50 min",
      },
      {
        id: "43",
        title: "Group Anagrams",
        difficulty: "Medium",
        timeEstimate: "60 min",
      },
    ],
  },
  {
    id: "beginner-12",
    title: "Stack Operations",
    description:
      "Master stack data structure and its applications in problem solving.",
    difficulty: "Medium",
    estimatedTime: "4.5 hours",
    participants: 6200,
    problems: [
      {
        id: "44",
        title: "Valid Parentheses",
        difficulty: "Easy",
        timeEstimate: "30 min",
      },
      {
        id: "45",
        title: "Implement Stack",
        difficulty: "Medium",
        timeEstimate: "45 min",
      },
      {
        id: "46",
        title: "Min Stack",
        difficulty: "Medium",
        timeEstimate: "55 min",
      },
      {
        id: "47",
        title: "Stack Calculator",
        difficulty: "Medium",
        timeEstimate: "60 min",
      },
    ],
  },
  {
    id: "beginner-13",
    title: "Queue Operations",
    description: "Learn queue data structure and breadth-first approaches.",
    difficulty: "Medium",
    estimatedTime: "4 hours",
    participants: 5800,
    problems: [
      {
        id: "48",
        title: "Implement Queue",
        difficulty: "Medium",
        timeEstimate: "40 min",
      },
      {
        id: "49",
        title: "Circular Queue",
        difficulty: "Medium",
        timeEstimate: "50 min",
      },
      {
        id: "50",
        title: "Queue with Stack",
        difficulty: "Medium",
        timeEstimate: "55 min",
      },
      {
        id: "51",
        title: "Sliding Window",
        difficulty: "Medium",
        timeEstimate: "60 min",
      },
    ],
  },
  {
    id: "beginner-14",
    title: "Linked Lists Basics",
    description: "Introduction to linked lists and pointer manipulation.",
    difficulty: "Medium",
    estimatedTime: "5 hours",
    participants: 5400,
    problems: [
      {
        id: "52",
        title: "Create Linked List",
        difficulty: "Medium",
        timeEstimate: "45 min",
      },
      {
        id: "53",
        title: "Reverse Linked List",
        difficulty: "Medium",
        timeEstimate: "50 min",
      },
      {
        id: "54",
        title: "Merge Two Lists",
        difficulty: "Medium",
        timeEstimate: "60 min",
      },
      {
        id: "55",
        title: "Remove Duplicates",
        difficulty: "Medium",
        timeEstimate: "55 min",
      },
    ],
  },
  {
    id: "beginner-15",
    title: "Binary Tree Intro",
    description:
      "Learn tree data structures and basic tree traversal techniques.",
    difficulty: "Medium",
    estimatedTime: "6 hours",
    participants: 5000,
    problems: [
      {
        id: "56",
        title: "Tree Traversal",
        difficulty: "Medium",
        timeEstimate: "50 min",
      },
      {
        id: "57",
        title: "Tree Height",
        difficulty: "Medium",
        timeEstimate: "45 min",
      },
      {
        id: "58",
        title: "Count Nodes",
        difficulty: "Medium",
        timeEstimate: "40 min",
      },
      {
        id: "59",
        title: "Tree Sum",
        difficulty: "Medium",
        timeEstimate: "55 min",
      },
    ],
  },
  {
    id: "beginner-16",
    title: "Mathematical Thinking",
    description:
      "Apply mathematical concepts and number theory in programming.",
    difficulty: "Medium",
    estimatedTime: "5 hours",
    participants: 4600,
    problems: [
      {
        id: "60",
        title: "Prime Numbers",
        difficulty: "Medium",
        timeEstimate: "45 min",
      },
      {
        id: "61",
        title: "GCD and LCM",
        difficulty: "Medium",
        timeEstimate: "50 min",
      },
      {
        id: "62",
        title: "Modular Arithmetic",
        difficulty: "Medium",
        timeEstimate: "55 min",
      },
      {
        id: "63",
        title: "Fast Power",
        difficulty: "Medium",
        timeEstimate: "60 min",
      },
    ],
  },
  {
    id: "beginner-17",
    title: "Greedy Algorithms",
    description: "Learn greedy approach and solve optimization problems.",
    difficulty: "Medium",
    estimatedTime: "5.5 hours",
    participants: 4200,
    problems: [
      {
        id: "64",
        title: "Coin Change Greedy",
        difficulty: "Medium",
        timeEstimate: "50 min",
      },
      {
        id: "65",
        title: "Activity Selection",
        difficulty: "Medium",
        timeEstimate: "60 min",
      },
      {
        id: "66",
        title: "Fractional Knapsack",
        difficulty: "Medium",
        timeEstimate: "65 min",
      },
      {
        id: "67",
        title: "Job Scheduling",
        difficulty: "Medium",
        timeEstimate: "70 min",
      },
    ],
  },
  {
    id: "beginner-18",
    title: "Final Challenge",
    description: "Put all your skills together in challenging mixed problems.",
    difficulty: "Hard",
    estimatedTime: "6 hours",
    participants: 3800,
    problems: [
      {
        id: "68",
        title: "Mixed Algorithm 1",
        difficulty: "Medium",
        timeEstimate: "60 min",
      },
      {
        id: "69",
        title: "Mixed Algorithm 2",
        difficulty: "Hard",
        timeEstimate: "75 min",
      },
      {
        id: "70",
        title: "Challenge Problem",
        difficulty: "Hard",
        timeEstimate: "90 min",
      },
      {
        id: "71",
        title: "Final Boss",
        difficulty: "Hard",
        timeEstimate: "120 min",
      },
    ],
  },
];

export default function Index() {
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

  const completedSessions = beginnerSessions.filter((s) => s.completed).length;
  const totalSessions = beginnerSessions.length;
  const overallProgress = (completedSessions / totalSessions) * 100;
  const totalProblems = beginnerSessions.reduce(
    (acc, session) => acc + session.problems.length,
    0,
  );
  const solvedProblems = beginnerSessions.reduce(
    (acc, session) => acc + session.problems.filter((p) => p.solved).length,
    0,
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-beginner/3 to-accent/5">
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
                    <Trophy className="w-5 h-5 text-beginner" />
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
                    <Target className="w-5 h-5 text-beginner" />
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
                    <Award className="w-5 h-5 text-beginner" />
                    <div className="text-center">
                      <div className="font-bold text-lg text-beginner">
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
            <div className="inline-flex items-center gap-3 bg-beginner/10 text-beginner px-8 py-4 rounded-2xl border border-beginner/20 mb-8 shadow-lg">
              <Trophy className="w-6 h-6" />
              <span className="font-bold text-lg">
                Beginner Level - 18 Sessions
              </span>
            </div>

            <h1 className="text-5xl font-bold text-foreground mb-6">
              Master the <span className="text-beginner">Fundamentals</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Build a solid foundation with 18 comprehensive sessions covering
              algorithms, data structures, and problem-solving techniques.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
                <Brain className="w-5 h-5 text-beginner" />
                <span className="font-medium">Algorithm Mastery</span>
              </div>
              <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
                <TrendingUp className="w-5 h-5 text-beginner" />
                <span className="font-medium">Progressive Learning</span>
              </div>
              <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50 shadow-lg">
                <Users className="w-5 h-5 text-beginner" />
                <span className="font-medium">15,000+ Active Learners</span>
              </div>
            </div>
          </motion.div>
          <div style={{ position: "absolute", left: -150, top: 1000 , width:1000}}>
          <DotLottieReact
            src="https://lottie.host/c1892744-3473-4c95-8710-5cb5fed5b0f3/6JdDaI9RNR.lottie"
            loop
            autoplay
          />
          </div>
          <div style={{ position: "absolute", right: -150, top: 2000 , width:1000}}>
          <DotLottieReact
            src="https://lottie.host/2b240bad-36f5-40ff-af86-08c6465af3db/s1ho1fRkOR.lottie"
            loop
            autoplay
          />
          
          </div>
          <div style={{ position: "absolute", left: -150, top: 2500 , width:1000}}>
          <DotLottieReact
            src="https://lottie.host/c03c10be-1092-4154-85eb-84e790d32a4f/8QsuFU78Gt.lottie"
            loop
            autoplay
          />
          
          </div>
          <div style={{ position: "absolute", left: -100, top: 3700 , width:900}}>
          <DotLottieReact
            src="https://lottie.host/8c987491-08f8-434f-ab9b-ab4894ad49ff/c54ZbgxNgA.lottie"
            loop
            autoplay
          />
          
          </div>
          {/* Enhanced Duolingo-style Learning Path */}
          <div className="flex justify-center">
            <DuolingoPath
              sessions={beginnerSessions}
              level="beginner"
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
