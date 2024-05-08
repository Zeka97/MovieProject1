import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./components/Context/Provider";
import Layout from "./components/Layout/Layout";
import CustomRoutes from "./components/Routes/CustomRoutes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <BrowserRouter>
          <Layout>
            <CustomRoutes />
          </Layout>
        </BrowserRouter>
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
