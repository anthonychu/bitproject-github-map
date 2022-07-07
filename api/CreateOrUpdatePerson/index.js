module.exports = async function (context, req) {
    if (!req.user) {
        return;
    }

    const person = req.body;
    person.id = req.user.username;

    context.bindings.person = person;
    context.bindings.signalRMessages = [{
        target: 'personChanged',
        arguments: [person]
    }];

    context.res = {
        body: person
    };
}