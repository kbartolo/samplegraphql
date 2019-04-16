export default {
  /* Query: { */
  allStepsFromGuide: (parent, args, { Step }) => {
    const steps = Step.find();
    return steps;
  }
  /* } */
};
