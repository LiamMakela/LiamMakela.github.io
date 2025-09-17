import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Backgorund Effects */}
      <StarBackground />
      {/* Navbar */}

      {/* Main Content */}

      {/* Footer */}
    </div>
  );
};
