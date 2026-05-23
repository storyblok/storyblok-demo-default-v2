import { execSync } from 'child_process'
import { config } from 'dotenv'

config()

const space = process.env.STORYBLOK_SPACE_ID
const command = process.argv[2]

const commands = {
  pull: `storyblok components pull --space ${space}`,
  push: `storyblok components push --space ${space}`,
  'generate-types': `storyblok types generate --space ${space} --custom-fields-parser="./scripts/custom-fields-parser.cjs"`,
}

if (!commands[command]) {
  console.error(`Unknown command: ${command}. Available: ${Object.keys(commands).join(', ')}`)
  process.exit(1)
}

execSync(commands[command], { stdio: 'inherit' })
