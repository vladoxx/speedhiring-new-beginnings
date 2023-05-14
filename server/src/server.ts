import app from "./app";
import "./data/dbConfig";

app.listen(3333, function () {
  console.log(`Server listening on port ${3333}`);
});
