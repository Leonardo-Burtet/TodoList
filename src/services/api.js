const axios = require('axios').default;

export async function TASK_GET(local, setTaskList) {
  try {
    const response = await axios.get(`/api/${local}`);
    setTaskList(response.data);
  } catch (err) {
    console.log(err);
  }
}

export function TASK_POST(local, body) {
  try {
    axios.post(`/api/${local}`, {
      ...body,
    });
  } catch (err) {
    console.log(err);
  }
}

export function TASK_PUT(target, body) {
  try {
    axios.put(`/api/pending-tasks/${target}`, {
      ...body,
    });
  } catch (err) {
    console.log(err);
  }
}

export function TASK_DELETE(target) {
  try {
    axios.delete(`/api/pending-tasks/${target}`);
  } catch (err) {
    console.log(err);
  }
}
