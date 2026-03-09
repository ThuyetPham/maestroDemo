const { execSync } = require("child_process");

try {

  console.log("Create product...");
  execSync("node flows/utils/Hang_hoa/Tao_hang_hoa.js", { stdio: "inherit" });

  // console.log("Run maestro test...");
  // execSync("maestro test flows/sellProduct.yaml", { stdio: "inherit" });

} catch (err) {
  console.error("Test failed", err);
}