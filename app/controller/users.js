const model = require('../model/users')

module.exports = {
    async get(req, res){
        const { search, page, limit } = req.query;
        console.log(req.query);
        let result = await model.get(search, page, limit)
        if(!result.length) {
            return res.status(200).json({ 
                status: 'success', 
                code: 200, 
                message: 'Data Empty'
            })
        }

        if(search){
            result = result.filter((el) => {
                return el.name.toLowerCase().includes(search)
            })
        }

        return res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success!',
            data: result
        })
    },

    getById(req, res){
        if(!req.params.id) res.status(400).json({ 
            status: 'fail', 
            code: 400, 
            message: 'Bad Request! id is required',
        })
    
        const user = users.find((el) => el.id ===
            +req.params.id)
    
        res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success!',
            data: user
        })
    },
    create(req, res){
        const { name } = req.body;
        const newUser = {
            id: users[users.length - 1].id + 1,
            name: name
        }

        users.push(newUser)
        console.log(users);

        res.status(201).json({ 
            status: 'success', 
            code: 200, 
            message: 'Data ditambahkan!',
            data: newUser
        })
    },
    update(){

    },
    destroy(req, res){
        if(!req.params.id) res.status(400).json({ 
            status: 'fail', 
            code: 400, 
            message: 'Bad Request! id is required',
        })
    
        const userIndex = users.findIndex((el) => el.id ===
            +req.params.id)
    
        users.splice(userIndex, 1);
    
        res.status(204).json({ 
            status: 'success', 
            code: 204, 
            message: 'Success Data terhapus!',
        })
    },
}