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
import { Textarea } from "@/components/ui/textarea";
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
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

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

      // Send form data to our API endpoint instead of Formspree
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
      setShowSuccessMessage(true);

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
        setShowSuccessMessage(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        `There was an error submitting your form: ${error.message}. Please try again or contact support.`,
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
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-primary mb-6">Submit Article</h1>
      <p className="text-muted-foreground mb-4">
        Submit your article to IJELS.
      </p>
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4 animate-fade-in">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Submission Successful!
              </h2>
              <p className="text-gray-600 mb-6">
                Your article has been submitted successfully. We'll review your
                submission and get back to you soon.
              </p>
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                onClick={() => setSubmitted(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="grid gap-4">
        {/* First Author */}
        <div className="bg-muted p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">First Author *</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="firstAuthorName">Name *</Label>
              <Input
                type="text"
                id="firstAuthorName"
                value={firstAuthor.name}
                onChange={(e) =>
                  setFirstAuthor({ ...firstAuthor, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="firstAuthorEmail">Email *</Label>
              <Input
                type="email"
                id="firstAuthorEmail"
                value={firstAuthor.email}
                onChange={(e) =>
                  setFirstAuthor({ ...firstAuthor, email: e.target.value })
                }
                required
              />
            </div>
          </div>
        </div>

        {/* Corresponding Author */}
        <div className="bg-muted p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Corresponding Author *</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="correspondingAuthorName">Name *</Label>
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
              />
            </div>
            <div>
              <Label htmlFor="correspondingAuthorEmail">Email *</Label>
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
              />
            </div>
          </div>
        </div>

        {/* Additional Authors */}
        {additionalAuthors.map((author, index) => (
          <div key={index} className="bg-muted p-4 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{getAuthorLabel(index)}</h2>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleRemoveAuthor(index)}
              >
                Remove
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor={`author${index}Name`}>Name</Label>
                <Input
                  type="text"
                  id={`author${index}Name`}
                  value={author.name}
                  onChange={(e) =>
                    handleAdditionalAuthorChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor={`author${index}Email`}>Email</Label>
                <Input
                  type="email"
                  id={`author${index}Email`}
                  value={author.email}
                  onChange={(e) =>
                    handleAdditionalAuthorChange(index, "email", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}

        {additionalAuthors.length < 2 && (
          <Button
            type="button"
            variant="outline"
            onClick={handleAddAuthor}
            className="w-full"
          >
            Add Author ({additionalAuthors.length}/2)
          </Button>
        )}

        {/* Paper Details */}
        <div>
          <Label htmlFor="paperTitle">Paper Title *</Label>
          <Input
            type="text"
            id="paperTitle"
            value={paperTitle}
            onChange={(e) => setPaperTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="paperType">Paper Type *</Label>
          <Select
            value={paperType || undefined}
            onValueChange={setPaperType}
            required
          >
            <SelectTrigger id="paperType" className="w-full">
              <SelectValue placeholder="Select paper type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Research Paper">Research Paper</SelectItem>
              <SelectItem value="Review Paper">Review Paper</SelectItem>
              {/* Add more paper types as needed */}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="document">Upload Research Paper/Article *</Label>
          <Input
            type="file"
            id="document"
            onChange={handleDocumentChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="captcha">Captcha *</Label>
          <div className="flex flex-col gap-2">
            <div className="bg-muted p-2 rounded text-center font-mono text-lg tracking-wider">
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
                className={captchaError ? "border-red-500" : ""}
              />
              <Button
                type="button"
                variant="outline"
                onClick={generateCaptcha}
                className="whitespace-nowrap"
              >
                Refresh
              </Button>
            </div>
            {captchaError && (
              <p className="text-red-500 text-sm">
                Incorrect captcha. Please try again.
              </p>
            )}
          </div>
        </div>

        <Button type="submit" size="lg" className="mt-4">
          Submit Article
        </Button>
      </form>
      <p className="mt-4 text-muted-foreground">
        If there&apos;s a problem submitting the form, email your article at:{" "}
        <a
          href="mailto:sanskar.bugbattlers@gmail.com"
          className="text-primary hover:underline"
        >
          sanskar.bugbattlers@gmail.com
        </a>
      </p>
    </div>
  );
};

export default SubmitPage;
