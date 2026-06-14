function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-accent-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Secure AI Solutions for Regulated Industries
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Full-stack AI SaaS development for legal, financial, and compliance organizations.
              Enterprise-grade document analysis, RAG architecture, and secure workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors shadow-lg"
              >
                Get Started
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-white text-accent-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-accent-600"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Production-ready AI applications built with enterprise security, scalability, and compliance in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-accent-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Document Intelligence & RAG</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>PDF, Word, Excel analysis with structured extraction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Vector database architecture (Pinecone, Weaviate, Qdrant)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Semantic search and knowledge-base integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>OpenAI, Anthropic Claude, Azure OpenAI integration</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Enterprise Security & Compliance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Role-based access control (RBAC) and authentication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Data encryption at rest and in transit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Audit logs and customer data separation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>HIPAA, SOC 2, and GDPR compliance patterns</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Admin Dashboards & Workflows</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Custom admin panels with analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>AI agent orchestration and workflow automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Real-time data processing and notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Structured output generation (PDF, Excel, Word)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-accent-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cloud Infrastructure & DevOps</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>AWS, Azure, GCP deployment and architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Docker containerization and Kubernetes orchestration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>CI/CD pipelines and automated testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Monitoring, logging, and incident response</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern, production-tested technologies for enterprise AI applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">AI & ML</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>OpenAI GPT-4</li>
                <li>Anthropic Claude</li>
                <li>Azure OpenAI</li>
                <li>LangChain</li>
                <li>LlamaIndex</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Vector Databases</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Pinecone</li>
                <li>Weaviate</li>
                <li>Qdrant</li>
                <li>Chroma</li>
                <li>pgvector</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Backend</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Node.js / Python</li>
                <li>FastAPI / Express</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>GraphQL / REST</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Frontend</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>shadcn/ui</li>
                <li>Recharts</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Authentication</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Auth0</li>
                <li>Clerk</li>
                <li>NextAuth.js</li>
                <li>Supabase Auth</li>
                <li>JWT / OAuth</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Cloud & Infra</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>AWS / Azure / GCP</li>
                <li>Vercel / Railway</li>
                <li>Docker</li>
                <li>GitHub Actions</li>
                <li>Terraform</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">File Storage</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>AWS S3</li>
                <li>Azure Blob</li>
                <li>Supabase Storage</li>
                <li>Cloudflare R2</li>
                <li>MinIO</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Document Processing</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>pdf-parse / PyPDF2</li>
                <li>mammoth (Word)</li>
                <li>xlsx / openpyxl</li>
                <li>Unstructured.io</li>
                <li>Azure Form Rec.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven expertise building AI solutions for highly regulated sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-8 hover:border-accent-600 transition-colors">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Tech</h3>
              <p className="text-gray-600">
                Contract analysis, case research, document review automation, and legal knowledge management systems
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:border-accent-600 transition-colors">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Services</h3>
              <p className="text-gray-600">
                Risk assessment, compliance reporting, fraud detection, and intelligent document processing
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 hover:border-accent-600 transition-colors">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance & Risk</h3>
              <p className="text-gray-600">
                Regulatory compliance automation, audit trail management, and policy analysis platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-accent-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your AI Platform?
          </h2>
          <p className="text-xl text-accent-100 mb-10">
            Let's discuss your requirements and create a secure, scalable AI solution tailored to your industry
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block px-8 py-4 bg-white text-accent-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">AI SaaS Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RAG Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Document Intelligence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Legal Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financial Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance & Risk</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">OpenAI & Anthropic</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vector Databases</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security & Compliance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 AI Product Engineer. All rights reserved. Built with enterprise security and compliance in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
