const core = require('@actions/core');
const exec = require('@actions/exec');
const glob = require('@actions/glob');
const YAML = require('yamljs')
const fs = require('fs').promises

async function run () {
  const host = core.getInput('host')
  const port = +core.getInput('port')
  const path = core.getInput('path')
  const branch = core.getInput('branch')
  const token = core.getInput('token')
  const username = core.getInput('username')
  const password = core.getInput('password')
  
  const globber = await glob.create(core.getInput('files'), { followSymbolicLinks: false })
  const files = await globber.glob()
  console.log(`Found ${files.length} files to upload`)
  console.log('Writing config')
  await fs.writeFile('.screeps.yml', YAML.stringify({
    servers: {
      main: {
        host,
        port,
        secure: port === 443,
        token,
        username,
        password
      }
    }
  }))
  console.log('Uploading code')
  // await exec.exec('npx', ['screeps-api', 'upload', '--branch', branch, ...files])
}

run().catch(error => {
  core.setFailed(error.message)
  console.error(error)
})