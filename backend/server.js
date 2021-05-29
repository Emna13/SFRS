const express = require("express");
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/UserRoutes");
const adminRoutes = require("./routes/AdminRoutes");

const app = express();
app.use(express.json());
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

