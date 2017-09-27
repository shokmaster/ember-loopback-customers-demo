export default function (server) {
  server.loadFixtures('users');

  server.createList('customer', 100);
}
