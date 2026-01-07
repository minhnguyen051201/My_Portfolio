import LeftSidebar from "../components/sidebar/LeftSidebar"
import RightSidebar from "../components/sidebar/RightSidebar.tsx"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      Hello from Minh Nguyen right now
      <LeftSidebar/>
      <RightSidebar/>
    </main>
  );
}
