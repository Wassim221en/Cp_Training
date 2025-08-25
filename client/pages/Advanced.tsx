import { motion } from "framer-motion";
import { Trophy, Crown, Target, ArrowRight, Cpu, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Advanced() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-3 bg-advanced/10 text-advanced px-6 py-3 rounded-full border border-advanced/20 mb-6">
          <Trophy className="w-5 h-5" />
          <span className="font-semibold">Advanced Level</span>
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Master <span className="text-advanced">Elite</span> Algorithms
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          For competitive programming champions. Tackle the most challenging problems and compete at the highest level.
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
            className="w-24 h-24 bg-advanced/10 rounded-2xl flex items-center justify-center mx-auto mb-8 relative"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Trophy className="w-12 h-12 text-advanced" />
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-advanced rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: 360
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Crown className="w-3 h-3 text-white" />
            </motion.div>
          </motion.div>

          <h2 className="text-3xl font-bold text-foreground mb-4">The Ultimate Challenge</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            The most sophisticated algorithms and data structures await. This level is designed for those ready to 
            compete in international programming contests and tackle industry-level challenges.
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background/50 rounded-xl p-6 border border-border">
              <Cpu className="w-8 h-8 text-advanced mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Advanced Data Structures</h3>
              <p className="text-sm text-muted-foreground">Segment trees, Fenwick trees, and advanced graph algorithms</p>
            </div>
            <div className="bg-background/50 rounded-xl p-6 border border-border">
              <Target className="w-8 h-8 text-advanced mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Mathematical Algorithms</h3>
              <p className="text-sm text-muted-foreground">Number theory, computational geometry, and optimization</p>
            </div>
            <div className="bg-background/50 rounded-xl p-6 border border-border">
              <Flame className="w-8 h-8 text-advanced mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Contest Mastery</h3>
              <p className="text-sm text-muted-foreground">ICPC-style problems and optimization techniques</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-advanced/10 to-destructive/10 rounded-xl p-6 mb-8 border border-advanced/20">
            <h3 className="text-lg font-semibold mb-2 text-advanced">🔥 Elite Training</h3>
            <p className="text-sm text-muted-foreground">
              This level requires mastery of intermediate concepts. Complete the previous levels to unlock these challenges.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-advanced hover:bg-advanced/90">
              <Crown className="w-4 h-4 mr-2" />
              Join Elite Waitlist
            </Button>
            <Button variant="outline" size="lg">
              Master Intermediate First
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
