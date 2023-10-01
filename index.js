const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];

app.post('/tasks', (req, res) => {
    const { title, description, assignees } = req.body;
    if (!title || !description || !Array.isArray(assignees)) {
      return res.status(400).json({ error: 'Invalid task data' });
    }
    const newTask = { id: String(tasks.length + 1), title, description, assignees };
    tasks.push(newTask);
    res.status(201).json(newTask);
  });
  
  app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
  });
  
  app.get('/tasks/:id', (req, res) => {
    const task = tasks.find((t) => t.id === req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
  });
  
  app.put('/tasks/:id', (req, res) => {
    const task = tasks.find((t) => t.id === req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    const { title, description, assignees } = req.body;
    if (!title || !description || !Array.isArray(assignees)) {
      return res.status(400).json({ error: 'Invalid task data' });
    }
    task.title = title;
    task.description = description;
    task.assignees = assignees;
    res.status(200).json(task);
  });
  

  app.delete('/tasks/:id', (req, res) => { 
    const index = tasks.findIndex((t) => t.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(index, 1);
    res.status(204).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); //
  });
