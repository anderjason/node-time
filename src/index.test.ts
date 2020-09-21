import { Test } from "@anderjason/tests";
import "./AbstractTime/index.test";
import "./AbstractDate/index.test";
import "./AbstractDateTime/index.test";
import "./LocalDateTime/index.test";

Test.runAll()
  .then(() => {
    console.log("Tests complete");
  })
  .catch((err) => {
    console.error(err);
    console.error("Tests failed");
  });
