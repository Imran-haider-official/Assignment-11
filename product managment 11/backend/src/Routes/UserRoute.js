import express from 'express'
import { createUser } from '../Controllers/User.Controller.js'

const Router = express.Router()

Router.get('/', createUser)


export default Router