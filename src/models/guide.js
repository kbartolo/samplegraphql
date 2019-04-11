import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GuideSChema = new Schema({
  id: String,
  guide_temp_type: String,
  guide_temp_name: String,
  guide_temp_owner: String,
  guide_total_num_steps: String,
  guide_total_num_clients: String,
  guide_templete: String,
  created_at: String,
  updated_at: String
});

const Guide = mongoose.model("guides", GuideSChema);

export default Guide;
