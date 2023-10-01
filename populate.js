const faker = require('faker');
const axios = require('axios');

const BASE_URL = 'http://localhost:3000'; // Replace with your server's URL.

async function createRandomTask() {
  const title = faker.random.words(3);
  const description = faker.lorem.sentence();
  const assignees = [faker.name.findName(), faker.name.findName()];

  try {
    const response = await axios.post(`${BASE_URL}/tasks`, {
      title,
      description,
      assignees,
    });

    console.log(`Task created: ${response.data.title}`);
  } catch (error) {
    console.error('Error creating task:', error.response ? error.response.data : error.message);
  }
}

async function populateTasks() {
  for (let i = 0; i < 1000; i++) {
    await createRandomTask();
  }
}

populateTasks();
