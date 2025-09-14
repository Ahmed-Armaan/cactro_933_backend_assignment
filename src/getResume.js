import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export default function ResumeBuilder() {
	const data = readResumeJson();
	return data
}

function readResumeJson() {
	const currFilename = fileURLToPath(import.meta.url);
	const currDirname = path.dirname(currFilename);
	const filename = path.resolve(currDirname, "../resume.json");

	const raw = fs.readFileSync(filename, "utf8");
	return JSON.parse(raw);
}
