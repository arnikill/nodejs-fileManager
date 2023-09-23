import fs from 'fs'
import path from 'path'
import { currentDirectory } from '../../Actions/index.js'

export const move = async (args) => {
    const [fileName, targetDirectory] = args.split(" ", 2)//чтобы получить имя файла и целевой каталог
    const sourceFilePath = path.join(currentDirectory, fileName)//путь к исходному файлу
    const targetFilePath = path.join(currentDirectory, targetDirectory)//путь к новому местоположению
    const read = fs.createReadStream(sourceFilePath)//для чтения содержимого исходного файла
    const write = fs.createWriteStream(targetFilePath)//для записи в новое местоположение
    return new Promise((resolve, reject) => {
        read.pipe(write)//чтобы скопировать содержимое исходного файла в новое местоположение
        write.on("finish", () => {
            // Копирование завершено успешно, удаляем исходный файл
            fs.promises.unlink(sourceFilePath)
                .then(() => {
                    resolve();//если удаление прошло успешно, мы разрешаем обещание
                })
                .catch((err) => {
                    console.error('Error when deleting source file:', err);
                    reject(err);//если возникла ошибка при удалении, мы выводим сообщение об ошибке
                });
        });
    })
}