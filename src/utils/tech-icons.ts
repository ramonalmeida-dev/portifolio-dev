// Função para retornar logos das tecnologias
export const getTechIcon = (tech: string): string => {
  const icons: { [key: string]: string } = {
    "Next.js": "/logos/nextjs.jpg",
    "React.js": "/logos/react.png",
    "TailwindCSS": "/logos/tailwindcss.png",
    "shadcn": "/logos/shadcn.png",
    "FlutterFlow": "/logos/flutterflow.png",
    "Bubble": "/logos/bubble.png",
    "N8N": "/logos/n8n.png",
    "NestJS": "/logos/nestjs.svg",
    "Node.js": "/logos/node.svg",
    "Python": "/logos/python.webp",
    "Supabase": "/logos/supabase.png",
    "Firebase": "/logos/firebase.png",
    "Docker": "/logos/docker.png",
    "Vercel": "/logos/vercel.webp",
    "OpenAI": "/logos/openia.png",
    "CrewAI": "/logos/crewai.png",
    "LLMs": "/logos/llms.png",
    "Stripe": "/logos/stripe.png",
    "Asaas": "/logos/asaas.png",
    "PostgreSQL": "/logos/postgres.png"
  };
  
  const iconPath = icons[tech];
  console.log(`Buscando logo para ${tech}:`, iconPath);
  return iconPath || "/logos/default.svg";
};

// Função para retornar emojis de fallback
export const getFallbackEmoji = (tech: string): string => {
  const fallbackEmojis: { [key: string]: string } = {
    "Next.js": "⚡",
    "React.js": "⚛️",
    "TailwindCSS": "💨",
    "shadcn": "🛠️",
    "FlutterFlow": "🐦",
    "Bubble": "💧",
    "N8N": "⚙️",
    "NestJS": "🐘",
    "Node.js": "🟢",
    "Python": "🐍",
    "Supabase": "🗄️",
    "Firebase": "🔥",
    "Docker": "🐳",
    "Vercel": "🚀",
    "OpenAI": "🤖",
    "CrewAI": "👥",
    "LLMs": "🤖",
    "Stripe": "💳",
    "Asaas": "💰",
    "PostgreSQL": "🐘"
  };
  return fallbackEmojis[tech] || "❓";
}; 