module.exports = async function (context, req, person) {

    if (person) {
        context.res = {
            body: person
        }
    } else {
        context.res = {
            status: 404,
            body: "Person not found"
        }
    }
}