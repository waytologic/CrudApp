var faker = require('faker');

function generateuserdetail(){
    var users = []

    for(var id=0;id<50;id++){
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        var email = faker.internet.email();

        users = push({
            "id" : id,
            "first_name":firstName,
            "last_name":lastName,
            "email":email
        })
    }
    return{"userinfo" : users}
}

module.exports = generateuserdetail