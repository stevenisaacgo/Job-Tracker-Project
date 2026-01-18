import React from 'react';
import { LayoutDashboard, Settings, Briefcase, BarChart2, CalendarIcon, FileText, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  _setActiveTab: (tab: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab,_setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  // Helper to handle navigation and mobile menu closing
  const handleNav = (tab: string) => {
    if(tab === "home"){
      _setActiveTab("dashboard");
    }else{
      _setActiveTab(tab);
    }
    setIsMobileMenuOpen(false);
  };

  const NavItem: React.FC<{ tab: string; icon: LucideIcon; label: string }> = ({ tab, icon: Icon, label }) => (
    <button
      onClick={() => handleNav(tab)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
        activeTab === tab 
          ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
          : 'text-slate-500 cursor-pointer hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      <Icon size={20} strokeWidth={activeTab === tab ? 2.5 : 2} />
      <span className="font-medium">{label}</span>
      {activeTab === tab && <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />}
    </button>
  );

  return (
    <div className={`
      fixed md:static inset-y-0 left-0 z-50 w-64 bg-white h-full border-r border-slate-100 flex flex-col flex-shrink-0 transition-transform duration-300 ease-in-out
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="h-full flex flex-col">
        {/* Logo Area */}
        <div className="p-4">
          <button 
            onClick={() => handleNav("home")}
            className="flex items-center space-x-3 group cursor-pointer w-full text-left p-2 rounded-xl hover:bg-slate-100 transition-all duration-200"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
              <Briefcase size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Hired<span className="text-indigo-600">.</span>
            </span>
          </button>
        </div>
        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2 py-4">
          <NavItem tab="dashboard" icon={LayoutDashboard} label="Board" />
          <NavItem tab="metrics" icon={BarChart2} label="Metrics" />
          <NavItem tab="calendar" icon={CalendarIcon} label="Calendar" />
          <NavItem tab="documents" icon={FileText} label="Documents" />
          <NavItem tab="contacts" icon={Users} label="Contacts" />
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-100">
          <NavItem tab="settings" icon={Settings} label="Settings" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
