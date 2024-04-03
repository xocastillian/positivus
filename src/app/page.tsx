import HeroSection from '@/components/HeroSection/HeroSection'
import Services from '@/components/Services/Services'
import ProposalSection from '@/components/ProposalSection/ProposalSection'
import CaseStudies from '@/components/CaseStudies/CaseStudies'
import WorkingProcess from '@/components/WorkingProcess/WorkingProcess'
import Team from '@/components/Team/Team'
import Testimonials from '@/components/Testimonials/Testimonials'
import ContactUs from '@/components/ContactUs/ContactUs'

export default function Home() {
	return (
		<main>
			<HeroSection />
			<Services />
			<ProposalSection />
			<CaseStudies />
			<WorkingProcess />
			<Team />
			<Testimonials />
			<ContactUs />
		</main>
	)
}
