import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumid | AI Resume Analyzer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your applications & Resume Ratings </h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
      </section>

      {resumes.length > 0 ? (
        <div className="resumes-section">
          {resumes.map((resume: Resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      ) : (
        <div className="no-resumes">
          <h2>No resumes found. Please upload your resume.</h2>
        </div>
      )}
    </main>
  );
}
