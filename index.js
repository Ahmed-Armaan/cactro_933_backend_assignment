#!/usr/bin/env node
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cliJsx = path.resolve(__dirname, './src/cli.jsx');

const child = spawn('npx', ['tsx', cliJsx], { stdio: 'inherit', shell: true });

child.on('exit', (code) => process.exit(code));
