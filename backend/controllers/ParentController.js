const logError = require('../config/ErrorHandling');
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
        logError(error, res);
    }
}

const updateParent = async ({ body, params }, res) => {
    try {
        const parent = await Parent.findByPk(params.id);
        parent.set({
            name: body.name ?? parent.name,
            email: body.email ?? parent.email,
            passcode: body.passcode ?? parent.passcode
        });
        await parent.save();

        res.send(parent);

    } catch (error) {
        logError(error, res);
    }
}

const DeleteParent = async ({ params: {id} }, res) => {
    try{
        const parent = await Parent.findByPk(id);

        await parent.destroy();
        res.json({message: "account deleted"});

    } catch (error) {
        logError(error, res);
    }
}
module.exports = {
    GetParent, 
    CreateParent,
    updateParent,
    DeleteParent
}