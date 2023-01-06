exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Хэрэглэгчдийн хуудасанд тавтай морилно уу",
  });
};
