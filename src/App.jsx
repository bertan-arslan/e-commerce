import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <PageContent />
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
