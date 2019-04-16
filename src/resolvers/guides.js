export default {
  /* Query: { */
  allGuides: (parent, args, { Guide }) => {
    const guides = Guide.find();
    return guides;
  }
  /* } */
};
