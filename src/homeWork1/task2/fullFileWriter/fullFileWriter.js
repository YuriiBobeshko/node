import csv from 'csvtojson'
import fs from 'fs'
import writeText from "../utils/writeText/writeText";

async function convertCSVToJson(data) {
    let text;
    try {
        text = await csv().fromString(data)
    } catch (e) {
        console.error(e)
    }
    return text
}

export default function fullFileWriter(csvFilePath, txtFilePath) {
    fs.readFile(csvFilePath, 'utf8', async (err, data) => {
        if (err) {
            return console.error(err)
        }
        const text = await convertCSVToJson(data)
        writeText(JSON.stringify(text) + '\n', txtFilePath)
    })
}

