module.exports = async function (context, req, people) {
    context.res = {
        body: people
    };
}