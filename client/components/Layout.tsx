import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Trophy, Star, Zap, Code2 } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const levels = [
  { 
    id: "beginner", 
    name: "Beginner", 
    path: "/", 
    icon: Star, 
    color: "text-beginner",
    bgColor: "bg-beginner/10",
    borderColor: "border-beginner"
  },
  { 
    id: "intermediate", 
    name: "Intermediate", 
    path: "/intermediate", 
    icon: Zap, 
    color: "text-intermediate",
    bgColor: "bg-intermediate/10",
    borderColor: "border-intermediate"
  },
  { 
    id: "advanced", 
    name: "Advanced", 
    path: "/advanced", 
    icon: Trophy, 
    color: "text-advanced",
    bgColor: "bg-advanced/10",
    borderColor: "border-advanced"
  },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const getCurrentLevel = () => {
    if (location.pathname === "/") return "beginner";
    if (location.pathname === "/intermediate") return "intermediate";
    if (location.pathname === "/advanced") return "advanced";
    return "beginner";
  };

  const currentLevel = getCurrentLevel();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Aleppo CPC</h1>
                <p className="text-sm text-muted-foreground">Competitive Programming Training</p>
              </div>
            </motion.div>

            {/* Level Navigation */}
            <nav className="flex gap-2">
              {levels.map((level, index) => {
                const Icon = level.icon;
                const isActive = currentLevel === level.id;
                
                return (
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={level.path}>
                      <motion.div
                        className={`
                          relative px-4 py-2 rounded-xl border-2 transition-all duration-300
                          ${isActive 
                            ? `${level.bgColor} ${level.borderColor} ${level.color}` 
                            : "bg-card/50 border-border/50 text-muted-foreground hover:bg-card hover:border-border"
                          }
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          <span className="font-medium text-sm">{level.name}</span>
                        </div>
                        {isActive && (
                          <motion.div
                            className={`absolute -bottom-1 left-1/2 w-1 h-1 rounded-full ${level.color.replace('text-', 'bg-')}`}
                            layoutId="activeTab"
                            initial={false}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
