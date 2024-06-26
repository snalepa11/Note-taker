const router = require('express').Router();
const save = require('../db/db.json');
const fs = require('fs')
console.log(save)
// GET "/api/notes" responds with all notes from the database

router.get('/notes', (req, res) => {
  fs.readFile('./db/db.json',(err,results) => { 
    if(err){
      throw err
    } res.json(JSON.parse(results))
  })
  // save
  //   .getNotes()
  //   .then((notes) => {
  //     return res.json(notes);
  //   })
  //   .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  console.log(req.body);
  save.push(req.body)
  fs.writeFile('./db/db.json', JSON.stringify(save), (err) => {
    if(err){
      throw err
    } res.json(save)
  })

  // save
  //   .addNote(req.body)
  //   .then((note) => res.json(note))
  //   .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
  save
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }));
});

module.exports = router;
