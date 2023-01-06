exports.handler = function (event, context, callback) {
  const secretContent = `
    <h3>Welcome to users page!</h3>
    <p>Only signed users <strong>contents.</strong></p>`;
  let body;
  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }
  if (body.password == "JavaScript") {
    callback(null, {
      statusCode: 200,
      body: secretContent,
    });
  } else {
    callback(null, {
      statusCode: 401,
    });
  }
};
