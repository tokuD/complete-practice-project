import { MemberForm, MemberList } from '@/components'

export default function Home() {
  return (
    <main className='w-[800px] mx-auto py-8 flex flex-col gap-8'>
      <MemberForm />
      <MemberList />
    </main>
  )
}
