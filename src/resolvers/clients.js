export default {
  /* Query: { */
  allClients: (parent, args, { Client }) => {
    const clients = Client.find();
    return clients;
  }
  /* } */
};
