import { FaFire } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SidebarIcon icon={<FaFire size="28" />} />
      <SidebarIcon icon={<FaFire size="28" />} />
    </div>
  );
};

const SidebarIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="sidebar-icon">{icon}</div>
);

export default Sidebar;
