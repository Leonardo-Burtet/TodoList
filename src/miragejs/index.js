import { createServer, Model } from 'miragejs';

createServer({
  models: {
    task: Model,
  },

  routes() {
    this.get('api/tasks', (schema) => {
      return schema.tasks.all();
    });

    this.post('api/tasks', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.tasks.create(attrs);
    });

    this.delete('/api/tasks/:id', (schema, request) => {
      let id = request.params.id;

      return schema.tasks.find(id).destroy();
    });
  },
});
