import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE_URL = 'https://winvinayainfosystems.com'
const PUBLIC_DIR = path.resolve(__dirname, '../public')

const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about/our-story', priority: '0.8', changefreq: 'weekly' },
  { path: '/about/our-team', priority: '0.8', changefreq: 'weekly' },
  { path: '/about/awards-recognitions', priority: '0.8', changefreq: 'weekly' },
  { path: '/about/winvinaya-foundation', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/accessibility-audit-testing', priority: '0.95', changefreq: 'weekly' },
  { path: '/services/document-remediation', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/corporate-training', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/agentic-ai-custom-apps', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/power-platform-solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/capacity-building', priority: '0.85', changefreq: 'weekly' },
  { path: '/impact/success-stories', priority: '0.85', changefreq: 'weekly' },
  { path: '/impact/testimonials', priority: '0.8', changefreq: 'weekly' },
  { path: '/impact/approvals-certifications', priority: '0.8', changefreq: 'weekly' },
  { path: '/impact/clients-partners', priority: '0.8', changefreq: 'weekly' },
  { path: '/resources/blogs', priority: '0.9', changefreq: 'daily' },
  { path: '/resources/blogs/why-indias-pwd-employment-number-should-alarm-every-employer', priority: '0.85', changefreq: 'monthly' },
  { path: '/resources/blogs/what-it-is-really-like-to-learn-indian-sign-language-as-a-beginner', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/blogs/inside-a-disability-sensitization-workshop-what-actually-happens', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/blogs/five-workplace-myths-about-disability-we-hear-all-the-time', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/blogs/assistive-tech-101-what-screen-readers-are-and-what-developers-get-wrong', priority: '0.85', changefreq: 'monthly' },
  { path: '/resources/blogs/from-intern-to-hire-what-makes-winvinayas-placement-model-different', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/blogs/building-ai-agents-that-are-born-accessible-from-day-one', priority: '0.85', changefreq: 'monthly' },
  { path: '/resources/blogs/why-sebis-accessibility-mandate-changes-the-game-for-indian-capital-markets', priority: '0.85', changefreq: 'monthly' },
  { path: '/resources/blogs/power-bi-for-nonprofits-transforming-fragmented-spreadsheets-into-mission-intelligence', priority: '0.8', changefreq: 'monthly' },
  { path: '/resources/newsletters', priority: '0.85', changefreq: 'monthly' },
  { path: '/resources/ebooks-guides', priority: '0.85', changefreq: 'monthly' },
  { path: '/careers', priority: '0.85', changefreq: 'weekly' },
  { path: '/contact-us', priority: '0.9', changefreq: 'monthly' },
]

export function generateSitemapAndRobots() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true })
  }

  const today = new Date().toISOString().split('T')[0]

  // Generate sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

  // Generate robots.txt
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /*?*

# Sitemaps
Sitemap: ${BASE_URL}/sitemap.xml
`

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf-8')
  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt, 'utf-8')
  console.log('✅ Generated sitemap.xml and robots.txt successfully in public directory.')
}

generateSitemapAndRobots()
