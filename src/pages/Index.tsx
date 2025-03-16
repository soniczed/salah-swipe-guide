
import React from "react";
import HorizontalSwiper from "@/components/HorizontalSwiper";

const Index = () => {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-gray-100">
      <header className="p-4 flex items-center justify-center border-b bg-white/80 backdrop-blur-sm">
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900">Salah Guide</h1>
          <p className="text-sm text-gray-500">Learn and perfect your prayers</p>
        </div>
      </header>
      
      <main className="flex-1 overflow-hidden">
        <HorizontalSwiper />
      </main>
      
      <footer className="p-3 text-center text-xs text-gray-500 bg-white/80 backdrop-blur-sm border-t">
        Swipe horizontally to explore different prayers
      </footer>
    </div>
  );
};

export default Index;
