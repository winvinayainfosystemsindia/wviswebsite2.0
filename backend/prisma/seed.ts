import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // 1. Seed Superadmin User
  const adminEmail = 'admin@winvinaya.com';
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  let adminUser = existingAdmin;
  if (!existingAdmin) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash('WinVinaya@2026!', salt);

    adminUser = await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        name: 'WinVinaya SuperAdmin',
        role: Role.SUPERADMIN,
      },
    });
    console.log('✅ Created Superadmin user: admin@winvinaya.com (password: WinVinaya@2026!)');
  }

  // 2. Seed Categories
  const categories = [
    { slug: 'workplace-inclusion', name: 'Workplace Inclusion', type: 'blog', description: 'Strategies and culture for inclusive workplaces' },
    { slug: 'accessibility', name: 'Accessibility & Tech', type: 'blog', description: 'Digital accessibility, WCAG standards, and testing' },
    { slug: 'community-training', name: 'Community & Training', type: 'blog', description: 'Grassroots skilling and youth enablement' },
    { slug: 'sign-language', name: 'Sign Language & ISL', type: 'blog', description: 'Indian Sign Language and Deaf empowerment' },
    { slug: 'tech-engineering', name: 'Tech & Engineering', type: 'blog', description: 'Modern software engineering and accessible architectures' },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: cat,
      create: cat,
    });
  }
  console.log(`✅ Seeded ${categories.length} content categories`);

  // 3. Seed Featured & Regular Blog Posts
  const blogPosts = [
    {
      slug: 'why-indias-pwd-employment-number-should-alarm-every-employer',
      aliases: ['pwd-employment-gap-should-alarm-every-employer', 'pwd-employment-gap'],
      title: 'Why India’s 0.36% PWD Employment Number Should Alarm Every Employer',
      excerpt:
        'A workforce gap this large isn’t a diversity footnote — it’s a hiring strategy sitting completely untouched. Here’s what the number actually means for your talent pipeline, productivity, and long-term organizational competitiveness.',
      category: 'workplace-inclusion',
      categoryLabel: 'Workplace Inclusion',
      author: 'WinVinaya Research & Advisory',
      authorRole: 'Enterprise Inclusion Practice',
      publishedDate: '15 Jul 2026',
      readTime: '6 min read',
      tileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80',
      isFeatured: true,
      isPublished: true,
      tags: ['Workplace Inclusion', 'Talent Strategy', 'PWD Employment', 'Corporate DEI', 'HR Leadership'],
      highlightBadge: 'Featured Research',
      coverCaption: 'Empowering Persons with Disabilities across India through merit-first hiring pathways.',
      sections: [
        {
          heading: 'The 0.36% Reality in Corporate India',
          paragraphs: [
            'Across India’s formal private sector, Persons with Disabilities (PWD) represent less than 0.36% of the employed workforce. In tech, consulting, and BFSI sectors that pride themselves on global competitiveness, the number often hovers even lower.',
            'This is not merely a social justice shortfall — it is a severe structural inefficiency in how Indian companies identify, assess, and retain high-potential engineering, operations, and analytical talent.',
          ],
        },
        {
          heading: 'The Three Structural Bottlenecks',
          paragraphs: [
            'First, conventional recruitment pipelines filter out candidates with disabilities before a hiring manager ever sees their technical code submissions. Non-accessible testing portals, rigid interview formats that fail to accommodate Indian Sign Language (ISL) or screen reader users, and unadapted job descriptions immediately eliminate qualified talent.',
            'Second, companies lack structured pre-onboarding workplace readiness programs that bridge foundational knowledge with corporate sprint workflows.',
            'Third, assistive technology procurement is often treated as an ad-hoc administrative exception rather than a standardized day-one onboarding requirement.',
          ],
          quoteCallout: {
            text: 'Merit cannot reveal itself in an environment designed with invisible barriers. When you build accessible infrastructure, exceptional performance follows naturally.',
            author: 'WinVinaya Corporate Advisory Team',
          },
          takeaways: [
            'Audit recruitment portals for WCAG 2.2 AA accessibility.',
            'Train interview panels on conducting interviews in Indian Sign Language and with assistive devices.',
            'Partner with specialized talent development institutions to source job-ready engineers.',
          ],
        },
      ],
      authorUserId: adminUser?.id,
    },
    {
      slug: 'wcag-2-2-aa-what-product-engineering-teams-need-to-know',
      aliases: ['wcag-2-2-compliance-guide'],
      title: 'WCAG 2.2 Level AA: What Product & Engineering Teams Need to Know in 2026',
      excerpt:
        'A comprehensive breakdown of the latest Web Content Accessibility Guidelines, focus appearance criteria, target size requirements, and testing automation workflows.',
      category: 'accessibility',
      categoryLabel: 'Accessibility & Tech',
      author: 'WinVinaya Engineering Team',
      authorRole: 'IAAP Certified Accessibility Engineers',
      publishedDate: '28 Jun 2026',
      readTime: '8 min read',
      tileImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80',
      isFeatured: false,
      isPublished: true,
      tags: ['WCAG 2.2', 'Web Development', 'Testing Automation', 'Screen Readers'],
      sections: [
        {
          heading: 'Key Updates in WCAG 2.2 Level AA',
          paragraphs: [
            'WCAG 2.2 introduces nine new success criteria focused on users with cognitive disabilities, low vision, and motor impairments on mobile touchscreens.',
            'Notable criteria include 2.4.11 Focus Appearance, 2.5.7 Dragging Movements, 2.5.8 Target Size (Minimum), and 3.3.7 Redundant Entry.',
          ],
          takeaways: [
            'Ensure minimum touch target size of 24x24 CSS pixels.',
            'Provide alternative single-pointer mechanisms for drag-and-drop operations.',
            'Integrate automated axe-core linters and manual screen reader audits in CI/CD.',
          ],
        },
      ],
      authorUserId: adminUser?.id,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }
  console.log(`✅ Seeded ${blogPosts.length} blog posts`);

  // 4. Seed Newsletters
  const newsletters = [
    {
      title: 'WinVinaya Newsletter — July 2026',
      publishedDate: '1 Jul 2026',
      year: '2026',
      excerpt:
        'Expanding corporate engagement across BFSI and IT sectors with our newly launched specialized training tracks in accessible software testing, RPA automation, and workplace readiness.',
      coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
      pdfUrl: 'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
      isFeatured: true,
      isPublished: true,
      sortOrder: 1,
    },
    {
      title: 'WinVinaya Newsletter — June 2026',
      publishedDate: '1 Jun 2026',
      year: '2026',
      excerpt:
        'A deep dive into governance training at Niranthara, new corporate hiring partnerships with global energy leaders, and high-impact software testing placements.',
      coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
      isFeatured: false,
      isPublished: true,
      sortOrder: 2,
    },
  ];

  for (const nl of newsletters) {
    const existing = await prisma.newsletter.findFirst({ where: { title: nl.title } });
    if (existing) {
      await prisma.newsletter.update({ where: { id: existing.id }, data: nl });
    } else {
      await prisma.newsletter.create({ data: nl });
    }
  }
  console.log(`✅ Seeded ${newsletters.length} newsletters`);

  // 5. Seed eBooks & Guides
  const ebooks = [
    {
      title: 'The Inclusive Workplace Playbook: Hiring & Retaining Persons with Disabilities',
      category: 'Workplace Inclusion',
      author: 'WinVinaya Foundation & Corporate Advisory Board',
      description:
        'A definitive, end-to-end operational guide for HR leaders, recruiters, and managers on sourcing, interviewing, onboarding, and scaling merit-based career pathways for Persons with Disabilities in corporate India.',
      tileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
      pdfUrl: 'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
      epubUrl: 'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
      isFeatured: true,
      isPublished: true,
      sortOrder: 1,
    },
    {
      title: 'Digital Accessibility Blueprint: WCAG 2.2 AA Compliance Guide',
      category: 'Digital Accessibility',
      author: 'WinVinaya Accessibility Practice (IAAP Certified)',
      description:
        'A practical engineering and design manual for software teams on delivering WCAG 2.2 Level AA compliant web portals, mobile apps, and enterprise design systems.',
      tileImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
      epubUrl: 'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
      isFeatured: false,
      isPublished: true,
      sortOrder: 2,
    },
  ];

  for (const eb of ebooks) {
    const existing = await prisma.ebook.findFirst({ where: { title: eb.title } });
    if (existing) {
      await prisma.ebook.update({ where: { id: existing.id }, data: eb });
    } else {
      await prisma.ebook.create({ data: eb });
    }
  }
  console.log(`✅ Seeded ${ebooks.length} eBooks`);

  // 6. Seed Career Domains / Internship Openings
  const careerDomains = [
    {
      title: 'Digital Accessibility Auditing & QA',
      department: 'Accessibility Services',
      type: 'Internship',
      location: 'Bengaluru / Hybrid',
      skills: ['WCAG 2.2 AA', 'NVDA', 'JAWS', 'TalkBack', 'VoiceOver', 'Colour Contrast Testing'],
      description:
        'Audit live web applications, mobile apps, and design systems for enterprise compliance, log cross-disability barrier reports, and collaborate on remediation fixes.',
      responsibilities: [
        'Perform manual screen reader audits with NVDA, JAWS, and VoiceOver.',
        'Execute automated audits using axe-core and browser devtools.',
        'Document detailed bug reports with exact code remediation guidance.',
      ],
      requirements: [
        'Basic understanding of HTML, CSS, and ARIA semantic attributes.',
        'Strong passion for digital inclusion and empathy for assistive technology users.',
      ],
      isPublished: true,
      sortOrder: 1,
    },
    {
      title: 'Full-Stack Software Development',
      department: 'Engineering',
      type: 'Internship',
      location: 'Bengaluru / Hybrid',
      skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'Prisma', 'REST APIs'],
      description:
        'Build and enhance modern web applications, accessible component design systems, and portal features using clean, maintainable architecture.',
      responsibilities: [
        'Develop accessible UI components with full keyboard and screen reader support.',
        'Write clean REST APIs and database queries with TypeScript and Prisma.',
        'Participate in agile sprint ceremonies and code reviews.',
      ],
      requirements: [
        'Familiarity with modern JavaScript, React, and TypeScript fundamentals.',
        'Problem-solving mindset and eagerness to learn full-stack best practices.',
      ],
      isPublished: true,
      sortOrder: 2,
    },
  ];

  for (const cd of careerDomains) {
    const existing = await prisma.careerDomain.findFirst({ where: { title: cd.title } });
    if (existing) {
      await prisma.careerDomain.update({ where: { id: existing.id }, data: cd });
    } else {
      await prisma.careerDomain.create({ data: cd });
    }
  }
  console.log(`✅ Seeded ${careerDomains.length} career domains`);

  // 7. Seed Testimonials
  const testimonials = [
    {
      name: 'Head of Digital Experience & Compliance',
      role: 'Lead Product Manager',
      organization: 'Top FinTech Institution',
      content:
        'The three-round audit cycle gave our engineering and product teams clarity from day one. Having both the exact technical code fix and an alternative UX recommendation meant we resolved every critical accessibility gap without having to redesign our core visual layouts from scratch.',
      rating: 5,
      category: 'Fintech & Compliance',
      isFeatured: true,
      isPublished: true,
      sortOrder: 1,
    },
    {
      name: 'VP of Engineering',
      role: 'Vice President of Software Engineering',
      organization: 'Healthcare Technology Solutions',
      content:
        'WinVinaya trained and placed candidate cohort in our automated QA team exceeded every benchmark. Their deep familiarity with test suites and screen readers helped our entire engineering culture shift left on accessibility.',
      rating: 5,
      category: 'QA Automation',
      isFeatured: true,
      isPublished: true,
      sortOrder: 2,
    },
  ];

  for (const t of testimonials) {
    const existing = await prisma.testimonial.findFirst({ where: { name: t.name, organization: t.organization } });
    if (existing) {
      await prisma.testimonial.update({ where: { id: existing.id }, data: t });
    } else {
      await prisma.testimonial.create({ data: t });
    }
  }
  console.log(`✅ Seeded ${testimonials.length} testimonials`);

  // 8. Seed Success Stories
  const stories = [
    {
      slug: 'deaf-software-engineer-bfsi-automation',
      title: 'From Intensive Training to Leading BFSI Test Automation',
      personName: 'Praveen K.',
      personRole: 'Senior QA Automation Engineer',
      organization: 'Global BFSI Leader',
      disabilityType: 'Deaf / Hard of Hearing',
      summary:
        'How specialized technical skilling in Core Java, Selenium, and Indian Sign Language enabled Praveen to build enterprise-grade automation frameworks for a Fortune 500 financial giant.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPublished: true,
      sortOrder: 1,
    },
  ];

  for (const s of stories) {
    await prisma.story.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    });
  }
  console.log(`✅ Seeded ${stories.length} success stories`);

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
