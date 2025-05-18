const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

// Element refs
const openBtn      = document.getElementById('addTaskBtn');
const closeBtn     = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('taskModal');
const createBtn    = document.getElementById('createTaskBtn');

// Open modal
openBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

// Close modal
closeBtn.addEventListener('click', () => {
  document.getElementById('taskModal').classList.remove('show');
});

// Create task
createBtn.addEventListener('click', () => {
  const title       = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const status      = document.getElementById('status').value;

  if (!title || !description) {
    alert('Please fill out all fields.');
    return;
  }

  console.log('Task Created:', { title, description, status });
  modalOverlay.style.display = 'none';
});