export default {
  Query: {
    allClients: async (parent, args, { Client }) => {
      const clients = await Client.find();
      return clients.map(x => {
        x._id = x._id.toString();
        return x;
      });
    }
  },
  Mutation: {
    createClient: async (parent, args, { Client }) => {
      const client = await new Client(args).save();
      client._id = client._id.toString();
      return client;
    }
  }
};
