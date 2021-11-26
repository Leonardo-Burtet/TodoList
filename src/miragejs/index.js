import { createServer, Model } from 'miragejs';

createServer({
  models: {
    task: Model,
    complete: Model,
  },

  routes() {
    this.get('api/tasks', (schema) => {
      return schema.tasks.all();
    });
    this.get('api/complete', (schema) => {
      return schema.completes.all();
    });

    this.get('api/tasks/:id', (schema, request) => {
      let id = request.params.id;
      return schema.tasks.find(id);
    });

    this.post('api/tasks', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.tasks.create(attrs);
    });
    this.post('api/complete/', (schema, request) => {
      let novo = JSON.parse(request.requestBody);
      return schema.completes.create(novo);
    });

    this.delete('/api/tasks/:id', (schema, request) => {
      let id = request.params.id;

      return schema.tasks.find(id).destroy();
    });
  },
});
