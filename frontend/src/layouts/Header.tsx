import React from 'react';
import { Menu, Search, Plus } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  onAddClick: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  activeTab, 
  setIsMobileMenuOpen, 
  onAddClick,
  searchQuery,
  setSearchQuery 
}) => {
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-4 md:px-8 flex-shrink-0 z-10 sticky top-0">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-slate-500 hover:text-slate-700 transition-colors"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-slate-800 capitalize truncate max-w-[150px] md:max-w-none">
          {activeTab}
        </h1>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4">
         <div className="relative hidden md:block group">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
           <input 
             type="text" 
             placeholder="Search jobs..." 
             className="bg-slate-50 border border-slate-200 pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 w-64 transition-all text-slate-800 placeholder:text-slate-400"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
           />
         </div>
         <button className="md:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-full">
           <Search size={20} />
         </button>
         <button 
           onClick={onAddClick}
           className="bg-slate-900 text-white p-2 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95"
           title="Add New"
         >
           <Plus size={20} />
         </button>
      </div>
    </header>
  );
};

export default Header;
