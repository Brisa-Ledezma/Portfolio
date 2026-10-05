// Los tres perfiles a la vista a la vez, separados por el destello de la marca.
// La entrada (cada rol se descubre de izquierda a derecha) la anima Hero.tsx.
export function RoleList({ roles }: { roles: string[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm text-detail md:text-base">
      {roles.map((role, i) => (
        <li key={role} className="flex items-center gap-4">
          {i > 0 && (
            <span data-role-star aria-hidden="true" className="text-gold">
              ✦
            </span>
          )}
          <span data-role className="inline-block">
            {role}
          </span>
        </li>
      ))}
    </ul>
  )
}
