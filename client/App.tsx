import "./global.css";

import React, { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Intermediate from "./pages/Intermediate";
import Advanced from "./pages/Advanced";
import NotFound from "./pages/NotFound";
import Splash from "@/components/Splash";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Splash overlay */}
        {showSplash && (
          <Splash imageSrc={`https://cdn.builder.io/api/v1/image/assets%2F27abe1ecae0b4d49bbeb5b5b25259311%2F4ae0138321b540a787cab39e7f14b572?format=webp&width=800`} duration={5000} />
        )}

        <Toaster />
        <Sonner />
        <BrowserRouter basename="/Cp_Training">
          <Layout >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/intermediate" element={<Intermediate />} />
              <Route path="/advanced" element={<Advanced />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
