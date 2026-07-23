import Club72InnerPage from '../components/Club72InnerPage'

const items = [
  { title: 'The Club72 Floor', description: 'Premium training spaces with scale, energy and room to move.', image: '/club72/hero.jpg', meta: 'Club72 Gym' },
  { title: 'Fitness & Strength', description: 'Equipment and training zones for every stage of your fitness journey.', image: '/club72/fitness.jpg', meta: 'Train' },
  { title: 'Swimming', description: 'A premium pool experience within the complete Club72 ecosystem.', image: '/club72/swimming.jpg', meta: 'Swim' },
  { title: 'Wellness & Recovery', description: 'Purpose-built spaces to recover, reset and return stronger.', image: '/club72/wellness.jpg', meta: 'Recover' },
]

export default function GalleryPage() {
  return <Club72InnerPage eyebrow="Inside Club72" title="Gallery" subtitle="A closer look at the spaces, facilities and energy that make Club72 different." items={items} />
}
