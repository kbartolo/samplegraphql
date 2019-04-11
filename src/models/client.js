import mongoose from "mongoose";
const Schema = mongoose.Schema;

// {_id:435643643,...}
const ClientSChema = new Schema({
  name: String
});

const Client = mongoose.model("clients", ClientSChema);

export default Client;
