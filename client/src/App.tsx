
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { BackToTop } from "@/components/ui/back-to-top";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import Privacy from "@/pages/privacy";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <div className="min-h-screen bg-[#010108]">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/privacy" component={Privacy} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
