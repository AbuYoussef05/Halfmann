import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import Home from "@/pages/Home";
import Leistungen from "@/pages/Leistungen";
import Referenzen from "@/pages/Referenzen";
import UeberUns from "@/pages/UeberUns";
import Jobs from "@/pages/Jobs";
import Kontakt from "@/pages/Kontakt";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/leistungen" component={Leistungen} />
      <Route path="/referenzen" component={Referenzen} />
      <Route path="/ueber-uns" component={UeberUns} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1 pb-20 lg:pb-0">
            <Router />
          </div>
          <Footer />
          <MobileBottomBar />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
