import type { Skill, GroupedSkills } from "@/types";

export const skills: Skill[] = [
  {
    skill_code: "react",
    skill_title: "React.js",
    progress: 80,
    icon: "skill-icons:react-dark",
    type: "frontend",
  },
  {
    skill_code: "nextjs",
    skill_title: "Next.js",
    progress: 75,
    icon: "skill-icons:nextjs-dark",
    type: "frontend",
  },
  {
    skill_code: "javascript",
    skill_title: "JavaScript",
    progress: 90,
    icon: "skill-icons:javascript",
    type: "frontend",
  },
  {
    skill_code: "typescript",
    skill_title: "TypeScript",
    progress: 70,
    icon: "skill-icons:typescript",
    type: "frontend",
  },
  {
    skill_code: "html",
    skill_title: "HTML",
    progress: 95,
    icon: "skill-icons:html",
    type: "frontend",
  },
  {
    skill_code: "css",
    skill_title: "CSS",
    progress: 90,
    icon: "skill-icons:css",
    type: "frontend",
  },
  {
    skill_code: "tailwind",
    skill_title: "Tailwind CSS",
    progress: 60,
    icon: "skill-icons:tailwindcss-dark",
    type: "frontend",
  },
  {
    skill_code: "mui",
    skill_title: "Material UI",
    progress: 90,
    icon: "skill-icons:materialui-dark",
    type: "frontend",
  },
  {
    skill_code: "nodejs",
    skill_title: "Node.js",
    progress: 80,
    icon: "skill-icons:nodejs-dark",
    type: "backend",
  },
  {
    skill_code: "express",
    skill_title: "Express.js",
    progress: 80,
    icon: "skill-icons:expressjs-light",
    type: "backend",
  },
  {
    skill_code: "nestjs",
    skill_title: "NestJS",
    progress: 80,
    icon: "skill-icons:nestjs-dark",
    type: "backend",
  },
  {
    skill_code: "graphql",
    skill_title: "GraphQL",
    progress: 70,
    icon: "skill-icons:graphql-dark",
    type: "backend",
  },
  {
    skill_code: "rest",
    skill_title: "APIs REST",
    progress: 85,
    icon: "arcticons:api-tester",
    type: "backend",
  },
  {
    skill_code: "laravel",
    skill_title: "Laravel",
    progress: 70,
    icon: "skill-icons:laravel-dark",
    type: "backend",
  },
  {
    skill_code: "rails",
    skill_title: "Ruby on Rails",
    progress: 60,
    icon: "skill-icons:ruby",
    type: "backend",
  },
  {
    skill_code: "mongodb",
    skill_title: "MongoDB",
    progress: 60,
    icon: "skill-icons:mongodb",
    type: "data_base",
  },
  {
    skill_code: "postgresql",
    skill_title: "PostgreSQL",
    progress: 85,
    icon: "skill-icons:postgresql-dark",
    type: "data_base",
  },
  {
    skill_code: "mysql",
    skill_title: "MySQL",
    progress: 85,
    icon: "skill-icons:mysql-dark",
    type: "data_base",
  },
  {
    skill_code: "docker",
    skill_title: "Docker",
    progress: 80,
    icon: "skill-icons:docker",
    type: "devops",
  },
  {
    skill_code: "git",
    skill_title: "Git",
    progress: 90,
    icon: "skill-icons:git",
    type: "devops",
  },
  {
    skill_code: "ci_cd",
    skill_title: "CI/CD",
    progress: 70,
    icon: "clarity:ci-cd-line",
    type: "devops",
  },
  {
    skill_code: "github_actions",
    skill_title: "GitHub Actions",
    progress: 70,
    icon: "skill-icons:github-dark",
    type: "devops",
  },
  {
    skill_code: "linux",
    skill_title: "Linux",
    progress: 60,
    icon: "skill-icons:linux-dark",
    type: "devops",
  },
  {
    skill_code: "aws",
    skill_title: "AWS",
    progress: 60,
    icon: "skill-icons:aws-dark",
    type: "devops",
  },
];

export const groupedSkills: GroupedSkills = skills.reduce<GroupedSkills>(
  (acc, skill) => {
    acc[skill.type] = acc[skill.type] || [];
    acc[skill.type].push(skill);
    return acc;
  },
  {
    frontend: [],
    backend: [],
    data_base: [],
    devops: [],
  }
);
