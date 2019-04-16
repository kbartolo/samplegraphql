export default {
  /* Query: { */
  introductionFromGuide: (parent, args, { Introduction }) => {
    const introduction = Introduction.find();
    return introduction;
  }
  /* } */
};
