import { NavLink } from "react-router";
import Container from "../../Container";

export default function ShoutOuts() {
  const tools = [
    { name: "React", url: "https://react.dev" },
    { name: "Vite", url: "https://vitejs.dev" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com" },
    { name: "Radix UI", url: "https://www.radix-ui.com/" },
    { name: "React Router", url: "https://reactrouter.com" },
    { name: "React Icons", url: "https://react-icons.github.io/react-icons/" },
  ];

    return (
      <Container>
        <main className="min-h-screen text-white px-6 md:px-16 py-12 font-[faustina]">
          <div className="max-w-xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-400 mb-6 flex gap-2">
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
              <span className="text-white">›</span>
              <span className="text-white">Shout Outs</span>
            </nav>

            {/* Title */}
            <h1 className="text-2xl font-bold mb-6">Shout Outs</h1>

            {/* List */}
            <ul className="space-y-4">
              {tools.map(({ name, url }, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-gray-400 text-lg">{">"}</span>
                  <a
                    href={url}
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </Container>
    );
}