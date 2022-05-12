import fullFileWriter from './fullFileWriter/fullFileWriter'
import byLineFileWriter from './byLineFileWriter/byLineFileWriter.js'
import path from 'path'

const csvFilePath = path.join(__dirname, 'csv/nodejs-hw1-ex1.csv')
const txtFilePath = path.join( __dirname, '/txt/file.txt')

fullFileWriter(csvFilePath, txtFilePath)
byLineFileWriter(csvFilePath, txtFilePath)
