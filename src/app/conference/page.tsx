const ConferencePage = () => {
  return (
    <div className="">
      <header
        className="text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/woman-booking-ticket-online_53876-51226.jpg?ga=GA1.1.1300420666.1732270462&semt=ais_hybrid&w=740')",
        }}
      >
        <div className="bg-black bg-opacity-60 py-20 px-4">
          <h1 className="text-4xl text-white mb-6 py-5">Conferences</h1>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-white max-w-xl mx-auto py-4">
            International Conference on Humanities Research
          </p>
        </div>
      </header>
      <div className="container mx-auto py-16 px-4 max-w-4xl">
        {/* <div className="relative mb-16 overflow-hidden h-64 bg-gray-100">
          <img
            src="/assets/images/conference/conference-banner.jpg"
            alt="Conference on Humanities Research"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 bg-black bg-opacity-30">
            <h2 className="text-white text-2xl font-light mb-2">
              International Conference on Humanities Research
            </h2>
            <p className="text-white text-lg">
              Bridging Traditions and Innovations
            </p>
            <p className="text-white mt-2">
              November 10-12, 2025 | Pune, India
            </p>
          </div>
        </div> */}

        {/* Upcoming Conference Section */}
        <section className="mb-16">
          <h2 className="text-xl font-light text-black mb-8 pb-2 border-b border-gray-100">
            Upcoming Conference
          </h2>

          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="md:w-2/3">
              <h3 className="text-lg font-medium text-black mb-4">
                International Conference on Humanities Research: Bridging
                Traditions and Innovations
              </h3>

              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-600">
                    November 10-12, 2025
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-600">
                    Savitribai Phule Pune University, Pune, Maharashtra, India
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-600">
                    Organized by Shuchitabodh: An International Journal of
                    Humanities in collaboration with Department of Humanities
                    and Social Sciences, SPPU, Pune
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                The conference aims to bring together scholars, researchers, and
                practitioners to explore the intersection of traditional
                humanities disciplines with emerging methodologies,
                technologies, and interdisciplinary approaches. The theme
                celebrates both the enduring relevance of humanities scholarship
                and the opportunities for innovation in research methods,
                dissemination, and engagement.
              </p>
            </div>

            <div className="md:w-1/3 flex flex-col gap-4">
              <div className="p-5 bg-gray-50 border border-gray-100">
                <h4 className="text-base font-medium text-black mb-3">
                  Important Dates
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex justify-between">
                    <span>Abstract Submission:</span>
                    <span className="font-medium">June 15, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Notification:</span>
                    <span className="font-medium">July 30, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Early Registration:</span>
                    <span className="font-medium">August 31, 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Full Paper:</span>
                    <span className="font-medium">September 30, 2025</span>
                  </li>
                </ul>
              </div>

              <a
                href="#"
                className="flex items-center justify-center py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Submit Abstract
              </a>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-base font-medium text-black mb-3">
              Call for Papers
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              We invite submissions for presentations, panels, and posters on
              topics including but not limited to:
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-8 text-sm">
              <ul className="list-disc list-inside text-gray-600">
                <li>Literary and cultural studies</li>
                <li>Philosophy and ethics</li>
                <li>Historical research and historiography</li>
                <li>Linguistics and language studies</li>
                <li>Religious studies</li>
                <li>Digital humanities projects and methodologies</li>
              </ul>
              <ul className="list-disc list-inside text-gray-600">
                <li>Interdisciplinary approaches in humanities research</li>
                <li>Indigenous knowledge systems and decolonial humanities</li>
                <li>Cultural heritage preservation</li>
                <li>Translation studies</li>
                <li>Visual and performing arts</li>
              </ul>
            </div>

            <h4 className="text-base font-medium text-black mb-3">
              Submission Types
            </h4>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 border border-gray-100 bg-white">
                <p className="text-sm font-medium text-black mb-1">
                  Individual Papers
                </p>
                <p className="text-xs text-gray-600">20-minute presentation</p>
              </div>
              <div className="p-4 border border-gray-100 bg-white">
                <p className="text-sm font-medium text-black mb-1">Panels</p>
                <p className="text-xs text-gray-600">
                  3-4 papers on a coherent theme
                </p>
              </div>
              <div className="p-4 border border-gray-100 bg-white">
                <p className="text-sm font-medium text-black mb-1">
                  Poster Presentations
                </p>
                <p className="text-xs text-gray-600">Visual research display</p>
              </div>
              <div className="p-4 border border-gray-100 bg-white">
                <p className="text-sm font-medium text-black mb-1">
                  Research Workshops
                </p>
                <p className="text-xs text-gray-600">Interactive sessions</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-8">
              <span className="font-medium text-gray-700">Languages:</span>{" "}
              Presentations may be in English, Hindi, or Marathi
            </p>
          </div>

          <div className="mb-10">
            <h4 className="text-base font-medium text-black mb-5">
              Keynote Speakers
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <div className="h-48 overflow-hidden mb-4 bg-gray-100">
                  <img
                    src="/assets/images/team/pandurang-pawar.png"
                    alt="Dr. Rajesh Sharma"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h5 className="text-base font-medium text-black mb-1">
                  Dr. Rajesh Sharma
                </h5>
                <p className="text-xs text-gray-600 mb-2">
                  Professor of Literary and Cultural Studies, Jawaharlal Nehru
                  University, New Delhi
                </p>
                <p className="text-sm text-gray-700 italic">
                  "Reimagining Humanities in the Age of Artificial Intelligence"
                </p>
              </div>

              <div className="flex flex-col">
                <div className="h-48 overflow-hidden mb-4 bg-gray-100">
                  <img
                    src="/assets/images/team/pandurang-pawar.png"
                    alt="Dr. Meenakshi Mukherjee"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h5 className="text-base font-medium text-black mb-1">
                  Dr. Meenakshi Mukherjee
                </h5>
                <p className="text-xs text-gray-600 mb-2">
                  Professor of Comparative Literature, University of Hyderabad
                </p>
                <p className="text-sm text-gray-700 italic">
                  "Multilingual Literary Traditions in Contemporary India"
                </p>
              </div>

              <div className="flex flex-col">
                <div className="h-48 overflow-hidden mb-4 bg-gray-100">
                  <img
                    src="/assets/images/team/pandurang-pawar.png"
                    alt="Dr. Vijay Mishra"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h5 className="text-base font-medium text-black mb-1">
                  Dr. Vijay Mishra
                </h5>
                <p className="text-xs text-gray-600 mb-2">
                  Professor of Cultural Studies, Murdoch University, Australia
                </p>
                <p className="text-sm text-gray-700 italic">
                  "Diaspora Studies and Digital Humanities: New Paradigms"
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-base font-medium text-black mb-3">
                Conference Program
              </h4>
              <div className="grid grid-cols-2 gap-y-2 mb-8 text-sm">
                <ul className="list-disc list-inside text-gray-600">
                  <li>Keynote addresses</li>
                  <li>Parallel sessions</li>
                  <li>Panel discussions</li>
                  <li>Poster exhibitions</li>
                  <li>Research workshops</li>
                </ul>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Cultural performances</li>
                  <li>Networking events</li>
                  <li>Book exhibition</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-base font-medium text-black mb-3">
                Registration Fees
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Early Bird (before August 31, 2025):
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Faculty/Professionals: ₹4,500</li>
                    <li>Research Scholars/Students: ₹2,500</li>
                    <li>International Delegates: $150 USD</li>
                    <li>Virtual Participation: ₹2,000 / $75 USD</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Regular Rates (after August 31, 2025):
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Faculty/Professionals: ₹5,500</li>
                    <li>Research Scholars/Students: ₹3,500</li>
                    <li>International Delegates: $200 USD</li>
                    <li>Virtual Participation: ₹2,500 / $100 USD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-base font-medium text-black mb-3">
                Publication Opportunity
              </h4>
              <p className="text-sm text-gray-600">
                Selected papers presented at the conference will be considered
                for publication in a special issue of Shuchitabodh: An
                International Journal of Humanities. Full papers must be
                submitted by September 30, 2025, and will undergo peer review.
              </p>
            </div>

            <div>
              <h4 className="text-base font-medium text-black mb-3">
                Accommodation
              </h4>
              <p className="text-sm text-gray-600">
                Discounted accommodation options will be available for
                conference participants at hotels near the venue. Details will
                be provided upon registration.
              </p>
            </div>
          </div>

          <div className="p-6 bg-gray-50 border border-gray-100">
            <h4 className="text-base font-medium text-black mb-3">
              Contact Information
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-700 mb-1">
                  Conference Coordinator
                </p>
                <p>[name and email]</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">
                  Program Committee
                </p>
                <p>[email]</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">
                  Registration Inquiries
                </p>
                <p>[email]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Past Conferences Section */}
        <section className="mb-16">
          <h2 className="text-xl font-light text-black mb-8 pb-2 border-b border-gray-100">
            Past Conferences
          </h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src="/assets/images/conference/past-conference-2024.jpg"
                    alt="2024 Conference"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-black mb-2">
                  2024 International Conference on Humanities and Cultural
                  Studies
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium">Theme:</span> "Cultural Heritage
                  and Digital Preservation"
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 mb-3">
                  <p>
                    <span className="font-medium">Dates:</span> October 5-7,
                    2024
                  </p>
                  <p>
                    <span className="font-medium">Venue:</span> University of
                    Mumbai, Mumbai, India
                  </p>
                </div>

                <p className="text-sm font-medium text-gray-700 mb-2">
                  Keynote Speakers:
                </p>
                <ul className="text-sm text-gray-600 mb-3 space-y-1">
                  <li>
                    Dr. Sudha Gopalakrishnan, National Mission for Manuscripts
                  </li>
                  <li>
                    Dr. Vivek Dhareshwar, Centre for the Study of Culture and
                    Society
                  </li>
                  <li>Dr. Kavita Singh, Jawaharlal Nehru University</li>
                </ul>
                <p className="text-sm text-gray-600">
                  <a href="#" className="text-gray-800 hover:underline">
                    View Conference Proceedings
                  </a>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src="/assets/images/conference/past-conference-2023.jpg"
                    alt="2023 Conference"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-black mb-2">
                  2023 International Conference on Literature and Language
                  Studies
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium">Theme:</span> "Linguistic
                  Diversity and Literary Expressions in the Digital Age"
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 mb-3">
                  <p>
                    <span className="font-medium">Dates:</span> November 10-12,
                    2023
                  </p>
                  <p>
                    <span className="font-medium">Venue:</span> Osmania
                    University, Hyderabad, India
                  </p>
                </div>

                <p className="text-sm font-medium text-gray-700 mb-2">
                  Keynote Speakers:
                </p>
                <ul className="text-sm text-gray-600 mb-3 space-y-1">
                  <li>Dr. Harish Trivedi, University of Delhi</li>
                  <li>Dr. Rukmini Bhaya Nair, IIT Delhi</li>
                  <li>Dr. GN Devy, People's Linguistic Survey of India</li>
                </ul>
                <p className="text-sm text-gray-600">
                  <a href="#" className="text-gray-800 hover:underline">
                    View Conference Proceedings
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conference Publication Criteria Section */}
        <section className="mb-16">
          <h2 className="text-xl font-light text-black mb-8 pb-2 border-b border-gray-100">
            Conference Publication Criteria
          </h2>

          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-6">
              We invite you for the publication of the national and
              international conference papers as a special issue or regular
              issue on the journal. We hope, it will be an appreciable step in
              promoting the research activities and scientific information
              interchange between researchers, developers, engineers, students,
              academicians and practitioners working in and around the world.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              The journal has been an integral part of the publication of
              conference proceedings/articles. The motivation of this is to work
              together for publication and share the work at the international
              platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-100 p-6">
              <h3 className="text-base font-medium text-black mb-4">
                Publication Requirements
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>
                  On prior permission, you can share the details of the journal
                  in the conference brochure and also conference link on the
                  journal online page.
                </li>
                <li>
                  All published papers will get unique CrossRef DOI (including
                  DOI of special issue).
                </li>
                <li>
                  Before online publication authors need to submit the copyright
                  form, which will be provided by the Journal committee.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-100 p-6">
              <h3 className="text-base font-medium text-black mb-4">
                Benefits
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>
                  You can provide details of editorial board members or
                  reviewers of the conference in case of the special issue.
                </li>
                <li>
                  We will provide the softcopy as well hard copy of complete
                  proceeding and also certificates of publication to all the
                  authors.
                </li>
                <li>
                  International visibility and academic recognition for
                  conference participants.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="p-6 border border-gray-100 bg-white shadow-sm">
          <h2 className="text-lg font-medium text-black mb-3">Contact Us</h2>
          <p className="text-sm text-gray-600">
            For further discussion and for any query write to us on{" "}
            <a
              href="mailto:infogain.ijels@gmail.com"
              className="text-gray-800 hover:underline"
            >
              infogain.ijels@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConferencePage;
