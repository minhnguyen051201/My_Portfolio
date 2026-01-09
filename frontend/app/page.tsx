import LeftSidebar from "../components/sidebar/LeftSidebar";
import RightSidebar from "../components/sidebar/RightSidebar.tsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground grid min-h-[80vh] grid-cols-[120px_1fr]">
      <LeftSidebar />
      <RightSidebar />
    </main>
  );
}
