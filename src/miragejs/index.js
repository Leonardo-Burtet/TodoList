import { createServer, Model } from 'miragejs';

createServer({
  models: {
    task: Model,
    completed: Model,
  },

  routes() {
    this.get('api/pending-tasks', (schema) => {
      return schema.tasks.all();
    });
    this.get('api/completed-task', (schema) => {
      return schema.completeds.all();
    });

    this.get('api/pending-tasks/:id', (schema, request) => {
      let id = request.params.id;
      return schema.tasks.find(id);
    });

    this.post('api/pending-tasks', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.tasks.create(attrs);
    });
    this.post('api/completed-task/', (schema, request) => {
      let novo = JSON.parse(request.requestBody);
      return schema.completeds.create(novo);
    });

    this.delete('/api/pending-tasks/:id', (schema, request) => {
      let id = request.params.id;

      return schema.tasks.find(id).destroy();
    });
  },
});
