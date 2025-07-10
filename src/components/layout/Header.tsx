import { Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="w-fit absolute top-4 left-2 right-0 z-50 ">
      <ul className="flex items-center font-bold shadow-sm justify-center gap-x-4 sm:gap-x-6 bg-slate-100 rounded-2xl py-3 px-4 sm:px-8 w-fit mx-auto">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/works">Projets</a>
        </li>
        <li>
          <a href="mailto:quentin.bassalair@gmail.com">
            <Mail size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/quentin-bassalair-05556b190/"
            target="_blank"
          >
            <Linkedin size={20} color="#1166C2" />
          </a>
        </li>
      </ul>
    </header>
  );
}
