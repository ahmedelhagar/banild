'use client';
import AppHeader from '@/ui/AppHeader';
import PromptInput from '@/components/promptInput';

export default function AppPage() {

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <AppHeader
        userProfile={{
          name: "Ibrahim Ismael",
          email: "ibrahim@example.com",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
          // avatar: "/path/to/avatar.jpg" // Optional: add avatar path
        }}
        showUpgrade={true}
        upgradeText="Upgrade"
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <PromptInput
          onSubmit={(message, files, mode) => {
            console.log('Message:', message);
            console.log('Files:', files);
            console.log('Mode:', mode);
            // Here you can handle the submission
          }}
          placeholder="Ask me anything or assign a task..."
        />
      </div>
    </div>
  );
}