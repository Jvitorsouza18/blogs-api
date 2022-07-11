const { deletePostService } = require('../../services/Post/POST-deletePost.service');

async function deletePostController(req, res) {
    const { id } = req.params;
    const token = req.headers.authorization;
    await deletePostService(id, token);
    return res.status(204).end();
}

module.exports = { deletePostController };