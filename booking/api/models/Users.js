import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
   FirstName: {
        type: String,
        // required: true,
        default: false,
   },
   LastName:{
       type: String,
        // required: true,
        default: false,
   },
   Email:{
       type: String,
    //    required: true,
       default: false,
   },
   Contact:{
       type: Number,
    //    required: true,
       default: false,
   },
   Country:{
       type: String,
    //    required: true,
       default: false,
   }
   
   
   
   
   
   
   
   
   
    // is_verified: {
    //     type: String,
    //     required: true,
    //     default: false,
    // },
    // user_logo: {
    //     type: String,
    //     required: false
    // },
    // blocked: {
    //     type: Boolean,
    //     required: true,
    //     default: false,
    // },
    // username: {
    //     type: String,
    //     required: true,
    //     default: false,
    // },
    // status: {
    //     type: String,
    //     required: true,
    //     default: "Active",
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     default: false,
    // },
    // EmailInVibconnect: {
    //     type: String,
    //     required: true,
    //     default: false
    // },
    // fullName: {
    //     type: String,
    //     required: true,
    //     default: false,
    // },
    // FirstName: {
    //     type: String,
    //     required: true,
    //     default: "",
    // },
    // LastName: {
    //     type: String,
    //     required: true,
    //     default: "",
    // },
    // password: {
    //     type: String,
    //     required: false,
    //     default: null
    // },
    // phone: {
    //     type: String,
    //     required: true,
    //     default: false,
    // },
    // provider: {
    //     type: String,
    //     required: false,
    // },
    // company: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Hotel'
    // },
    // role: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'role'
    // },
    // user_type: {
    //     type: String,
    //     required: true,
    //     default: false,
    // },
    // auth_id: {
    //     type: String,
    //     required: true,
    //     default: false,
    // },

    // auth_secret: {
    //     type: String,
    //     required: true,
    //     default: false,
    // },
    // company_id: {
    //     type: String,
    //     required: true,
    //     default: false,
    // },

    // company_name: {
    //     type: String,
    //     required: false,
    // },
    // is_admin: {
    //     type: String,
    //     required: true,
    //     default: false,
    // },
}, {
    timestamps: true
})
export default mongoose.model("User", UserSchema)