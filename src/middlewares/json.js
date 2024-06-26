export async function json (req, res)  {
    const buffers = [];
    
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    try {
        req.body = JSON.parser(Buffer.concat(cuffers.toString() ))
    } catch {
        req.body = null;
    }

    res.setHeader("Content-Type", "application/json");
}