const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username harus diisi"],
    },
    password: {
        type: String,
        required: [true, "Password harus diisi"],
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;


