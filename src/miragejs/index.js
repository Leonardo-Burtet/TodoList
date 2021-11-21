import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/persons', () => [
      {
        task: 'Minha nova task',
        data: 'Horario Atual',
        open: true,
      },
    ]);
  },
});
