// types/project.ts

export interface Project {
  id: string;
  title: string;
  slug: string;
  industry: string; // Es: "Fintech", "Healthcare", "Retail"
  coverImage: string; // URL di un'immagine rappresentativa (placeholder per ora)
  
  // La struttura di un case study
  challenge: string; // La sfida del cliente
  solution: string; // La soluzione che hai progettato
  results: Result[]; // Un elenco di risultati quantificabili
  
  technologies: string[]; // Elenco delle tecnologie usate
}

// Un tipo per i risultati, per renderli più strutturati
export interface Result {
  value: string; // Es: "+15%", "-90%"
  description: string; // Es: "aumento delle vendite", "riduzione tempi di onboarding"
}
