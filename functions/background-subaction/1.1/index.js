const runInBackground = async ({
  app_identifier,
  app_uuid,
  jwt,
  action: id,
  input,
}) => {
  fetch(`https://${app_identifier}.betty.app/api/runtime/${app_uuid}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(jwt && { Authorization: jwt }),
    },
    body: JSON.stringify({
      query: "mutation { action(id: $id, input: $input) }",
      variables: { id, input },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) console.error(JSON.stringify(data));
    })
    .catch((error) => {
      console.error(error);
    });
};

export default runInBackground;
