import { SkillGroup } from "@/types/skills.types";

export const skillGroups: SkillGroup[] = [
    {
        id: 'backend',
        label: 'BACKEND ENGINEERING',
        skills: [
            'Node.js',
            'TypeScript',
            'REST APIs',
            'GraphQL',
            'Microservices',
            'Event-Driven Architecture',
            'BullMQ',
            'RabbitMQ',
            'Kafka',
        ],
    },
    {
        id: 'frontend',
        label: 'FRONTEND & MOBILE',
        skills: [
            'React',
            'Next.js',
            'React Native',
            'Expo',
        ],
    },
    {
        id: 'cloud',
        label: 'CLOUD & DEVOPS',
        skills: [
            'AWS',
            'Azure',
            'Docker',
            'Linux',
        ],
    },
    {
        id: 'data',
        label: 'DATABASES & CACHING',
        skills: [
            'MongoDB',
            'MySQL',
            'SQL Server',
            'Redis',
        ],
    },
    {
        id: 'architecture',
        label: 'ARCHITECTURE & INTEGRATION',
        skills: [
            'System Design',
            'API Design',
            'Service & Repository Patterns',
            'Third-Party API Integration',
            'Architecture Review',
        ],
    },
    {
        id: 'tooling',
        label: 'TOOLING & DELIVERY',
        skills: [
            'Git',
            'GitHub Actions',
            'CI/CD Pipelines',
            'Agile / Scrum Delivery',
        ],
    },
]