
'use client';

import AppHeader from '@/ui/AppHeader';
import DashboardContent from '@/ui/DashboardContent';

export default function AppPage() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <AppHeader 
        projectName="Fashion Store"
        projectStats={{ sites: 2, platforms: 4, tasks: 2 }}
        userProfile={{ name: "John Doe", email: "john@example.com" }}
      />
      
      {/* Main Content */}
      <DashboardContent />
      
    </div>
  );
}