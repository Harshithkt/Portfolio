import * as si from "react-icons/si";
const keys = Object.keys(si);
const search = ["python", "c", "javascript", "react", "node", "express", "fastapi", "html5", "css3", "tailwindcss", "bootstrap", "mongodb", "mysql", "sqlite", "scikitlearn", "tensorflow", "pandas", "numpy", "opencv", "git", "github", "docker", "postman", "vscode", "keras", "githubactions"];
for (const s of search) {
  const match = keys.find(k => k.toLowerCase() === 'si' + s);
  if (match) console.log(`${s}: ${match}`);
  else {
    const loose = keys.find(k => k.toLowerCase().startsWith('si' + s));
    console.log(`${s}: Not found exactly, maybe ${loose}`);
  }
}
