const db = require('../data/db-config');

// CREATE NEW CHAPTER
const createChapter = (chapterData) => {
    return db('chapters').insert(chapterData).returning('*');
}

// GET ALL CHAPTERS
const getAllChapters = () => {
    return db('chapters');
}

// GET CHAPTER BY ID
const getChapterById = (id) => {
    return db('chapters').where({ id: id }).first().select('*');
}

// UPDATE CHAPTER
const updateChapter = (id, newChapterData) => {
    return db('chapters')
        .where({ id: id })
        .first()
        .update(newChapterData)
        .returning('*');
}

// DELETE CHAPTERS
const deleteChapter = (id) => {
    return db('chapters').where({ id }).del();
}

module.exports = {
    createChapter,
    getAllChapters,
    getChapterById,
    updateChapter,
    deleteChapter
};