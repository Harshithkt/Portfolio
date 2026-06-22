import * as si from "react-icons/si";
const keys = Object.keys(si);
console.log("node: " + keys.find(k => k.toLowerCase().includes("node")));
console.log("css: " + keys.find(k => k.toLowerCase().includes("css")));
console.log("vscode: " + keys.find(k => k.toLowerCase().includes("visualstudio")));
console.log("nlp/brain: " + keys.find(k => k.toLowerCase().includes("brain")));
