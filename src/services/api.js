export function TASK_GET(local, setTaskList) {
  fetch(`/api/${local}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => setTaskList(json));
}

export function TASK_POST(local, body) {
  fetch(`/api/${local}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export function TASK_PUT(target, body) {
  fetch(`/api/pending-tasks/${target}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export function TASK_DELETE(target) {
  fetch(`/api/pending-tasks/${target}`, {
    method: 'DELETE',
  });
}
