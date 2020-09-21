const validator = require("validator");
require("dotenv").config();
const request = require("request");
const fs = require("fs");
const path = require("path");
const { dirname } = require("path");
const download = require("image-downloader");

exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.renderResult = (req, res) => {
  const userInput = req.body.input;
  var userColor = req.body.color;
  console.log(userColor);
  if (userColor === "blue") {
    userColor = "#319EFE";
  }
  if (validator.isURL(userInput)) {
    // request.post(
    //   {
    //     url: "https://api.remove.bg/v1.0/removebg",
    //     formData: {
    //       image_url: userInput,
    //       size: "auto",
    //       bg_color: userColor,
    //     },
    //     headers: {
    //       "X-Api-Key": process.env.API_KEY,
    //     },
    //     encoding: null,
    //   },
    //   function (error, response, body) {
    //     if (error) return console.error("Request failed:", error);
    //     if (response.statusCode != 200) {
    //       return console.error(
    //         "Error:",
    //         response.statusCode,
    //         body.toString("utf8")
    //       );
    //     }

    //     console.log("success");
    //     // console.log(body);
    //     fs.writeFileSync("changeBackground.png", body);
    //     // setTimeout(() => {
    //     //   fs.unlinkSync("changeBackground.png");
    //     //   console.log("//file removed");
    //     // }, 4000);
    //   }
    // );

    const options = {
      url:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      dest: path.join(__dirname, "/"), // will be saved to /path/to/dest/image.jpg
    };

    download
      .image(options)
      .then(({ filename }) => {
        console.log("Saved to", filename); // saved to /path/to/dest/image.jpg
      })
      .catch((err) => console.error(err));
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};
