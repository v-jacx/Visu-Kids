const { Parent } = require('../models');

const CreateParent = async ({ body }, res) => {
    try {
        const parent = await Parent.create({
            name: body.name,
            email: body.email,
            password: body.password
        });

        res.send(parent);

    } catch (error) {
        throw(error);
    }
}

const GetParent = async ({ params: {id} }, res) => {
    try {
        const parent = await Parent.findByPk(id);

        res.send(parent);
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    GetParent, 
    CreateParent
}