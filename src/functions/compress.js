import { currentDirectory } from '../../Actions/index.js';
import fs from 'fs';
import path from 'path'
import zlib from 'zlib'

export const compress = async function (args) {
    try {
        const [pathToFile] = args.slice(0, 2); // распаковкa аргументов и извлекаем первый элемент,который нужно сжать
        const file = path.join(currentDirectory, pathToFile)//создаю полный путь к файлу и путь из аргументов
        const createDestinationPath = path.join(__dirname, `${path.basename(pathToFile)}.br`)//создаю путь файла который нужно сохранить
        const readStream = fs.createReadStream(file)// поток чтения для считывания содержимого исходного файла.
        const writeStream = fs.createWriteStream(createDestinationPath)//создаю поток записи для записи сжатого файла
        const brotliStream = zlib.createBrotliCompress(); // поток сжатия Brotli для сжатия данных
        readStream.pipe(brotliStream).pipe(writeStream)//направляю данные из потока чтения в поток сжатия Brotli, а затем из потока сжатия в поток записи.
        await new Promise((resolve, reject) => {//ожидание завершения операции записи
            writeStream.on('finish', () => {
                console.log('File compressed successfully');
                resolve();
            });
            writeStream.on('error', (error) => {
                console.error('Error compressing file:', error);
                reject(error);
            });
        });
    }
    catch {
        throw new Error("FS operation is failed", error.message)
    }
}
await compress(process.argv.slice(2))

