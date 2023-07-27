const runInBackground = async ({
  app_identifier,
  app_id,
  jwt,
  action_id,
  variables,
}) => {
  const variableMap = variables.reduce((previousValue, currentValue) => {
    previousValue[currentValue.key] = currentValue.value;
    return previousValue;
  }, {});

  fetch(`https://${app_identifier}.betty.app/api/runtime/${app_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(jwt ? { Authorization: jwt } : {}),
    },
    body: JSON.stringify({
      query: `
          mutation { 
            action(id: "${action_id}", input: $input)
          }
        `,
      variables: {
        input: variableMap,
      },
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export default runInBackground;
