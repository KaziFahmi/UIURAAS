
const sanityCheckMiddleware = async (req, res, next) => {
    const data = req.body;
    if (!data.files) {
        next();
    }
    else {
        const files = data.files;
        const fileNames = Object.keys(files);
        const fileNamesLength = fileNames.length;
        for (let i = 0; i < fileNamesLength; i++) {
            const fileName = fileNames[i];
            const file = files[fileName];
            const fileData = file.data;
            const fileDataLength = fileData.length;
            if (fileDataLength > 1000000) {
                res.status(400).send("File too large");
                return;
            }
        }
        next();
    }
};

const integrityCheckMiddleware = async (req, res, next) => {
    const data = req.body;
    if (!data.files) {
        next();
    }
    else {
        const files = data.files;
        const fileNames = Object.keys(files);
        const fileNamesLength = fileNames.length;
        for (let i = 0; i < fileNamesLength; i++) {
            const fileName = fileNames[i];
            const file = files[fileName];
            const fileData = file.data;
            const fileHash = file.hash;
            const hash = crypto.createHash("sha256");
            hash.update(fileData);
            const hashDigest = hash.digest("hex");
            if (hashDigest !== fileHash) {
                res.status(400).send("File corrupted");
                return;
            }
        }
        next();
    }
};

module.exports = {
    integrityCheckMiddleware,
    sanityCheckMiddleware
};