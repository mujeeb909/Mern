const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const Scheme = mongoose.Schema;

const userSchema = new Scheme(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },

    email: {
      type: String,
      required: true,
      minlength: 3,
    },

    phone: {
      type: Number,
      required: true,
      minlength: 3,
    },

    work: {
      type: String,
      required: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },

    cpassword: {
      type: String,
      required: true,
      minlength: 3,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});
userSchema.methods.generateAuthToken = async function () {
  try {
    const tokenGen = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token : tokenGen});
    await this.save();
    return tokenGen;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
