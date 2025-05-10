import NotesEditorMockup from "../assets/mockups/notes-editor.webp";
import OnlineBashMockup from "../assets/mockups/online-bash.webp";
import SimpleTrelloMockup from "../assets/mockups/simple-trello.webp";
import SortAlgoVisualizerMockup from "../assets/mockups/sort-algo-visualizer.webp";
import StreamBoardMockup from "../assets/mockups/stream-board.webp";

export const projects = [
  {
    type: "FullStack Project",
    title: "Simple Trello Clone",
    techs: [
      "Next.js",
      "TailwindCSS",
      "Supabase",
      "PostgreSQL",
      "TypeScript",
      "Framer Motion",
    ],
    description:
      "A Trello clone built with NextJS 14 and TypeScript, using Supabase for OAuth, styled with Tailwind CSS.",
    deploy: "#",
    repo: "#",
    image: SimpleTrelloMockup,
  },
  {
    type: "FullStack Project",
    title: "Markdown Notes Editor",
    techs: [
      "Next.js",
      "TailwindCSS",
      "SQLite",
      "NextAuth.js",
      "Drizzle",
      "TypeScript",
    ],
    description:
      "A Next.js app built with TypeScript that enables users to create, edit, and delete markdown notes.",
    deploy: "#",
    repo: "#",
    image: NotesEditorMockup,
  },
  {
    type: "Fullstack Project",
    title: "Stream Board",
    techs: [
      "Next.js",
      "TailwindCSS",
      "PostgreSQL",
      "NextAuth.js",
      "TypeScript",
      "Socket.io",
    ],
    description:
      "A Next.js app built with TypeScript that provides a free, real-time stream deck for small streamers.",
    deploy: "#",
    repo: "#",
    image: StreamBoardMockup,
  },
  {
    type: "Frontend Project",
    title: "Online Bash",
    techs: ["Vanilla JS", "OOP", "TailwindCSS", "Vite", "TypeScript"],
    description:
      "An interactive online bash environment built with TypeScript, OOP principles, and Vite.",
    deploy: "#",
    repo: "#",
    image: OnlineBashMockup,
  },
  {
    type: "Frontend Project",
    title: "Sort Algorithm Visualizer",
    techs: [
      "Vanilla JS",
      "TailwindCSS",
      "Vite",
      "Sorting Algorithms",
      "TypeScript",
    ],
    description:
      "A TypeScript app that visualizes the sorting algorithm's complexity in real time.",
    deploy: "#",
    repo: "#",
    image: SortAlgoVisualizerMockup,
  },
];
