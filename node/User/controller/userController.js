const userController = {
    async getUserProfile(req, res){
        return res.json({status: 200, user: req.user});
    }
};

module.exports = userController;
