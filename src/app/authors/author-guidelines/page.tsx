const AuthorGuidelinesPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Author Guidelines
      </h1>
      <p className="text-muted-foreground mb-8">
        Guidelines for submitting articles to IJELS.
      </p>

      <div className="space-y-6 text-muted-foreground">
        <p>
          Please read these instructions before submitting your new manuscript
          for publication to IJELS (ISSN: 2456-7620) Research Journal (Infogain
          Publication), the scope of the manuscript should be in the field of
          English Literature, Social Sciences, or Humanities.
        </p>

        <p>
          IJELS Research Journal is an international open-access double-blind
          peer-reviewed journal with a wide scope in the fields of English
          Literature, Social Sciences, and Humanities. IJELS Journal invites
          authors or researchers to submit their original and unpublished work
          (short papers, research papers, review papers, Argumentative papers,
          Analytical papers, Definition papers, Compare and contrast papers,
          Cause and effect papers, Report or Interpretive papers and Project
          work based papers) that communicates fundamental issues about the
          current research.
        </p>

        <p>
          All submissions to IJELS must be made electronically via the online
          submission and peer review system at the following URL{" "}
          <a
            href="http://ijels.com/submit-paper/"
            className="text-blue-600 hover:underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            submit-paper
          </a>{" "}
          (files should be in one of the following formats: doc/ docx/ pdf/
          Latex). If you have any difficulty with online submission, please
          write to the editorial office at{" "}
          <a
            href="mailto:editor@ijels.com"
            className="text-blue-600 hover:underline hover:text-blue-800"
          >
            editor@ijels.com
          </a>{" "}
          or{" "}
          <a
            href="mailto:infogain.ijels@gmail.com"
            className="text-blue-600 hover:underline hover:text-blue-800"
          >
            infogain.ijels@gmail.com
          </a>
          .
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Before submitting a manuscript to IJELS Journal, the authors should
            note the following points carefully:
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              One author of the manuscript should be designated as the
              corresponding author with his email address and postal details.
            </li>
            <li>
              The manuscript may have the following sections: Title, Abstract,
              Keywords, Introduction, Method, Results, Discussion, Conclusion,
              Acknowledgement, and References.
            </li>
            <li>
              All references must be cited in the manuscript carefully and
              properly.
            </li>
            <li>
              The manuscript has not been previously published in a magazine, a
              book, a journal, a conference proceeding or any other form of
              publication.
            </li>
            <li>
              The manuscript must be submitted in the English language. The
              manuscript submitted in any other language would not be considered
              for publication in the journal.
            </li>
            <li>
              At the same time, the manuscript should not be submitted to any
              other journal for publication.
            </li>
            <li>
              The manuscripts submitted to the journal should be based on
              original work only with no plagiarism.
            </li>
            <li>
              All authors of the manuscript should be agreed on the publication
              of the manuscript and there should not be any dispute about the
              proposed content or material introduced in the manuscript with any
              person and among the authors.
            </li>
            <li>
              The submitted research manuscript should not harm any other
              researcher, person or society.
            </li>
            <li>
              The Editors and Reviewers of the Journal are fully authorized to
              give the rejection, modification or acceptance of the manuscript
              to the author based on the quality of the research manuscript or
              proposed work.
            </li>
            <li>
              After the acceptance of the manuscript, all authors must submit
              the copyright.
            </li>
            <li>
              After the online publication, the authors will keep all the
              relevant data presented in the manuscript with him/her for any
              future claim or dispute with any other person.
            </li>
          </ol>
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

export default AuthorGuidelinesPage;
