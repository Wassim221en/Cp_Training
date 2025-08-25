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
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/95 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <Code2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">CodePath</h1>
                <p className="text-sm text-muted-foreground">Competitive Programming Training</p>
              </div>
            </motion.div>

            {/* Level Navigation */}
            <nav className="flex gap-3">
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
                          relative px-6 py-3 rounded-2xl border-2 transition-all duration-300 shadow-lg
                          ${isActive 
                            ? `${level.bgColor} ${level.borderColor} ${level.color} shadow-xl` 
                            : "bg-card/70 border-border/50 text-muted-foreground hover:bg-card hover:border-border hover:shadow-xl"
                          }
                        `}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5" />
                          <span className="font-semibold">{level.name}</span>
                        </div>
                        {isActive && (
                          <motion.div
                            className={`absolute -bottom-1 left-1/2 w-2 h-2 rounded-full ${level.color.replace('text-', 'bg-')} shadow-lg`}
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
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
