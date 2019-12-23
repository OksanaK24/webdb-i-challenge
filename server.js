const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
		res.json(await db("accounts").select())

})

server.get("/:id", async (req, res) => {
		res.json(await db("accounts").where("id", req.params.id).first())
})

server.post("/", async (req, res) => {
	
		const payload = {
			name: req.body.name,
			budget: req.body.budget,
		}

		const [id] = await db("accounts").insert(payload)
		res.json(await db("accounts").where("id", id).first())

})

server.put("/:id", async (req, res) => {
		const payload = {
			name: req.body.name,
			budget: req.body.budget,
		}

		await db("accounts").where("id", req.params.id).update(payload)
		res.json(await db("accounts").where("id", req.params.id).first())
})

server.delete("/:id", async (req, res) => {

		await db("accounts").where("id", req.params.id).del()
		res.status(204).end()
})


module.exports = server;