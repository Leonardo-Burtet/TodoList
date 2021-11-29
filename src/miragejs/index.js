import { createServer, Model } from 'miragejs';

createServer({
  models: {
    task: Model,
    complete: Model,
  },

  routes() {
    this.get('api/pending-tasks', (schema) => {
      return schema.tasks.all();
    });
    this.get('api/complete-task', (schema) => {
      return schema.completes.all();
    });

    this.get('api/pending-tasks/:id', (schema, request) => {
      let id = request.params.id;
      return schema.tasks.find(id);
    });

    this.post('api/pending-tasks', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.tasks.create(attrs);
    });
    this.post('api/complete-task/', (schema, request) => {
      let novo = JSON.parse(request.requestBody);
      return schema.completes.create(novo);
    });

    this.delete('/api/pending-tasks/:id', (schema, request) => {
      let id = request.params.id;

      return schema.tasks.find(id).destroy();
    });
  },
});
