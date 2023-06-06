const backgroundSubaction = ({ action: id, input }) => ({
  result: runAction({ id, input }),
});

export default backgroundSubaction;
