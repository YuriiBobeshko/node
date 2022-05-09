import fs from "fs";

export default function writeText(text, txtFilePath) {
    fs.appendFile(txtFilePath, text, err => {
        if (err) {
            console.error(err)
        }
    })
}
