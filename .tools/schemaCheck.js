const fs = require("fs")
const Ajv = require("ajv")
const ajv = new Ajv()
const schema = require("./schema/dataSchema.json")
const { exit } = require("process")
const path = require('path')

const resolve = (_path) => path.resolve(__dirname, _path)

const chains = ["bnb", "eth"]
const folders = chains.flatMap(chain => fs.readdirSync(resolve(`../${chain}`)).map(folder => `${chain}/${folder}`))

// check folder name
const invalidFolders = folders.filter(folder => !/^[^/]+\/0x[a-f0-9]{40}$/.test(folder))
if (invalidFolders.length) {
  console.error(`Invalid folder structure for`, invalidFolders)
  exit(-1)
}

const files = folders.flatMap(folder => fs.readdirSync(resolve(`../${folder}`)).map(file => `${folder}/${file}`))

const filesWithErrors = []
for (const file of files) {
  const fileLocation = resolve(`../${file}`)
  if (fileLocation.endsWith("/data.json")) {
    const fileData = fs.readFileSync(fileLocation, "utf8")
    const fileDataJson = JSON.parse(fileData)
    const valid = ajv.validate(schema, fileDataJson)
    if (!valid) {
      console.error(ajv.errors)
      filesWithErrors.push(file)
    }

    if (fileDataJson.icon) {
      if (!fs.existsSync(`${fileLocation.substring(0, fileLocation.length - 10)}/${fileDataJson.icon}`)) {
        console.error(`Icon file ${fileDataJson.icon} not found`)
        exit(-1)
      }
    }
  }
}

if (filesWithErrors.length > 0) {
  filesWithErrors.forEach(file => {
    console.error(`Invalid JSON Schema in ${file}`)
  })
  exit(-1)
}
else {
  console.info("Schema check completed successfully");
  exit(0)
}