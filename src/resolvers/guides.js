export default {
  Query: {
    allGuides: async (parent, args, { Guide }) => {
      const guides = await Guide.find();
      return guides.map(x => {
        x._id = x._id.toString();
        return x;
      });
    }
  },
  Mutation: {
    //createGuide: (parent, args, { models }) => models.Guide.create(args)
    createGuide: async (parent, args, { Guide }) => {
      const guide = await new Guide(args).save();
      guide._id = guide._id.toString();
      return guide;
    }
  }
};
