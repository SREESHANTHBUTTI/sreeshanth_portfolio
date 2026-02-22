'use client'

import HeroCard from '@/components/cards/HeroCard'
import ContactCard from '@/components/cards/ContactCard'
import SummarySkillsCard from '@/components/cards/SummarySkillsCard'
import ProjectsCard from '@/components/cards/ProjectsCard'
import InterestsCard from '@/components/cards/InterestsCard'
import LeadershipCard from '@/components/cards/LeadershipCard'
import EducationCard from '@/components/cards/EducationCard'
import ProfileSnapshotCard from '@/components/cards/ProfileSnapshotCard'
import NextStepsCard from '@/components/cards/NextStepsCard'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="space-y-12 py-16 px-4 md:px-8">
        <HeroCard />
        <ContactCard />
        <SummarySkillsCard />
        <ProjectsCard />
        <InterestsCard />
        <LeadershipCard />
        <EducationCard />
        <ProfileSnapshotCard />
        <NextStepsCard />
      </div>
    </main>
  )
}
