// user.model.ts
export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string; // ou Enum pour correspondre à Role côté serveur
   
  }
  