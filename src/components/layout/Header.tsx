export default function Header() {
  return (
    <header className="fixed w-full p-3 text-white">
      <ul className="flex items-center justify-center gap-x-2">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projets</a>
        </li>
        <li>
          <a href="#">À propos</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}
