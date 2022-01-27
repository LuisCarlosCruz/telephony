const validateBody = (origin, destination, plan, time) => {

  if(!origin) return 'origin';
  if(!destination) return 'destination';
  if(!plan) return 'plan';
  if(!time) return 'time';

  return true;
};

module.exports = validateBody;
