const AuthorGuidelinesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-20 px-4 max-w-4xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-extralight tracking-tight text-black mb-6">Author Guidelines</h1>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Guidelines for submitting manuscripts to Shuchitabodh: an International Research Journal of Humanities (SIRJH)
          </p>
        </header>

        <div className="space-y-16">
          {/* General Requirements */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4">
                <span className="text-xl font-light">A</span>
              </div>
              <h2 className="text-2xl font-extralight text-black">General Requirements</h2>
            </div>
            <div className="pl-14">
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">The minimum standard requirements of Shuchitabodh: an International Research Journal of Humanities (SIRJH) must be Written in English, Hindi or Marathi.</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">The length of the submitted paper is at least 4 pages and no more than 15 pages. Editors will evaluate if an article needs more than 15 pages.</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Use of a tool such as Zotero, Mendeley, or EndNote for reference management and formatting, and choose APA Style.</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">Make sure that your paper is prepared using the Shuchitabodh paper template.</span>
                </li>
                <li className="flex mt-6">
                  <a href="#" className="px-6 py-3 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Paper Template
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Manuscript Structure */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4">
                <span className="text-xl font-light">B</span>
              </div>
              <h2 className="text-2xl font-extralight text-black">Structure of the Manuscript</h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 mb-6">The manuscript must be qualitative and suggested to follow the structure:</p>
              
              <div className="grid gap-6">
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Title</h3>
                  <p className="text-gray-700">The title of the paper should describe research aims, method/model, and objective, without Acronym or abbreviation.</p>
                </div>
                
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Abstract</h3>
                  <p className="text-gray-700">The Abstract has a maximum 3000 WORDS; No citation; State in the abstract a primary goal, research design, methodology, main outcomes and results, and the conclusions.</p>
                </div>
                
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Keywords</h3>
                  <p className="text-gray-700">A minimum 5 keywords for paper required.</p>
                </div>
                
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Section structure</h3>
                  <p className="text-gray-700">Authors are suggested to present their articles in the section structure: Introduction - Method - Results and Discussion – Conclusion.</p>
                </div>
                
                <div className="p-5 border-l-2 border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">References</h3>
                  <p className="text-gray-700">Expect a minimum of 10 references. In APA style, adhere to Initiative for Open Citations (I4OC). As Granthaalayah Publications and Printers is Participating in Initiative for Open Citations (I4OC).</p>
                </div>
              </div>
              
              <div className="mt-8 p-5 bg-gray-50 border-l-4 border-black">
                <p className="text-gray-700">
                  <span className="font-medium">For Hindi and Marathi:</span> Submit in Kruti Dev 10 with font size 14 point (Include in English: Title, Abstract, Keywords, References)
                </p>
              </div>
            </div>
          </section>

          {/* Copyright Notice */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Copyright Notice</h2>
            </div>
            <div className="pl-14">
              <h3 className="text-lg font-medium text-gray-900 mb-4">License and Copyright Agreement</h3>
              <p className="text-gray-700 mb-4">In submitting the manuscript to the journal, the authors certify that:</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">They are authorized by their co-authors to enter into these arrangements.</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">The submitted papers should not be published formally.</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">The article should not under consideration for publication elsewhere.</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">That its release has been approved by all the author(s) and by the responsible authorities – tacitly or explicitly – of the institutes where the work has been carried out.</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">They secure the right to reproduce any material that has already been published or copyrighted elsewhere.</span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">They agree to the following license and copyright agreement.</span>
                </li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-900 mb-4">Copyright</h3>
              <p className="text-gray-700">
                Authors who publish with Shuchitabodh: an International Research Journal of Humanities (SIRJH) agree to terms and conditions.
              </p>
            </div>
          </section>

          {/* Processing Charges */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black">Manuscript Processing Charges</h2>
            </div>
            <div className="pl-14">
              <div className="bg-gray-50 p-8 border-l-4 border-black">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Article Processing Charge</h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center">
                        <span className="bg-gray-200 px-3 py-1 text-sm mr-2">NON-INDIAN AUTHORS</span>
                        <span className="text-xl font-light">$55.00 USD</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-gray-200 px-3 py-1 text-sm mr-2">INDIAN AUTHORS</span>
                        <span className="text-xl font-light">₹1,500 INR</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-6">
                  If this paper is accepted for publication, you will be asked to pay an Article processing Fee to cover publications costs.
                </p>
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <a href="/submit" className="px-12 py-4 bg-black text-white text-sm hover:bg-gray-800 transition-colors inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Submit Manuscript
            </a>
          </div>
        </div>

        <footer className="mt-20 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            For queries regarding submissions, please contact us at{" "}
            <a href="mailto:journal@example.com" className="text-gray-800 hover:underline">
              journal@example.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AuthorGuidelinesPage;