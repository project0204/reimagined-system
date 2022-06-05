const router = require("express").Router();

const homeRoutes = require("./home-routes");
const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboard-routes");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
	res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
