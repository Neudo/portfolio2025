export default function Credits() {
  return (
    <div>
      <h2>Comment fonctionne l'expérience ?</h2>
      <p className="mb-8">
        Cliquez sur les panneaux textuels pour découvrir les différents éléments
        de l'expérience.
      </p>
      <p>
        Vous pouvez naviguer, au choix, avec votre pad ou votre souris, ou en
        cliquant sur les boutons présents en bas de l'écran.
      </p>
      <h2>Technologies utilisées</h2>
      <ul className="mb-8">
        <li>Tanstack router</li>
        <li>Zustand</li>
        <li>Three.js</li>
        <li>React</li>
        <li>React three fiber</li>
        <li>Drei</li>
        <li>Motion</li>
        <li>Blender</li>
        <li>Figma</li>
      </ul>
      <h2>Crédits</h2>
      <p>
        Modèle 3D :{" "}
        <a
          target="_blank"
          className="text-blue-500 hover:underline"
          href="https://sketchfab.com/3d-models/low-poly-city-4a72d39a88264d02af6dde464bbcbb5c"
        >
          Virginia Vidonis, Sketchfab
        </a>
      </p>
    </div>
  );
}
