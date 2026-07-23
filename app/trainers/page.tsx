import Club72InnerPage from '../components/Club72InnerPage'

const items = [
  { title: 'Strength Coaches', description: 'Technique, progressive overload and structured strength development.', image: '/club72/coaching.jpg', meta: 'Strength & muscle' },
  { title: 'Performance Coaches', description: 'Functional training, endurance and conditioning built around performance.', image: '/club72/training.jpg', meta: 'Conditioning' },
  { title: 'Wellness Coaches', description: 'Mobility, recovery and sustainable fitness support for long-term progress.', image: '/club72/wellness.jpg', meta: 'Move & recover' },
]

export default function TrainersPage() {
  return <Club72InnerPage eyebrow="Coached for results" title="Meet The Trainers" subtitle="Expert guidance, personal attention and a training plan made for your goal." items={items} />
}
