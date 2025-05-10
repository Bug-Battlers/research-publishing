"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface Author {
  name: string;
  email: string;
}

const SubmitPage = () => {
  // First author and corresponding author
  const [firstAuthor, setFirstAuthor] = React.useState<Author>({
    name: "",
    email: "",
  });
  const [correspondingAuthor, setCorrespondingAuthor] = React.useState<Author>({
    name: "",
    email: "",
  });

  // Additional authors
  const [additionalAuthors, setAdditionalAuthors] = React.useState<Author[]>(
    [],
  );

  const [paperTitle, setPaperTitle] = React.useState("");
  const [paperType, setPaperType] = React.useState("");
  const [document, setDocument] = React.useState<File | null>(null);

  // Captcha state
  const [captchaText, setCaptchaText] = React.useState("");
  const [userCaptcha, setUserCaptcha] = React.useState("");
  const [captchaError, setCaptchaError] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  // Generate captcha on component mount
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  // Function to generate random captcha
  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setCaptchaText(result);
  };

  const handleAddAuthor = () => {
    if (additionalAuthors.length < 2) {
      setAdditionalAuthors([...additionalAuthors, { name: "", email: "" }]);
    }
  };

  const handleAdditionalAuthorChange = (
    index: number,
    field: keyof Author,
    value: string,
  ) => {
    const updatedAuthors = [...additionalAuthors];
    updatedAuthors[index] = { ...updatedAuthors[index], [field]: value };
    setAdditionalAuthors(updatedAuthors);
  };

  const handleRemoveAuthor = (index: number) => {
    setAdditionalAuthors(additionalAuthors.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify captcha
    if (userCaptcha !== captchaText) {
      setCaptchaError(true);
      return;
    }

    try {
      // Create FormData object
      const formData = new FormData();

      // Add first author
      formData.append("firstAuthorName", firstAuthor.name);
      formData.append("firstAuthorEmail", firstAuthor.email);

      // Add corresponding author
      formData.append("correspondingAuthorName", correspondingAuthor.name);
      formData.append("correspondingAuthorEmail", correspondingAuthor.email);

      // Add additional authors
      additionalAuthors.forEach((author, index) => {
        formData.append(`author${index + 2}Name`, author.name);
        formData.append(`author${index + 2}Email`, author.email);
      });

      formData.append("paperTitle", paperTitle);
      formData.append("paperType", paperType);

      // Append document if it exists
      if (document) {
        formData.append("document", document);
      }

      // Send form data to our API endpoint
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      // Show success message
      setSubmitted(true);

      window.scrollTo({ top: 0, behavior: "smooth" });

      // Reset form
      setFirstAuthor({ name: "", email: "" });
      setCorrespondingAuthor({ name: "", email: "" });
      setAdditionalAuthors([]);
      setPaperTitle("");
      setPaperType("");
      setDocument(null);
      setUserCaptcha("");
      setCaptchaError(false);
      generateCaptcha();

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Unknown error occurred';
      alert(
        `There was an error submitting your form: ${errorMessage}. Please try again or contact support.`,
      );
    }
  };

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocument(e.target.files[0]);
    }
  };

  const getAuthorLabel = (index: number): string => {
    const positions = ["Second", "Third"];
    return `${positions[index]} Author`;
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-16 px-4 max-w-3xl">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-light tracking-tight text-black mb-4">Submit Article</h1>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-6"></div>
          <p className="text-sm text-gray-600">
            Submit your manuscript for review and publication
          </p>
        </header>

        {submitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-md">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-800 mb-4">
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
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-normal text-gray-900 mb-3">
                  Submission Successful
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Your article has been submitted successfully. We'll review your
                  submission and get back to you shortly.
                </p>
                <button
                  type="button"
                  className="px-4 py-2 text-sm bg-black text-white border border-transparent rounded-none hover:bg-gray-800 focus:outline-none"
                  onClick={() => setSubmitted(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First Author */}
          <section>
            <h2 className="text-lg font-light mb-4 pb-2 border-b border-gray-100">First Author</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="firstAuthorName" className="text-sm font-normal text-gray-700">Name *</Label>
                <Input
                  type="text"
                  id="firstAuthorName"
                  value={firstAuthor.name}
                  onChange={(e) =>
                    setFirstAuthor({ ...firstAuthor, name: e.target.value })
                  }
                  required
                  className="mt-1 border-gray-200 rounded-none focus:ring-0 focus:border-black"
                />
              </div>
              <div>
                <Label htmlFor="firstAuthorEmail" className="text-sm font-normal text-gray-700">Email *</Label>
                <Input
                  type="email"
                  id="firstAuthorEmail"
                  value={firstAuthor.email}
                  onChange={(e) =>
                    setFirstAuthor({ ...firstAuthor, email: e.target.value })
                  }
                  required
                  className="mt-1 border-gray-200 rounded-none focus:ring-0 focus:border-black"
                />
              </div>
            </div>
          </section>

          {/* Corresponding Author */}
          <section>
            <h2 className="text-lg font-light mb-4 pb-2 border-b border-gray-100">Corresponding Author</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="correspondingAuthorName" className="text-sm font-normal text-gray-700">Name *</Label>
                <Input
                  type="text"
                  id="correspondingAuthorName"
                  value={correspondingAuthor.name}
                  onChange={(e) =>
                    setCorrespondingAuthor({
                      ...correspondingAuthor,
                      name: e.target.value,
                    })
                  }
                  required
                  className="mt-1 border-gray-200 rounded-none focus:ring-0 focus:border-black"
                />
              </div>
              <div>
                <Label htmlFor="correspondingAuthorEmail" className="text-sm font-normal text-gray-700">Email *</Label>
                <Input
                  type="email"
                  id="correspondingAuthorEmail"
                  value={correspondingAuthor.email}
                  onChange={(e) =>
                    setCorrespondingAuthor({
                      ...correspondingAuthor,
                      email: e.target.value,
                    })
                  }
                  required
                  className="mt-1 border-gray-200 rounded-none focus:ring-0 focus:border-black"
                />
              </div>
            </div>
          </section>

          {/* Additional Authors */}
          {additionalAuthors.map((author, index) => (
            <section key={index}>
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
                <h2 className="text-lg font-light">{getAuthorLabel(index)}</h2>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleRemoveAuthor(index)}
                  className="text-xs rounded-none border-gray-200 hover:bg-gray-50 hover:text-black"
                >
                  Remove
                </Button>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Label htmlFor={`author${index}Name`} className="text-sm font-normal text-gray-700">Name</Label>
                  <Input
                    type="text"
                    id={`author${index}Name`}
                    value={author.name}
                    onChange={(e) =>
                      handleAdditionalAuthorChange(index, "name", e.target.value)
                    }
                    className="mt-1 border-gray-200 rounded-none focus:ring-0 focus:border-black"
                  />
                </div>
                <div>
                  <Label htmlFor={`author${index}Email`} className="text-sm font-normal text-gray-700">Email</Label>
                  <Input
                    type="email"
                    id={`author${index}Email`}
                    value={author.email}
                    onChange={(e) =>
                      handleAdditionalAuthorChange(index, "email", e.target.value)
                    }
                    className="mt-1 border-gray-200 rounded-none focus:ring-0 focus:border-black"
                  />
                </div>
              </div>
            </section>
          ))}

          {additionalAuthors.length < 2 && (
            <div>
              <Button
                type="button"
                variant="outline"
                onClick={handleAddAuthor}
                className="w-full rounded-none border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-black"
              >
                Add Author ({additionalAuthors.length}/2)
              </Button>
            </div>
          )}

          {/* Paper Details */}
          <section>
            <h2 className="text-lg font-light mb-4 pb-2 border-b border-gray-100">Paper Details</h2>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="paperTitle" className="text-sm font-normal text-gray-700">Paper Title *</Label>
                <Input
                  type="text"
                  id="paperTitle"
                  value={paperTitle}
                  onChange={(e) => setPaperTitle(e.target.value)}
                  required
                  className="mt-1 border-gray-200 rounded-none focus:ring-0 focus:border-black"
                />
              </div>

              <div>
                <Label htmlFor="paperType" className="text-sm font-normal text-gray-700">Paper Type *</Label>
                <Select
                  value={paperType || undefined}
                  onValueChange={setPaperType}
                  required
                >
                  <SelectTrigger id="paperType" className="w-full mt-1 border-gray-200 rounded-none focus:ring-0 focus:border-black">
                    <SelectValue placeholder="Select paper type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Research Paper">Research Paper</SelectItem>
                    <SelectItem value="Review Paper">Review Paper</SelectItem>
                    <SelectItem value="Case Study">Case Study</SelectItem>
                    <SelectItem value="Technical Note">Technical Note</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="document" className="text-sm font-normal text-gray-700">Upload Research Paper/Article *</Label>
                <Input
                  type="file"
                  id="document"
                  onChange={handleDocumentChange}
                  required
                  className="mt-1 border-gray-200 rounded-none focus:ring-0 focus:border-black"
                />
                <p className="mt-1 text-xs text-gray-500">Accepted file formats: .doc, .docx, .pdf (Max size: 10MB)</p>
              </div>
            </div>
          </section>

          {/* Captcha */}
          <section>
            <div className="border-t border-gray-100 pt-6">
              <Label htmlFor="captcha" className="text-sm font-normal text-gray-700">Verification *</Label>
              <div className="flex flex-col gap-3 mt-2">
                <div className="bg-gray-50 p-3 text-center font-mono text-base tracking-wider border border-gray-100">
                  {captchaText}
                </div>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    id="captcha"
                    value={userCaptcha}
                    onChange={(e) => {
                      setUserCaptcha(e.target.value);
                      setCaptchaError(false);
                    }}
                    required
                    className={`border-gray-200 rounded-none focus:ring-0 focus:border-black ${captchaError ? "border-red-500" : ""}`}
                    placeholder="Enter code above"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={generateCaptcha}
                    className="whitespace-nowrap rounded-none border-gray-200 hover:bg-gray-50"
                  >
                    Refresh
                  </Button>
                </div>
                {captchaError && (
                  <p className="text-red-500 text-xs">
                    Incorrect verification code. Please try again.
                  </p>
                )}
              </div>
            </div>
          </section>

          <Button 
            type="submit"
            className="w-full py-3 bg-black hover:bg-gray-800 text-white rounded-none mt-8"
          >
            Submit Article
          </Button>
        </form>
        
        <footer className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            If you encounter any issues, please email your article to:{" "}
            <a
              href="mailto:journal@example.com"
              className="text-gray-800 hover:underline"
            >
              journal@example.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SubmitPage;