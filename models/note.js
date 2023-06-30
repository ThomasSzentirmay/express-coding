const fs = require('fs');
const { v4 } = require('uuid');
const DB_PATH = '../db/notes.json';

function getNotes() {
    return fs.readFileSync(DB_PATH, 'utf8');
}

class Note {
    constructor(text) {
        this.text = text;
        this.id = v4();
    }

    save() {
        const notes = getNotes();

        notes.push(this);

        fs.writeFile(DB_PATH, JSON.stringify(notes), err => {
            if (err) throw err;

            console.log('Note saved successfully!');
        })
    }
}

module.exports = Note;