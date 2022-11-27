
import { findPost } from "../../../db/actions/PostById";

export default function handler(req, res) {
    const { _id } = req.query;
    getPost(_id, req, res);
}

async function getPost(id, req, res) {
    const post = await findPost(id);
    res.status(200).json(post);
}
