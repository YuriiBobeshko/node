import fullFileWriter from './fullFileWriter/fullFileWriter'
import byLineFileWriter from './byLineFileWriter/byLineFileWriter.js'

const csvFilePath = __dirname + '/csv/nodejs-hw1-ex1.csv'
const txtFilePath = __dirname + '/txt/file.txt'

fullFileWriter(csvFilePath, txtFilePath)
byLineFileWriter(csvFilePath, txtFilePath)



