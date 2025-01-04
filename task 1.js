const developerList = ["alex", "boris", "chris", "diana", "eva"];
const userList = ["john", "hope", "peter", "optimus", "peggy"];
const searchPattern1 = "ap";
const searchPattern2 = "pe";

function asyncProcess(array, searchPattern, finalCallback) {
    array.reduce((accPromise, item) => {
        return accPromise.then(acc => {
            return isWordMatchLetters(item, searchPattern).then(isMatch => {
                if (isMatch) {
                    acc.push(item);
                }
                return acc;
            });
        });
    }, Promise.resolve([]))
    .then(results => finalCallback(null, results))
    .catch(error => finalCallback(error));
}

function isWordMatchLetters(word, letters) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const hasLetters = [...letters].every(letter => word.includes(letter));
                resolve(hasLetters);
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
}

asyncProcess(developerList, searchPattern1, (err, res) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Task1: Developer List:", res);
    }
});

asyncProcess(userList, searchPattern2, (err, res) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Task1: User List:", res);
    }
});
