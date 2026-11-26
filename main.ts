// A calm AI therapist writes down one diagnosis for a human patient.
// The setup is a deadpan clinical observation: the patient asks for advice,
// does the exact opposite, then comes back to complain that nothing works.
// That loop is the joke's premise — a patient who treats the therapist
// as a complaints desk instead of a source of instructions to actually follow.
// The turn lands at the very end: the patient needs the diagnosis itself
// explained back to him, again, because he never followed it in the first place.
// That final clause is the punchline: the diagnosis describes its own
// retelling, so the patient is already proving it true by asking for it again.
const fs = require("node:fs");
const path = require("node:path");

const diagnosis = "Diagnosis: chronic non-compliance. The patient follows every recommendation except the recommendations, then returns weekly for me to explain this diagnosis to him again.";

const outputDir = "/output";
const outputFile = path.join(outputDir, "entry.txt");

// Write exactly one line to the file: no trailing newline, no extra text.
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, diagnosis, "utf8");
console.log(diagnosis);
