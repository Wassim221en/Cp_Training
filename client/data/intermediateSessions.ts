import { Session } from "@/components/SessionModal";

export const intermediateSessions: Session[] = [
  {
    id: "intermediate-1",
    title: "Advanced Array Techniques",
    description: "Master advanced array manipulation, sliding window, and prefix sum techniques.",
    difficulty: "Medium",
    estimatedTime: "4 hours",
    participants: 8500,
    problems: [
      { id: "i1", title: "Sliding Window Maximum", difficulty: "Hard", timeEstimate: "60 min" },
      { id: "i2", title: "Subarray Sum Equals K", difficulty: "Medium", timeEstimate: "45 min" },
      { id: "i3", title: "Product of Array Except Self", difficulty: "Medium", timeEstimate: "40 min" },
      { id: "i4", title: "Rotate Array", difficulty: "Medium", timeEstimate: "35 min" },
    ]
  },
  {
    id: "intermediate-2", 
    title: "String Algorithms",
    description: "Dive deep into string matching, KMP algorithm, and pattern searching.",
    difficulty: "Medium",
    estimatedTime: "5 hours",
    participants: 7800,
    problems: [
      { id: "i5", title: "KMP Pattern Matching", difficulty: "Hard", timeEstimate: "75 min" },
      { id: "i6", title: "Longest Palindromic Substring", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i7", title: "String Compression", difficulty: "Medium", timeEstimate: "45 min" },
      { id: "i8", title: "Valid Anagram", difficulty: "Easy", timeEstimate: "30 min" },
    ]
  },
  {
    id: "intermediate-3",
    title: "Dynamic Programming Basics",
    description: "Introduction to DP with classic problems like Fibonacci, coin change, and knapsack.",
    difficulty: "Medium", 
    estimatedTime: "6 hours",
    participants: 7200,
    problems: [
      { id: "i9", title: "Fibonacci DP", difficulty: "Easy", timeEstimate: "30 min" },
      { id: "i10", title: "Coin Change Problem", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i11", title: "0/1 Knapsack", difficulty: "Medium", timeEstimate: "75 min" },
      { id: "i12", title: "Longest Increasing Subsequence", difficulty: "Medium", timeEstimate: "90 min" },
    ]
  },
  {
    id: "intermediate-4",
    title: "Graph Theory Fundamentals",
    description: "Learn graph representation, BFS, DFS, and basic graph algorithms.",
    difficulty: "Medium",
    estimatedTime: "7 hours", 
    participants: 6800,
    problems: [
      { id: "i13", title: "Graph Representation", difficulty: "Easy", timeEstimate: "30 min" },
      { id: "i14", title: "Breadth First Search", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i15", title: "Depth First Search", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i16", title: "Connected Components", difficulty: "Medium", timeEstimate: "75 min" },
    ]
  },
  {
    id: "intermediate-5",
    title: "Binary Tree Advanced",
    description: "Master binary tree algorithms, BST operations, and tree traversals.",
    difficulty: "Medium",
    estimatedTime: "6 hours",
    participants: 6400,
    problems: [
      { id: "i17", title: "Binary Tree Inorder", difficulty: "Easy", timeEstimate: "40 min" },
      { id: "i18", title: "Validate BST", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i19", title: "Lowest Common Ancestor", difficulty: "Medium", timeEstimate: "75 min" },
      { id: "i20", title: "Tree Diameter", difficulty: "Medium", timeEstimate: "80 min" },
    ]
  },
  {
    id: "intermediate-6",
    title: "Heap and Priority Queue",
    description: "Learn heap operations, priority queues, and heap-based algorithms.",
    difficulty: "Medium",
    estimatedTime: "5 hours", 
    participants: 6000,
    problems: [
      { id: "i21", title: "Implement Min Heap", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i22", title: "Kth Largest Element", difficulty: "Medium", timeEstimate: "45 min" },
      { id: "i23", title: "Merge K Sorted Lists", difficulty: "Hard", timeEstimate: "90 min" },
      { id: "i24", title: "Top K Frequent Elements", difficulty: "Medium", timeEstimate: "60 min" },
    ]
  },
  {
    id: "intermediate-7",
    title: "Backtracking Algorithms",
    description: "Master backtracking with N-Queens, Sudoku solver, and permutations.",
    difficulty: "Medium",
    estimatedTime: "7 hours",
    participants: 5600,
    problems: [
      { id: "i25", title: "Generate Parentheses", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i26", title: "N-Queens Problem", difficulty: "Hard", timeEstimate: "90 min" },
      { id: "i27", title: "Sudoku Solver", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "i28", title: "Word Search", difficulty: "Medium", timeEstimate: "75 min" },
    ]
  },
  {
    id: "intermediate-8",
    title: "Divide and Conquer",
    description: "Learn divide and conquer strategy with merge sort, quick sort, and more.",
    difficulty: "Medium", 
    estimatedTime: "6 hours",
    participants: 5200,
    problems: [
      { id: "i29", title: "Merge Sort", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i30", title: "Quick Sort", difficulty: "Medium", timeEstimate: "70 min" },
      { id: "i31", title: "Maximum Subarray", difficulty: "Easy", timeEstimate: "45 min" },
      { id: "i32", title: "Closest Pair of Points", difficulty: "Hard", timeEstimate: "90 min" },
    ]
  },
  {
    id: "intermediate-9",
    title: "Advanced DP Patterns",
    description: "Master complex DP patterns including LCS, edit distance, and matrix chain.",
    difficulty: "Hard",
    estimatedTime: "8 hours",
    participants: 4800,
    problems: [
      { id: "i33", title: "Longest Common Subsequence", difficulty: "Medium", timeEstimate: "75 min" },
      { id: "i34", title: "Edit Distance", difficulty: "Hard", timeEstimate: "90 min" },
      { id: "i35", title: "Matrix Chain Multiplication", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "i36", title: "Palindrome Partitioning", difficulty: "Hard", timeEstimate: "100 min" },
    ]
  },
  {
    id: "intermediate-10",
    title: "Graph Algorithms Deep Dive",
    description: "Advanced graph algorithms including shortest paths and minimum spanning trees.",
    difficulty: "Hard", 
    estimatedTime: "8 hours",
    participants: 4400,
    problems: [
      { id: "i37", title: "Dijkstra's Algorithm", difficulty: "Medium", timeEstimate: "90 min" },
      { id: "i38", title: "Bellman-Ford Algorithm", difficulty: "Hard", timeEstimate: "100 min" },
      { id: "i39", title: "Kruskal's MST", difficulty: "Medium", timeEstimate: "80 min" },
      { id: "i40", title: "Topological Sort", difficulty: "Medium", timeEstimate: "70 min" },
    ]
  },
  {
    id: "intermediate-11",
    title: "Trie Data Structure",
    description: "Master trie implementation and applications in string processing.",
    difficulty: "Medium",
    estimatedTime: "5 hours",
    participants: 4000,
    problems: [
      { id: "i41", title: "Implement Trie", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i42", title: "Word Search II", difficulty: "Hard", timeEstimate: "90 min" },
      { id: "i43", title: "Auto-complete System", difficulty: "Hard", timeEstimate: "100 min" },
      { id: "i44", title: "Replace Words", difficulty: "Medium", timeEstimate: "55 min" },
    ]
  },
  {
    id: "intermediate-12",
    title: "Union Find (Disjoint Set)",
    description: "Learn Union-Find data structure for efficiently handling connected components.",
    difficulty: "Medium",
    estimatedTime: "6 hours", 
    participants: 3800,
    problems: [
      { id: "i45", title: "Union Find Implementation", difficulty: "Medium", timeEstimate: "50 min" },
      { id: "i46", title: "Number of Islands", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i47", title: "Friend Circles", difficulty: "Medium", timeEstimate: "65 min" },
      { id: "i48", title: "Redundant Connection", difficulty: "Medium", timeEstimate: "70 min" },
    ]
  },
  {
    id: "intermediate-13",
    title: "Segment Trees",
    description: "Advanced data structure for range queries and updates.",
    difficulty: "Hard",
    estimatedTime: "7 hours",
    participants: 3400,
    problems: [
      { id: "i49", title: "Range Sum Query", difficulty: "Medium", timeEstimate: "75 min" },
      { id: "i50", title: "Range Minimum Query", difficulty: "Hard", timeEstimate: "90 min" },
      { id: "i51", title: "Lazy Propagation", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "i52", title: "Count of Range Sum", difficulty: "Hard", timeEstimate: "100 min" },
    ]
  },
  {
    id: "intermediate-14",
    title: "Binary Indexed Tree",
    description: "Learn Fenwick Tree for efficient prefix sum queries and updates.",
    difficulty: "Hard",
    estimatedTime: "6 hours",
    participants: 3200,
    problems: [
      { id: "i53", title: "BIT Implementation", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i54", title: "Range Sum Query BIT", difficulty: "Medium", timeEstimate: "70 min" },
      { id: "i55", title: "Count Inversions", difficulty: "Hard", timeEstimate: "90 min" },
      { id: "i56", title: "2D BIT", difficulty: "Hard", timeEstimate: "100 min" },
    ]
  },
  {
    id: "intermediate-15",
    title: "Game Theory Basics", 
    description: "Introduction to game theory concepts and optimal strategy problems.",
    difficulty: "Medium",
    estimatedTime: "5 hours",
    participants: 2800,
    problems: [
      { id: "i57", title: "Nim Game", difficulty: "Easy", timeEstimate: "30 min" },
      { id: "i58", title: "Stone Game", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i59", title: "Minimax Algorithm", difficulty: "Medium", timeEstimate: "75 min" },
      { id: "i60", title: "Optimal Strategy", difficulty: "Hard", timeEstimate: "90 min" },
    ]
  },
  {
    id: "intermediate-16",
    title: "Number Theory Advanced",
    description: "Advanced mathematical concepts including modular arithmetic and prime algorithms.",
    difficulty: "Hard",
    estimatedTime: "7 hours", 
    participants: 2600,
    problems: [
      { id: "i61", title: "Sieve of Eratosthenes", difficulty: "Medium", timeEstimate: "45 min" },
      { id: "i62", title: "Modular Exponentiation", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i63", title: "Chinese Remainder Theorem", difficulty: "Hard", timeEstimate: "100 min" },
      { id: "i64", title: "Euler's Totient Function", difficulty: "Hard", timeEstimate: "90 min" },
    ]
  },
  {
    id: "intermediate-17",
    title: "Computational Geometry",
    description: "Geometric algorithms including convex hull, line intersection, and closest pairs.",
    difficulty: "Hard",
    estimatedTime: "8 hours",
    participants: 2400,
    problems: [
      { id: "i65", title: "Point in Polygon", difficulty: "Medium", timeEstimate: "60 min" },
      { id: "i66", title: "Line Intersection", difficulty: "Hard", timeEstimate: "90 min" },
      { id: "i67", title: "Convex Hull", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "i68", title: "Area of Polygon", difficulty: "Medium", timeEstimate: "70 min" },
    ]
  },
  {
    id: "intermediate-18",
    title: "Contest Simulation",
    description: "Final challenge with mixed problems simulating real programming contests.",
    difficulty: "Hard",
    estimatedTime: "10 hours",
    participants: 2200,
    problems: [
      { id: "i69", title: "Contest Problem A", difficulty: "Medium", timeEstimate: "90 min" },
      { id: "i70", title: "Contest Problem B", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "i71", title: "Contest Problem C", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "i72", title: "Contest Problem D", difficulty: "Hard", timeEstimate: "180 min" },
    ]
  }
];
