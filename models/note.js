const fs = require('fs');
const { v4 } = require('uuid');
const path = require('path');
const DB_PATH = path.join(__dirname, '../db/notes.json');

function getNotes() {
    const notes = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    return notes;
}

class Note {
    constructor(text) {
        this.text = text;
        this.id = v4();
    }

    save() {
        const notes = getNotes();

        notes.push(this);

        fs.writeFile(DB_PATH, JSON.stringify(notes, null, 2), err => {
            if (err) throw err;

            console.log('Note saved successfully!');
        })
    }
}

module.exports = Note;