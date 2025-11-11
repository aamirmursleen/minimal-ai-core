# Token Optimization Instructions

## CRITICAL: Avoid Token-Wasting Directories

**NEVER read, search, or scan these directories:**
- `node_modules/` - Dependencies (use package.json instead)
- `.git/` - Git internals (use git commands, not file reads)
- `dist/`, `build/` - Build artifacts
- `.next/`, `.nuxt/` - Framework build caches
- `__pycache__/`, `*.pyc` - Python cache
- `.env`, `.env.*` - Environment files

## Search Strategy

**When searching code:**
1. Use **targeted paths**: `grep "pattern" src/` NOT `grep -r "pattern" .`
2. Use **glob patterns first**: Search `src/**/*.ts` to understand scope
3. **Ask before broad searches**: If you need to search the entire project, ask first
4. **Use package.json**: Check dependencies there, don't read node_modules

**When exploring the codebase:**
1. Start with `src/` directory
2. Use `ls src/` to understand structure
3. Read specific files, not entire directories

## Examples

❌ BAD: `grep -r "API_KEY" .`
✅ GOOD: `grep "API_KEY" src/ .env.example`

❌ BAD: `find . -name "*.ts"`
✅ GOOD: `find src/ -name "*.ts"`

❌ BAD: Reading 50 files from node_modules
✅ GOOD: Reading package.json and documentation

## Why This Matters

Scanning node_modules can consume 70-85% of the context window, leaving minimal space for actual code analysis and hitting token limits faster.
