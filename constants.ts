import { PrepSectionData } from './types';

export const PREP_SECTIONS: PrepSectionData[] = [
  {
    id: 1,
    title: "1. Project Overview",
    description: "Briefly explain the project, the problem it solves, and how it works at a high level. Mention key technologies used.",
    placeholder: "e.g., E-commerce platform, solves checkout friction, React frontend, Python/Django backend...",
    promptContext: "You are an expert engineering mentor helping a job applicant prepare for a video code walkthrough. The applicant needs to create a script for the 'Project Overview' section. Based on their notes, generate a concise and professional script segment. The tone should be confident and clear. Cover the project's purpose, the problem it solves, and its high-level architecture."
  },
  {
    id: 2,
    title: "2. Code Walkthrough & Architecture",
    description: "Discuss the design and architectural choices you made. Highlight important files, components, and the strengths of your implementation.",
    placeholder: "e.g., Chose microservices for scalability, used Redux for state management, folder structure follows feature-based organization...",
    promptContext: "You are an expert engineering mentor. The applicant is scripting the 'Code Walkthrough & Architecture' part of their video. Using their notes, generate a script that explains their architectural decisions, highlights key parts of the codebase, and emphasizes the strengths of their design. Help them sound knowledgeable about software design principles."
  },
  {
    id: 3,
    title: "3. Technical Debt & Improvements",
    description: "Honesty is key. Point out any technical debt or areas in the codebase or architecture that could be improved in the future.",
    placeholder: "e.g., Lacks comprehensive unit tests, styling could be component-based, could refactor a large service file...",
    promptContext: "You are an expert engineering mentor. The applicant needs to discuss 'Technical Debt and Future Improvements'. Based on their notes, craft a script that shows self-awareness and a forward-thinking mindset. The script should frame the technical debt not as a mistake, but as a trade-off, and propose clear, actionable improvements."
  },
  {
    id: 4,
    title: "4. Challenges & Solutions",
    description: "Explain any significant challenges you faced during development and how you overcame them. This shows problem-solving skills.",
    placeholder: "e.g., Cross-browser compatibility issues solved with polyfills, slow database queries optimized with indexing, managing async state was tricky...",
    promptContext: "You are an expert engineering mentor. The applicant is scripting the 'Challenges & Solutions' section. Use their notes to generate a compelling narrative. The script should clearly state the problem, describe the process of finding a solution, and explain the final, successful implementation. This should highlight their problem-solving ability."
  },
  {
    id: 5,
    title: "5. Feature Evolution",
    description: "Show examples of features added over time by referencing specific files or commits. This demonstrates your ability to evolve a codebase.",
    placeholder: "e.g., Initially had basic auth, later added OAuth2. The initial payment system was simple, then integrated Stripe for more options...",
    promptContext: "You are an expert engineering mentor. The applicant wants to show 'Feature Evolution'. Based on their notes, create a script that illustrates how the project grew. The script should connect specific features to code changes (e.g., 'To add social login, I introduced the `authService.ts` file...'), showing their ability to build upon existing work."
  },
  {
    id: 6,
    title: "6. Deployment",
    description: "Share how the project was deployed to production. Mention any CI/CD pipelines, hosting platforms, or other tools involved.",
    placeholder: "e.g., Deployed on Vercel, used GitHub Actions for CI/CD, containerized with Docker, hosted on AWS S3...",
    promptContext: "You are an expert engineering mentor. The applicant is scripting the 'Deployment' section. From their notes, generate a script that clearly explains the deployment process. It should cover the tools used (like Docker, GitHub Actions, Vercel, AWS), the steps in the pipeline, and demonstrate their understanding of getting code into production."
  }
];
