import { Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full absolute top-5 left-0 right-0 z-50 ">
      <ul className="flex items-center font-bold shadow-sm justify-center gap-x-6 bg-slate-100 rounded-2xl py-3 px-8 w-fit mx-auto">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/works">Projets</a>
        </li>
        <li>
          <a href="mailto:quentin.bassalair@gmail.com">Me contacter</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/quentin-bassalair-05556b190/"
            target="_blank"
          >
            <Linkedin size={24} color="#1166C2" />
          </a>
        </li>
      </ul>
    </header>
  );
}
