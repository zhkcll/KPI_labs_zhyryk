const developerList = ["alex", "boris", "chris", "diana", "eva"];
const userList = ["john", "hope", "peter", "optimus", "peggy"];
const searchPattern1 = "ap";
const searchPattern2 = "pe";

function asyncProcess(array, searchPattern, finalCallback) {
    let results = [];
    let index = 0;

    function processNext() {
        if (index >= array.length) {
            return finalCallback(null, results);
        }

        const item = array[index];
        isWordMatchLetters(item, searchPattern, (err, isMatch) => {
            if (err) {
                return finalCallback(err);
            }

            if (isMatch) {
                results.push(item);
            }

            index++;
            processNext();
        });
    }

    processNext();
}

function isWordMatchLetters(word, letters, callback) {
    setTimeout(() => {
        try {
            const hasLetters = [...letters].every(letter => word.includes(letter));
            callback(null, hasLetters);
        } catch (error) {
            callback(error);
        }
    }, 1000);
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
