import mongoose from 'mongoose'

const ConnectDB = async () => {
  
  try {
    // const BD_URI=`mongodb://ih5486613_db_user:seaKQ6L7P7DN4cmP@ac-5xmq6il-shard-00-00.omn0yyi.mongodb.net:27017,ac-5xmq6il-shard-00-01.omn0yyi.mongodb.net:27017,ac-5xmq6il-shard-00-02.omn0yyi.mongodb.net:27017/?ssl=true&replicaSet=atlas-14i55f-shard-0&authSource=admin&appName=ProductBackend`

    await mongoose.connect(process.env.BD_URI)

    console.log("database conected mazy karo")

  } catch (error) {
    console.log(`error connecting to database:${error}`)
    process.exit(1)
  }

}


export default ConnectDB;