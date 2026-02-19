#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const checks = [];

function addCheck(name, ok, detail, level = 'error') {
  checks.push({ name, ok, detail, level });
}

function hasPackage(pkg) {
  try {
    require.resolve(`${pkg}/package.json`);
    return true;
  } catch {
    return false;
  }
}

const nodeVersion = process.version;
const major = Number(nodeVersion.replace(/^v/, '').split('.')[0]);
addCheck('Node.js version (>=20)', major >= 20, `current: ${nodeVersion}`);

const packageLock = existsSync('package-lock.json');
addCheck('package-lock.json exists', packageLock, packageLock ? 'ok' : 'missing');

let packageJson = null;
if (existsSync('package.json')) {
  packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
}

const nextVersion = packageJson?.dependencies?.next ?? null;
addCheck('Next declared in package.json', Boolean(nextVersion), `current: ${nextVersion ?? 'unknown'}`);

const doctorScript = packageJson?.scripts?.doctor ?? null;
addCheck('doctor npm script registered', Boolean(doctorScript), doctorScript ? doctorScript : 'missing from package.json');

const tsconfigExists = existsSync('tsconfig.json');
addCheck('tsconfig.json exists', tsconfigExists, tsconfigExists ? 'ok' : 'missing');

let hasTailwindImport = false;
if (existsSync('app/globals.css')) {
  const css = readFileSync('app/globals.css', 'utf-8');
  hasTailwindImport = css.includes('@import "tailwindcss"') || css.includes("@import 'tailwindcss'");
}
addCheck('Tailwind import in app/globals.css', hasTailwindImport, hasTailwindImport ? 'ok' : 'missing @import "tailwindcss"');

const hasNodeModules = existsSync('node_modules');
addCheck('node_modules folder present', hasNodeModules, hasNodeModules ? 'ok' : 'missing (run npm install)', 'warn');

addCheck('next package installed', hasPackage('next'), hasPackage('next') ? 'ok' : 'missing (run npm install)');
addCheck('react package installed', hasPackage('react'), hasPackage('react') ? 'ok' : 'missing (run npm install)');

console.log('\n🔎 Frontend doctor report\n');
for (const check of checks) {
  const icon = check.ok ? '✅' : check.level === 'warn' ? '⚠️' : '❌';
  console.log(`${icon} ${check.name} — ${check.detail}`);
}

const failed = checks.filter((c) => !c.ok && c.level !== 'warn');
if (failed.length > 0) {
  console.log('\nSuggested next steps:');
  console.log('1) Ensure you are on the right branch and up to date: git branch --show-current && git pull');
  console.log('2) Remove build artifacts: rm -rf .next node_modules');
  console.log('3) Reinstall dependencies: npm install');
  console.log('4) Start again: npm run dev');
  process.exit(1);
}

console.log('\nCore config checks passed. If UI still looks wrong, inspect browser console + network tab and check custom CSS overrides.');
