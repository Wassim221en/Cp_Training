import { Session } from "@/components/SessionModal";

export const advancedSessions: Session[] = [
  {
    id: "advanced-1",
    title: "Advanced Graph Algorithms",
    description: "Master complex graph algorithms including network flows, bipartite matching, and strongly connected components.",
    difficulty: "Hard",
    estimatedTime: "10 hours",
    participants: 1800,
    problems: [
      { id: "a1", title: "Maximum Flow (Ford-Fulkerson)", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "a2", title: "Bipartite Matching", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "a3", title: "Strongly Connected Components", difficulty: "Hard", timeEstimate: "100 min" },
      { id: "a4", title: "Articulation Points", difficulty: "Hard", timeEstimate: "110 min" },
    ]
  },
  {
    id: "advanced-2",
    title: "String Algorithms Mastery", 
    description: "Advanced string processing with suffix arrays, Z-algorithm, and Manacher's algorithm.",
    difficulty: "Hard",
    estimatedTime: "12 hours",
    participants: 1600,
    problems: [
      { id: "a5", title: "Suffix Array Construction", difficulty: "Hard", timeEstimate: "180 min" },
      { id: "a6", title: "Z Algorithm", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "a7", title: "Manacher's Algorithm", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "a8", title: "Aho-Corasick Algorithm", difficulty: "Hard", timeEstimate: "200 min" },
    ]
  },
  {
    id: "advanced-3",
    title: "Advanced Data Structures",
    description: "Master sophisticated data structures: persistent segment trees, link-cut trees, and splay trees.",
    difficulty: "Hard", 
    estimatedTime: "15 hours",
    participants: 1400,
    problems: [
      { id: "a9", title: "Persistent Segment Tree", difficulty: "Hard", timeEstimate: "240 min" },
      { id: "a10", title: "Link-Cut Tree", difficulty: "Hard", timeEstimate: "300 min" },
      { id: "a11", title: "Splay Tree Operations", difficulty: "Hard", timeEstimate: "200 min" },
      { id: "a12", title: "Treap Implementation", difficulty: "Hard", timeEstimate: "180 min" },
    ]
  },
  {
    id: "advanced-4",
    title: "Network Flow Algorithms",
    description: "Deep dive into maximum flow, minimum cost flow, and advanced flow algorithms.",
    difficulty: "Hard",
    estimatedTime: "12 hours",
    participants: 1200,
    problems: [
      { id: "a13", title: "Min Cost Max Flow", difficulty: "Hard", timeEstimate: "200 min" },
      { id: "a14", title: "Dinic's Algorithm", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "a15", title: "Push-Relabel Algorithm", difficulty: "Hard", timeEstimate: "180 min" },
      { id: "a16", title: "Circulation with Demands", difficulty: "Hard", timeEstimate: "190 min" },
    ]
  },
  {
    id: "advanced-5",
    title: "Matrix Operations & Linear Algebra",
    description: "Advanced matrix algorithms, linear systems, and mathematical computations.",
    difficulty: "Hard", 
    estimatedTime: "10 hours",
    participants: 1100,
    problems: [
      { id: "a17", title: "Matrix Exponentiation", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "a18", title: "Gaussian Elimination", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "a19", title: "Matrix Determinant", difficulty: "Hard", timeEstimate: "100 min" },
      { id: "a20", title: "Linear System Solving", difficulty: "Hard", timeEstimate: "130 min" },
    ]
  },
  {
    id: "advanced-6",
    title: "Computational Geometry Advanced",
    description: "Complex geometric algorithms including Voronoi diagrams and 3D geometry.",
    difficulty: "Hard",
    estimatedTime: "14 hours",
    participants: 1000,
    problems: [
      { id: "a21", title: "Voronoi Diagram", difficulty: "Hard", timeEstimate: "240 min" },
      { id: "a22", title: "Delaunay Triangulation", difficulty: "Hard", timeEstimate: "200 min" },
      { id: "a23", title: "3D Convex Hull", difficulty: "Hard", timeEstimate: "180 min" },
      { id: "a24", title: "Polygon Intersection", difficulty: "Hard", timeEstimate: "160 min" },
    ]
  },
  {
    id: "advanced-7",
    title: "Number Theory Mastery",
    description: "Advanced number theory including primality testing, factorization, and cryptographic algorithms.",
    difficulty: "Hard",
    estimatedTime: "11 hours", 
    participants: 900,
    problems: [
      { id: "a25", title: "Miller-Rabin Primality", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "a26", title: "Pollard's Rho Algorithm", difficulty: "Hard", timeEstimate: "140 min" },
      { id: "a27", title: "Extended Euclidean", difficulty: "Hard", timeEstimate: "100 min" },
      { id: "a28", title: "Discrete Logarithm", difficulty: "Hard", timeEstimate: "170 min" },
    ]
  },
  {
    id: "advanced-8",
    title: "Dynamic Programming Optimization",
    description: "Advanced DP techniques: convex hull trick, divide and conquer optimization, and Knuth optimization.",
    difficulty: "Hard",
    estimatedTime: "13 hours",
    participants: 850,
    problems: [
      { id: "a29", title: "Convex Hull Trick", difficulty: "Hard", timeEstimate: "180 min" },
      { id: "a30", title: "Divide & Conquer DP", difficulty: "Hard", timeEstimate: "200 min" },
      { id: "a31", title: "Knuth Optimization", difficulty: "Hard", timeEstimate: "160 min" },
      { id: "a32", title: "Slope Trick", difficulty: "Hard", timeEstimate: "190 min" },
    ]
  },
  {
    id: "advanced-9",
    title: "Game Theory Advanced",
    description: "Complex game theory: Sprague-Grundy theorem, impartial games, and combinatorial game theory.",
    difficulty: "Hard", 
    estimatedTime: "9 hours",
    participants: 800,
    problems: [
      { id: "a33", title: "Sprague-Grundy Theorem", difficulty: "Hard", timeEstimate: "140 min" },
      { id: "a34", title: "Impartial Games", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "a35", title: "Partisan Games", difficulty: "Hard", timeEstimate: "130 min" },
      { id: "a36", title: "Green Hackenbush", difficulty: "Hard", timeEstimate: "150 min" },
    ]
  },
  {
    id: "advanced-10",
    title: "Approximation Algorithms",
    description: "Learn approximation techniques for NP-hard problems and analysis of approximation ratios.",
    difficulty: "Hard",
    estimatedTime: "12 hours",
    participants: 750,
    problems: [
      { id: "a37", title: "Vertex Cover Approximation", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "a38", title: "TSP Approximation", difficulty: "Hard", timeEstimate: "180 min" },
      { id: "a39", title: "Set Cover Greedy", difficulty: "Hard", timeEstimate: "140 min" },
      { id: "a40", title: "Load Balancing", difficulty: "Hard", timeEstimate: "160 min" },
    ]
  },
  {
    id: "advanced-11",
    title: "Parallel Algorithms",
    description: "Introduction to parallel computing, PRAM model, and parallel algorithm design.",
    difficulty: "Hard",
    estimatedTime: "11 hours", 
    participants: 700,
    problems: [
      { id: "a41", title: "Parallel Prefix Sum", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "a42", title: "Parallel Sorting", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "a43", title: "Matrix Multiplication Parallel", difficulty: "Hard", timeEstimate: "180 min" },
      { id: "a44", title: "Graph Algorithms Parallel", difficulty: "Hard", timeEstimate: "200 min" },
    ]
  },
  {
    id: "advanced-12",
    title: "Randomized Algorithms",
    description: "Master probabilistic algorithms, randomized data structures, and Monte Carlo methods.",
    difficulty: "Hard",
    estimatedTime: "10 hours",
    participants: 650,
    problems: [
      { id: "a45", title: "Randomized QuickSort", difficulty: "Hard", timeEstimate: "100 min" },
      { id: "a46", title: "Skip List", difficulty: "Hard", timeEstimate: "140 min" },
      { id: "a47", title: "Bloom Filter", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "a48", title: "Reservoir Sampling", difficulty: "Hard", timeEstimate: "110 min" },
    ]
  },
  {
    id: "advanced-13",
    title: "Heavy-Light Decomposition",
    description: "Advanced tree decomposition techniques for efficient path and subtree queries.",
    difficulty: "Hard", 
    estimatedTime: "8 hours",
    participants: 600,
    problems: [
      { id: "a49", title: "HLD Implementation", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "a50", title: "Path Queries HLD", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "a51", title: "Subtree Updates HLD", difficulty: "Hard", timeEstimate: "130 min" },
      { id: "a52", title: "LCA with HLD", difficulty: "Hard", timeEstimate: "100 min" },
    ]
  },
  {
    id: "advanced-14",
    title: "Centroid Decomposition",
    description: "Master centroid decomposition for solving complex tree problems efficiently.",
    difficulty: "Hard",
    estimatedTime: "9 hours",
    participants: 550,
    problems: [
      { id: "a53", title: "Centroid Decomposition", difficulty: "Hard", timeEstimate: "140 min" },
      { id: "a54", title: "Distance Queries", difficulty: "Hard", timeEstimate: "130 min" },
      { id: "a55", title: "Path Counting", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "a56", title: "Tree Coloring", difficulty: "Hard", timeEstimate: "120 min" },
    ]
  },
  {
    id: "advanced-15",
    title: "Mo's Algorithm",
    description: "Learn Mo's algorithm and square root decomposition techniques for offline queries.",
    difficulty: "Hard",
    estimatedTime: "7 hours", 
    participants: 500,
    problems: [
      { id: "a57", title: "Range Queries Mo's", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "a58", title: "Distinct Elements", difficulty: "Hard", timeEstimate: "100 min" },
      { id: "a59", title: "Tree Mo's Algorithm", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "a60", title: "Mo's with Updates", difficulty: "Hard", timeEstimate: "140 min" },
    ]
  },
  {
    id: "advanced-16",
    title: "Advanced FFT/NTT",
    description: "Fast Fourier Transform, Number Theoretic Transform, and convolution applications.",
    difficulty: "Hard",
    estimatedTime: "12 hours",
    participants: 450,
    problems: [
      { id: "a61", title: "FFT Implementation", difficulty: "Hard", timeEstimate: "180 min" },
      { id: "a62", title: "Polynomial Multiplication", difficulty: "Hard", timeEstimate: "150 min" },
      { id: "a63", title: "NTT for Large Numbers", difficulty: "Hard", timeEstimate: "160 min" },
      { id: "a64", title: "Convolution Applications", difficulty: "Hard", timeEstimate: "170 min" },
    ]
  },
  {
    id: "advanced-17",
    title: "Competitive Programming Tricks", 
    description: "Advanced techniques and optimizations used in competitive programming contests.",
    difficulty: "Hard",
    estimatedTime: "8 hours",
    participants: 400,
    problems: [
      { id: "a65", title: "Bitwise Optimizations", difficulty: "Hard", timeEstimate: "100 min" },
      { id: "a66", title: "Meet in the Middle", difficulty: "Hard", timeEstimate: "120 min" },
      { id: "a67", title: "Coordinate Compression", difficulty: "Hard", timeEstimate: "90 min" },
      { id: "a68", title: "Offline Processing", difficulty: "Hard", timeEstimate: "110 min" },
    ]
  },
  {
    id: "advanced-18",
    title: "ICPC World Finals",
    description: "Ultimate challenge with problems at the level of ICPC World Finals competition.",
    difficulty: "Hard",
    estimatedTime: "15 hours",
    participants: 350,
    problems: [
      { id: "a69", title: "World Finals Problem A", difficulty: "Hard", timeEstimate: "200 min" },
      { id: "a70", title: "World Finals Problem B", difficulty: "Hard", timeEstimate: "240 min" },
      { id: "a71", title: "World Finals Problem C", difficulty: "Hard", timeEstimate: "300 min" },
      { id: "a72", title: "World Finals Problem D", difficulty: "Hard", timeEstimate: "360 min" },
    ]
  }
];
