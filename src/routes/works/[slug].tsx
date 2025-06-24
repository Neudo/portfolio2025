import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/works/[slug]')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/works/[slug]"!</div>
}
