const AboutPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-primary mb-4">About IJELS</h1>
      <p className="text-muted-foreground mb-8">
        Learn more about the International Journal of English Literature and
        Social Sciences.
      </p>

      <div className="space-y-6 text-muted-foreground">
        <p>
          International Journal of English Literature and Social Sciences
          (IJELS) is international open access online journal in the field of
          English, Literature and Social Science. It's main aim is to give
          quality research papers. It covers all sub-fields of above-mentioned
          fields. It provides a platform to academicians, students, and
          professionals. It publishes only original research papers and review
          papers. The submitted paper should meet some criteria like, It should
          be original, unpublished and not submitted to any other journal.
        </p>
        <p>
          We publish papers on a variety of topics, contexts and analysis
          strategies that examine the quickly evolving relationship between
          Literature and knowledge. We have a tendency to encourage a large
          range of submissions, including, but not restricted to English
          Literature, Social Sciences, and Humanities.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-primary mb-3">VISION</h2>
          <p>
            To make the journal as a center for academic, professional and
            contextual research excellence in the field of English Literature
            and Social Sciences to optimize its international reputation.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-primary mb-3">MISSION</h2>
          <p>
            To provide an international open access platform to researchers or
            authors for publishing their academic and creative writing for the
            social cause.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              To encourage literacy and numeracy with the ability to think
              critically.
            </li>
            <li>
              To impart the importance of the English language as a tool for
              employment and social responsibility around the world.
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Important Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="http://ijels.com/publication-policies-and-ethics/"
                className="text-blue-600 hover:underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Publication Policies and Ethics
              </a>
            </li>
            <li>
              <a
                href="http://ijels.com/author-guidelines/"
                className="text-blue-600 hover:underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Author Guidelines
              </a>
            </li>
            <li>
              <a
                href="http://ijels.com/submit-paper/"
                className="text-blue-600 hover:underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Paper
              </a>
            </li>
            <li>
              <a
                href="http://ijels.com/downloads/"
                className="text-blue-600 hover:underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Downloads
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Topics of Interest
          </h2>
          <p>All topics on English, Literature and Social Science.</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Submit Your Manuscript
          </h2>
          <p>
            Submit at{" "}
            <a
              href="mailto:infogain.ijels@gmail.com"
              className="text-blue-600 hover:underline hover:text-blue-800"
            >
              infogain.ijels@gmail.com
            </a>{" "}
            or{" "}
            <a
              href="mailto:editor@ijels.com"
              className="text-blue-600 hover:underline hover:text-blue-800"
            >
              editor@ijels.com
            </a>{" "}
            or Online
          </p>
          <p className="mt-3">
            <a
              href="http://ijels.com/submit-paper/"
              className="text-blue-600 hover:underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check How to Publish a paper with us.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
