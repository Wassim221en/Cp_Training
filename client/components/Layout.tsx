import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Trophy, Star, Zap, Code2, Menu, X } from "lucide-react";
import Footer from "@/components/Footer";
interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
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

export default function Layout({ children, hideHeader }: LayoutProps) {
  const location = useLocation();

  const getCurrentLevel = () => {
    if (location.pathname === "/") return "beginner";
    if (location.pathname === "/intermediate") return "intermediate";
    if (location.pathname === "/advanced") return "advanced";
    return "beginner";
  };

  const currentLevel = getCurrentLevel();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      {!hideHeader && (
        <header className="border-b border-border/50 bg-card/95 backdrop-blur-md sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-2xl to-primary/80 flex items-center justify-center shadow-none outline-none focus:outline-none">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F27abe1ecae0b4d49bbeb5b5b25259311%2F4ae0138321b540a787cab39e7f14b572?format=webp&width=800"
                    alt="Aleppo CPC Icon"
                    className="w-[160px] h-[160px] object-contain block"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Aleppo CPC Training</h1>
                  <p className="text-sm text-muted-foreground">Competitive Programming Training</p>
                </div>
              </motion.div>

              {/* Mobile hamburger */}
              <div className="md:hidden">
                <button
                  aria-label="Open menu"
                  className="p-2 rounded-md hover:bg-card/60"
                  onClick={() => setIsOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>

              {/* Level Navigation */}
              <nav className="hidden md:flex gap-3 overflow-x-auto no-scrollbar px-2">
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
                                        relative px-3 py-2 sm:px-6 sm:py-3 rounded-2xl border-2 transition-all duration-300 shadow-lg
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
      )}

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden gap-3 overflow-x-auto  px-2">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute left-0 top-0 bottom-0 w-72 bg-card p-4 shadow-2xl overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">CodePath</h3>
                  <p className="text-xs text-muted-foreground">Training</p>
                </div>
              </div>
              <button aria-label="Close menu" className="p-2 rounded-md" onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-2">
              {levels.map((lvl) => (
                <Link key={lvl.id} to={lvl.path} onClick={() => setIsOpen(false)}>
                  <div className={`px-3 py-2 rounded-lg flex items-center gap-3 ${currentLevel === lvl.id ? 'bg-card/80 shadow-inner' : 'hover:bg-card/60'}`}>
                    <lvl.icon className="w-5 h-5" />
                    <span className="font-medium">{lvl.name}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </motion.aside>
        </div>
      )}

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
      <Footer />
    </div>
  );
}
