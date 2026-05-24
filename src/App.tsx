import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteGuards } from "@/components/portfolio/SiteGuards";
import { MobileRecruiterBar } from "@/components/portfolio/MobileRecruiterBar";
import Index from "./pages/Index.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import NotFound from "./pages/NotFound.tsx";
import TerranxtCaseStudy from "./components/portfolio/CaseStudy/CaseStudyPvNXT.tsx";
import CaseStudyPvNXT from "./components/portfolio/CaseStudy/CaseStudyPvNXT.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <SiteGuards /> */}
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] md:pb-0">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case/terranxt" element={<CaseStudyPvNXT />} />
            {/* <Route path="/case/terranxt" element={<CaseStudy />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <MobileRecruiterBar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
