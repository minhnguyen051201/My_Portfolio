import LeftSidebar from "../components/sidebar/LeftSidebar";
import RightSidebar from "../components/sidebar/RightSidebar";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground grid grid-cols-[80px_1fr]">
      <LeftSidebar />
      <RightSidebar />
    </main>
  );
}
