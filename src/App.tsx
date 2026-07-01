import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteGuards } from "@/components/portfolio/SiteGuards";
import { MobileRecruiterBar } from "@/components/portfolio/MobileRecruiterBar";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Work from "./pages/Work.tsx";
import Process from "./pages/Process.tsx";
import Experience from "./pages/Experience.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import WorkDetail from "./pages/WorkDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
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
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/process" element={<Process />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/case/terranxt" element={<CaseStudyPvNXT />} />
              <Route path="/work/:slug" element={<WorkDetail />} />
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
