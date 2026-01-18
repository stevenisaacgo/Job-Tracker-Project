import { useState } from 'react'
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddJobClick = () => {
    console.log("Add New Job Clicked");
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden transition-colors duration-300">
      <Sidebar 
        activeTab={activeTab} 
        _setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        <Header 
          activeTab={activeTab}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          onAddClick={handleAddJobClick}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        /> 
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-slate-500">Content for {activeTab} goes here...</p>
          </div>
        </main>
      </div>
    </div>
  )
}


