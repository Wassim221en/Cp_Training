import { motion } from "framer-motion";
import { Zap, Clock, Trophy, ArrowRight, Code, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Intermediate() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-3 bg-intermediate/10 text-intermediate px-6 py-3 rounded-full border border-intermediate/20 mb-6">
          <Zap className="w-5 h-5" />
          <span className="font-semibold">Intermediate Level</span>
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Level Up Your <span className="text-intermediate">Skills</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Ready to tackle more complex algorithms and data structures? This level will challenge your problem-solving abilities.
        </p>
      </motion.div>

      {/* Coming Soon Content */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border p-12 text-center">
          <motion.div
            className="w-24 h-24 bg-intermediate/10 rounded-2xl flex items-center justify-center mx-auto mb-8"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Zap className="w-12 h-12 text-intermediate" />
          </motion.div>

          <h2 className="text-3xl font-bold text-foreground mb-4">Coming Soon!</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're crafting an amazing intermediate experience with advanced algorithms, dynamic programming, 
            and graph theory challenges. Get ready to supercharge your coding skills!
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background/50 rounded-xl p-6 border border-border">
              <Code className="w-8 h-8 text-intermediate mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Advanced Algorithms</h3>
              <p className="text-sm text-muted-foreground">Dynamic programming, greedy algorithms, and divide & conquer</p>
            </div>
            <div className="bg-background/50 rounded-xl p-6 border border-border">
              <Target className="w-8 h-8 text-intermediate mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Graph Theory</h3>
              <p className="text-sm text-muted-foreground">BFS, DFS, shortest paths, and minimum spanning trees</p>
            </div>
            <div className="bg-background/50 rounded-xl p-6 border border-border">
              <Trophy className="w-8 h-8 text-intermediate mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Contest Prep</h3>
              <p className="text-sm text-muted-foreground">Time-based challenges and competition strategies</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-intermediate hover:bg-intermediate/90">
              <Clock className="w-4 h-4 mr-2" />
              Notify Me When Ready
            </Button>
            <Button variant="outline" size="lg">
              Continue with Beginner
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
