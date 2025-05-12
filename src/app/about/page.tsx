import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header
        className="text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/woman-booking-ticket-online_53876-51226.jpg?ga=GA1.1.1300420666.1732270462&semt=ais_hybrid&w=740')",
        }}
      >
        <div className="bg-black bg-opacity-60 py-20 px-4">
          <h1 className="text-4xl  text-white mb-6 py-5">About Us</h1>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-white max-w-xl mx-auto py-4">
            Shuchitabodh: An International Journal of Humanities (SIRJH)
          </p>
        </div>
      </header>

      <div className="container mx-auto py-10">
        {/* Introduction */}
        <section>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-extralight text-gray-800">
              Introduction
            </h2>
          </div>
          <div className="pl-14">
            <p className="text-gray-700 leading-relaxed">
              Shuchitabodh: An International Journal of Humanities (SIRJH) is a
              peer-reviewed, open access academic journal dedicated to advancing
              scholarship in the diverse fields of humanities. Founded with a
              vision to promote rigorous research and intellectual exchange, our
              journal provides a platform for scholars, researchers, and
              academics to share their work with a global audience.
            </p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section>
          <div className="flex items-center mb-8 mt-10">
            <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-extralight text-gray-800">
              Mission, Vision, and Values
            </h2>
          </div>

          {/* Cards for Mission, Vision, and Values */}
          <div className="flex space-x-8 mt-8">
            <div className="w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h4>
              <p className="text-gray-600 leading-relaxed">
                To publish high-quality scholarly research that contributes to
                the advancement of knowledge in humanities disciplines, with
                particular emphasis on cultural studies, literary analysis,
                philosophical inquiry, historical research, and
                interdisciplinary approaches that bridge traditional academic
                boundaries.
              </p>
            </div>

            <div className="w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h4>
              <p className="text-gray-600 leading-relaxed">
                To become a leading international forum for innovative
                humanities research that addresses contemporary challenges,
                preserves cultural heritage, and fosters cross-cultural dialogue
                and understanding.
              </p>
            </div>

            <div className="w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Our Values
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We value innovation, inclusivity, interdisciplinary approaches,
                and commitment to preserving cultural heritage and fostering an
                understanding of the humanities in a global context.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Scope and Focus Areas */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">
            Scope and Focus Areas
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Shuchitabodh publishes original research across a wide spectrum of
            humanities disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {/* Focus Area 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Literary Studies and Criticism
            </h3>
            <p className="text-gray-700 text-center">
              Explore critical analysis of literature, examining themes,
              symbolism, and cultural contexts.
            </p>
          </div>

          {/* Focus Area 2 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Cultural Studies</h3>
            <p className="text-gray-700 text-center">
              Investigate the relationship between culture, society, and
              identity through historical lenses.
            </p>
          </div>

          {/* Focus Area 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Philosophy and Ethics
            </h3>
            <p className="text-gray-700 text-center">
              Delve into fundamental questions about existence, knowledge,
              morality, and the nature of society.
            </p>
          </div>

          {/* Focus Area 4 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Historical Research</h3>
            <p className="text-gray-700 text-center">
              Study of past events, focusing on social, cultural, and political
              history across different eras.
            </p>
          </div>

          {/* Focus Area 5 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Indigenous Knowledge Systems
            </h3>
            <p className="text-gray-700 text-center">
              Focus on understanding and preserving indigenous knowledge and its
              application in contemporary times.
            </p>
          </div>
        </div>
      </section>

      {/* Publication Information */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg mr-4 flex-shrink-0 transition-transform hover:scale-110 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Publication Information
            </h2>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Frequency",
                content:
                  "Quarterly (January–March, April–June, July–September, October–December)",
              },
              {
                title: "Languages",
                content: "Manuscripts accepted in English, Hindi, and Marathi",
              },
              {
                title: "Format",
                content:
                  "Open access online journal with complete archives available",
              },
              {
                title: "ISSN",
                content: "[Journal ISSN Number]",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg mr-4 flex-shrink-0 transition-transform hover:scale-110 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
          </div>

          {/* Intro */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8 pl-2">
            Shuchitabodh is committed to:
          </p>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Excellence",
                desc: "We uphold rigorous standards of scholarship through thorough peer review and editorial oversight.",
              },
              {
                title: "Inclusivity",
                desc: "We welcome diverse perspectives, methodologies, and cultural viewpoints, recognizing that humanities research benefits from plurality of thought.",
              },
              {
                title: "Integrity",
                desc: "We maintain the highest ethical standards in publishing, ensuring transparency, honesty, and fairness in all aspects of our operations.",
              },
              {
                title: "Accessibility",
                desc: "As an open access journal, we make all research freely available to readers worldwide, believing that knowledge should be accessible to all.",
              },
              {
                title: "Innovation",
                desc: "We encourage innovative approaches to humanities research, including interdisciplinary methods and digital humanities techniques.",
              },
              {
                title: "Collaboration",
                desc: "We foster cooperative relationships between scholars, institutions, and the public to enhance the impact of research.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl border-l-4 border-blue-600 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg mr-4 flex-shrink-0 transition-transform hover:scale-110 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Peer Review
            </h2>
          </div>

          {/* Description */}
          <div className="pl-2">
            <p className="text-gray-700 text-lg leading-relaxed bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all duration-300">
              All manuscripts undergo a rigorous double-blind peer review
              process, ensuring that published research meets the highest
              standards of academic quality. Our reviewers are experts in their
              respective fields who provide constructive feedback to help
              authors refine and strengthen their work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <div className="inline-block bg-blue-600 text-white p-3 rounded-full shadow-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold">Contact Information</h2>
            <p className="text-gray-600 mt-2">
              Reach out to our editorial and publication offices
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Editorial & Connect */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6 space-y-8">
              {/* Editorial Team */}
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  Editorial Team
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-medium">Dr. Amol R. Bute</p>
                    <p>Editor in Chief</p>
                  </div>
                  <div>
                    <p className="font-medium">Dr. Devendra Puri</p>
                    <p>Editor in Chief</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  Connect With Us
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.5 1.21l-2.26 1.13a11.042 11.042 0 005.52 5.516l1.13-2.257a1 1 0 011.21-.502l4.49 1.498A1 1 0 0121 19v1a2 2 0 01-2 2H18C10.716 22 4 15.284 4 7V5z"
                      />
                    </svg>
                    <span>+91-9822573240, 7709968675</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:shuchitabodh@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      shuchitabodh@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Journal Office Info */}
            <div className="bg-gray-50 rounded-xl shadow-md p-6 space-y-8 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  Journal Office
                </h3>
                <p>
                  <strong>Shuchitabodh:</strong> an International Research
                  Journal of Humanities
                  <br />
                  Shramsafalya Housing Society,
                  <br />
                  Sham Nagar, Ambejogai Road,
                  <br />
                  Latur- 413512 Maharashtra
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  Publication Office
                </h3>
                <p>
                  <strong>Sarvadristi Publication</strong>
                  <br />
                  Abbaspura, Achalpur,
                  <br />
                  Dist. Amravati. Maharashtra
                  <br />
                  Pin. 444806
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 text-center space-y-4">
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
            >
              Visit our Contact Page
              <svg
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <div>
              <a
                href="/submit"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                Submit Manuscript
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-20 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">
          Join us in our mission to advance humanities scholarship and foster
          intellectual exchange across disciplines, cultures, and borders.
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
