const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

function loadDataFromCsv(csvPath = path.join(__dirname, '../data/test-data.csv')) {
    const fileContent = fs.readFileSync(csvPath, 'utf8');

    const rows = parse(fileContent, {
        columns: true,          // use the first non-comment row ("category,key,value") as headers
        skip_empty_lines: true, // ignore blank lines used for visual spacing
        comment: '#',           // ignore lines starting with # (section headers)
        trim: true,             // trim stray whitespace from values
    });

    const data = {};
    for (const row of rows) {
        const { category, key, value } = row;
        if (!data[category]) {
            data[category] = {};
        }
        data[category][key] = value;
    }

    return data;
}

module.exports = { loadDataFromCsv };