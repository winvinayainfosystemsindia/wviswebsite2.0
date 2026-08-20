export interface TeamMember {
  id: string
  name: string
  role: string
}

export const leadershipTeam: TeamMember[] = [
  { id: 'shiva-jayagopal', name: 'Sivasankar "Shiva" Jayagopal', role: 'Founder & Director' },
  { id: 'akila-sankar', name: 'Akila Sankar', role: 'Co-Founder' },
  { id: 'g-aravindan', name: 'G. Aravindan', role: 'Technical Director, Business Intelligence' },
  { id: 'baskaran-arumugam', name: 'Baskaran Arumugam', role: 'Director, Products' },
]

export const coreTeam: TeamMember[] = [
  { id: 'dharanidaran-annadurai', name: 'Dharanidaran Annadurai', role: 'Technical Lead' },
  { id: 'arun-kumar-s', name: 'Arun Kumar S', role: 'Senior Accessibility Tester' },
  { id: 'dharanipathy', name: 'Dharanipathy', role: 'Trainer' },
  { id: 'rajat-nautiyal', name: 'Rajat Nautiyal', role: 'Trainer' },
  { id: 'divya-ck', name: 'Divya CK', role: 'Consultant' },
]
