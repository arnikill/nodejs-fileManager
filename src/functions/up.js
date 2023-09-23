import path from 'path';
import { setUpCurrentDirectory,currentDirectory} from '../../Actions/index.js';


export const up = async () => {
    try {
        const upDirectory = path.join(currentDirectory, "..");
        setUpCurrentDirectory(upDirectory);
        return upDirectory;
    } catch (error) {
        return Promise.reject('Unable to find parent directory of ');
    }
};


