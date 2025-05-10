const BookPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-20 px-4 max-w-4xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-extralight tracking-tight text-black mb-6">Book Publications</h1>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-8"></div>
        </header>

        <div className="space-y-16">
          {/* Introduction */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Publication Series</h2>
            </div>
            <div className="pl-14">
              <h3 className="text-xl font-light text-gray-900 mb-5">Shuchitabodh Monograph Series in Humanities</h3>
              <p className="text-gray-700 leading-relaxed">
                Shuchitabodh: An International Journal of Humanities is pleased to announce its monograph series dedicated to publishing original research in humanities disciplines. The series aims to promote scholarly excellence and provide a platform for in-depth exploration of significant topics in the humanities.
              </p>
            </div>
          </section>

          {/* About the Series */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">About the Series</h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 mb-6">The Shuchitabodh Monograph Series publishes:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Original research monographs</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Edited volumes on specialized topics</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Translated works of significance</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Revised dissertations of exceptional quality</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700 mb-6">Our series focuses on humanities research with particular emphasis on:</p>
              
              <ul className="space-y-3">
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Indian languages, literatures, and cultures</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Comparative literary and cultural studies</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Historical and philosophical research</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Interdisciplinary approaches in humanities</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Digital humanities innovations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Current Titles */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Current Titles</h2>
            </div>
            <div className="pl-14 space-y-8">
              <div className="p-6 border-l-2 border-gray-200">
                <div className="flex items-start">
                  <span className="text-2xl font-extralight text-gray-400 mr-4">1</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Reimagining Folk Traditions in Contemporary Indian Arts</h3>
                    <p className="text-gray-700 mb-1 italic">Edited by Dr. Meena Sharma and Dr. Rajiv Patil</p>
                    <p className="text-gray-500 text-sm mb-3">Published: January 2025</p>
                    <p className="text-gray-700">
                      This volume explores how traditional folk forms are being adapted, reimagined, and integrated into contemporary artistic expressions across India. Contributors examine case studies from visual arts, performance, literature, and new media.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-l-2 border-gray-200">
                <div className="flex items-start">
                  <span className="text-2xl font-extralight text-gray-400 mr-4">2</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Literary Landscapes: Place and Identity in Modern Indian Writing</h3>
                    <p className="text-gray-700 mb-1 italic">By Dr. Sunita Rao</p>
                    <p className="text-gray-500 text-sm mb-3">Published: October 2024</p>
                    <p className="text-gray-700">
                      This monograph examines the representation of place and its relationship to identity formation in modern Indian literature across multiple languages, exploring how physical and imagined landscapes shape literary narratives.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-l-2 border-gray-200">
                <div className="flex items-start">
                  <span className="text-2xl font-extralight text-gray-400 mr-4">3</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Translation as Cultural Dialogue: Theory and Practice</h3>
                    <p className="text-gray-700 mb-1 italic">Edited by Dr. Anand Singh and Dr. Priya Kapoor</p>
                    <p className="text-gray-500 text-sm mb-3">Published: July 2024</p>
                    <p className="text-gray-700">
                      This collection brings together scholars and practitioners to explore translation as a site of cultural dialogue, negotiation, and exchange, with particular focus on translations between Indian languages and with global languages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Forthcoming Titles */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Forthcoming Titles</h2>
            </div>
            <div className="pl-14 space-y-8">
              <div className="p-6 bg-gray-50 border-l-2 border-gray-200">
                <div className="flex items-start">
                  <span className="text-2xl font-extralight text-gray-400 mr-4">4</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Digital Archives and Cultural Memory: New Approaches to Heritage Preservation</h3>
                    <p className="text-gray-700 mb-1 italic">By Dr. Vikram Patel</p>
                    <p className="text-gray-500 text-sm mb-3">Forthcoming: July 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 border-l-2 border-gray-200">
                <div className="flex items-start">
                  <span className="text-2xl font-extralight text-gray-400 mr-4">5</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Philosophical Traditions in Dialogue: Indian and Western Epistemologies</h3>
                    <p className="text-gray-700 mb-1 italic">By Dr. Rajesh Kumar</p>
                    <p className="text-gray-500 text-sm mb-3">Forthcoming: December 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Submission Guidelines */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Submission Guidelines</h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 mb-6">
                We welcome proposals for the Shuchitabodh Monograph Series from established and emerging scholars. Proposals should include:
              </p>
              
              <div className="space-y-6">
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">Prospectus (3-5 pages):</h3>
                  <ul className="space-y-2 ml-5">
                    <li className="flex">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">Title and author/editor information</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">Synopsis of the work</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">Table of contents with chapter summaries</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">Intended audience and market</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">Comparative titles</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">Estimated length and completion timeline</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-1">Author CV:</h3>
                  <p className="text-gray-700">Complete curriculum vitae of author(s) or editor(s)</p>
                </div>
                
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-1">Sample Chapter:</h3>
                  <p className="text-gray-700">One complete chapter (if available)</p>
                </div>
              </div>
              
              <p className="text-gray-700 mt-6">
                Please submit your proposal to [book series email].
              </p>
            </div>
          </section>

          {/* Review Process */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Review Process</h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 mb-6">Book proposals undergo a two-stage review process:</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex">
                  <span className="text-gray-400 mr-3">1.</span>
                  <span className="text-gray-700">Initial assessment by the Series Editors</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">2.</span>
                  <span className="text-gray-700">External peer review by subject specialists</span>
                </li>
              </ul>
              
              <p className="text-gray-700">
                The review process typically takes 2-3 months, after which authors will receive detailed feedback and a publication decision.
              </p>
            </div>
          </section>

          {/* Publication Process */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Publication Process</h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 mb-6">Accepted manuscripts undergo:</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Developmental editing</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Copy editing</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Typesetting</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Proofreading</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Indexing</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">Production and distribution</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700">
                Books are published in both print and digital formats, with distribution through major academic book distributors in India and internationally.
              </p>
            </div>
          </section>

          {/* Series Editors */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Series Editors</h2>
            </div>
            <div className="pl-14">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-5">
                  <h3 className="font-medium text-gray-900 mb-1">Dr. Anjali Sharma</h3>
                  <p className="text-gray-700 text-sm">Professor of Comparative Literature</p>
                  <p className="text-gray-700 text-sm">University of Delhi</p>
                </div>
                
                <div className="p-5">
                  <h3 className="font-medium text-gray-900 mb-1">Dr. Sunil Patil</h3>
                  <p className="text-gray-700 text-sm">Professor of Cultural Studies</p>
                  <p className="text-gray-700 text-sm">University of Mumbai</p>
                </div>
                
                <div className="p-5">
                  <h3 className="font-medium text-gray-900 mb-1">Dr. Ramesh Iyer</h3>
                  <p className="text-gray-700 text-sm">Professor of Philosophy</p>
                  <p className="text-gray-700 text-sm">Banaras Hindu University</p>
                </div>
              </div>
              
              <div className="mt-8 text-center p-6 bg-gray-50">
                <p className="text-gray-700">
                  For more information about our Monograph Series or to discuss a potential submission, please contact the Series Editors at [book series email].
                </p>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-20 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            Join us in our mission to advance humanities scholarship through our book publications.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BookPage;