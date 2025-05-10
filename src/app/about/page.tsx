const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-20 px-4 max-w-4xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-extralight tracking-tight text-black mb-6">About Us</h1>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Shuchitabodh: An International Journal of Humanities (SIRJH)
          </p>
        </header>

        <div className="space-y-16">
          {/* Introduction */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Introduction</h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 leading-relaxed">
                Shuchitabodh: An International Journal of Humanities (SIRJH) is a peer-reviewed, open access academic journal dedicated to advancing scholarship in the diverse fields of humanities. Founded with a vision to promote rigorous research and intellectual exchange, our journal provides a platform for scholars, researchers, and academics to share their work with a global audience.
              </p>
            </div>
          </section>

          {/* Mission and Vision */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Mission and Vision</h2>
            </div>
            <div className="pl-14 space-y-8">
              <div className="p-6 bg-gray-50 border-l-4 border-black">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To publish high-quality scholarly research that contributes to the advancement of knowledge in humanities disciplines, with particular emphasis on cultural studies, literary analysis, philosophical inquiry, historical research, and interdisciplinary approaches that bridge traditional academic boundaries.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 border-l-4 border-black">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become a leading international forum for innovative humanities research that addresses contemporary challenges, preserves cultural heritage, and fosters cross-cultural dialogue and understanding.
                </p>
              </div>
            </div>
          </section>

          {/* Scope and Focus Areas */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Scope and Focus Areas</h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 leading-relaxed mb-6">
                Shuchitabodh publishes original research across a wide spectrum of humanities disciplines, including but not limited to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Literary studies and criticism</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Linguistics and language studies</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Cultural studies</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Philosophy and ethics</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Historical research</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Religious studies</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Translation studies</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Digital humanities</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Comparative literature</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Interdisciplinary humanities research</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                We particularly welcome research that explores:
              </p>
              
              <ul className="space-y-3">
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Indigenous knowledge systems</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Cultural preservation and heritage</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Multilingual and cross-cultural perspectives</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Contemporary social issues through humanities lenses</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Digital approaches to traditional humanities questions</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Publication Information */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Publication Information</h2>
            </div>
            <div className="pl-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 border-b md:border-b-0 md:border-r border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-2">Frequency</h3>
                  <p className="text-gray-700">Quarterly (January-March, April-June, July-September, October-December)</p>
                </div>
                
                <div className="p-5 border-b md:border-b-0 border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-2">Languages</h3>
                  <p className="text-gray-700">Manuscripts accepted in English, Hindi, and Marathi</p>
                </div>
                
                <div className="p-5 border-b md:border-b-0 md:border-r border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-2">Format</h3>
                  <p className="text-gray-700">Open access online journal with complete archives available</p>
                </div>
                
                <div className="p-5">
                  <h3 className="font-medium text-gray-900 mb-2">ISSN</h3>
                  <p className="text-gray-700">[Journal ISSN Number]</p>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Our Values</h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 leading-relaxed mb-6">
                Shuchitabodh is committed to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Academic Excellence</h3>
                  <p className="text-gray-700">We uphold rigorous standards of scholarship through thorough peer review and editorial oversight.</p>
                </div>
                
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Inclusivity</h3>
                  <p className="text-gray-700">We welcome diverse perspectives, methodologies, and cultural viewpoints, recognizing that humanities research benefits from plurality of thought.</p>
                </div>
                
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Integrity</h3>
                  <p className="text-gray-700">We maintain the highest ethical standards in publishing, ensuring transparency, honesty, and fairness in all aspects of our operations.</p>
                </div>
                
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Accessibility</h3>
                  <p className="text-gray-700">As an open access journal, we make all research freely available to readers worldwide, believing that knowledge should be accessible to all.</p>
                </div>
                
                <div className="p-5 border-l-2 border-gray-200 md:col-span-2">
                  <h3 className="font-medium text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-700">We encourage innovative approaches to humanities research, including interdisciplinary methods and digital humanities techniques.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Peer Review */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Peer Review</h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 leading-relaxed">
                All manuscripts undergo a rigorous double-blind peer review process, ensuring that published research meets the highest standards of academic quality. Our reviewers are experts in their respective fields who provide constructive feedback to help authors refine and strengthen their work.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Contact Information</h2>
            </div>
            <div className="pl-14">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Editorial Team</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-gray-800">Dr. Amol R. Bute</p>
                        <p className="text-gray-600 text-sm">Editor in Chief</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Dr. Devendra Puri</p>
                        <p className="text-gray-600 text-sm">Editor in Chief</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Connect With Us</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p className="text-gray-700">+91-9822573240, 7709968675</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <a href="mailto:shuchitabodh@gmail.com" className="text-gray-700 hover:text-black">
                            shuchitabodh@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Journal Office</h3>
                    <p className="text-gray-700">
                      Shuchitabodh: an International Research Journal of Humanities<br />
                      Shramsafalya Housing Society,<br />
                      Sham Nagar, Ambejogai Road,<br />
                      Latur- 413512 Maharashtra
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Publication Office</h3>
                    <p className="text-gray-700">
                      Sarvadristi Publication<br />
                      Abbaspura, Achalpur,<br />
                      Dist. Amravati. Maharashtra Pin. 444806
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <a href="/contact" className="inline-flex items-center text-gray-800 border-b border-gray-300 hover:border-gray-800 transition-colors">
                  <span>Visit our Contact Page for more information</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              <div className="flex justify-center mt-10">
                <a href="/submit" className="px-10 py-3 bg-black text-white text-sm hover:bg-gray-800 transition-colors inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Submit Manuscript
                </a>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-20 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            Join us in our mission to advance humanities scholarship and foster intellectual exchange across disciplines, cultures, and borders.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;