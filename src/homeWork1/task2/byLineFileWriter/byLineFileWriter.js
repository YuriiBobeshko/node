import fs from 'fs'
import writeText from "../utils/writeText/writeText";
import csv from 'csvtojson'


export default async function byLineFileWriter(csvFilePath, txtFilePath) {
    const stream = fs.createReadStream(csvFilePath)
    const streamFromCSV = csv().fromStream(stream)
    let isFirst = true;

    stream.on('open', () => {
        writeText('[', txtFilePath)
    })

    stream.on('end', () => {
        writeText(']\n', txtFilePath)
    })

    await streamFromCSV.subscribe((jsonObj) => {
        if (isFirst) {
            writeText(JSON.stringify(jsonObj), txtFilePath)
            isFirst = false
        } else {
            writeText(',' + JSON.stringify(jsonObj), txtFilePath)
        }
    })
}