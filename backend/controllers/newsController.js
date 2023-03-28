const asyncHandler = require("express-async-handler");
const NewsSchema = require("../models/newsModel");

const createNews = asyncHandler(async (req, res) => {
  const { title, description, venue, date, link } = req.body;

  if (!title || !description || !venue || !date || !link) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const data = await NewsSchema.create({
    title,
    description,
    venue,
    date,
    link,
  });

  if (data) {
    res.status(201).json({
      success: true,
      message: "News created successfully",
      data: {
        _id: data._id,
        title: data.title,
        description: data.description,
        venue: data.venue,
        date: data.date,
        link: data.link,
      },
    });
  } else {
    res.status(400);
    throw new Error("News not created");
  }
});

const getNews = asyncHandler(async (req, res) => {
  const data = await NewsSchema.find({});
  if (data) {
    res.status(200).json({
      success: true,
      data,
    });
  } else {
    res.status(400);
    throw new Error("News not fetched");
  }
});

module.exports = {
  createNews,
  getNews,
};
