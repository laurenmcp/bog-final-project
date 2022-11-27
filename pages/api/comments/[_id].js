import { findComment } from "../../../db/actions/CommentById";

export default function handler(req, res) {
    const { _id } = req.query;
    getComment(_id, req, res);
}

async function getComment(id, req, res) {
    const c = await findComment(id);
    res.status(200).json(c);
}
