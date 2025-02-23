import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/navbar";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Admin from "@/pages/admin";
import Residential from "@/pages/residential";
import Commercial from "@/pages/commercial";
import Industrial from "@/pages/industrial";
import Contact from "@/pages/contact";

function Router() {
  // Get the current URL parameters
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const businessId = searchParams.get('s');

  // Function to preserve URL parameters
  const withParams = (path: string) => {
    return businessId ? `${path}?s=${businessId}` : path;
  };

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/residential" component={Residential} />
      <Route path="/commercial" component={Commercial} />
      <Route path="/industrial" component={Industrial} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;