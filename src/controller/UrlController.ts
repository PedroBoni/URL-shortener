import redis from 'redis';
import express from 'express';

const client = redis.createClient({
  host: process.env.HOST,
  port: process.env.PORT_REDIS,
  password: process.env.PASSWORD
});

client.on("error", (error) => console.error(error));

export default {
  async store(req: express.Request, res: express.Response){
    let { body } = req;
    let registered = 0;
    client.incr("id", (err, reply) => {
      console.log(reply)
      let id = reply.toString(36);

      client.hmset(`url:${id}`, ["url", `${body.url}`])

      res.json({registered, id})
    });
  },
  async show(req: express.Request, res: express.Response){
    let { id } = req.params;
    client.hget(`url:${id}`, "url", (err, reply) => res.json({url: reply}))
  },
  async index(req: express.Request, res: express.Response){
    let hostApp = "https://young-mesa-57935.herokuapp.com/";
    res.send(`Go to ${hostApp}`)
  }
}


