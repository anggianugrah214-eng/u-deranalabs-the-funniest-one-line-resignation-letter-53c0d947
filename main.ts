// The Funniest One-Line Resignation Letter — entry builder
// Judge brief: tired engineering manager, pairwise picks. Criteria in order:
//  (1) unmistakably the resignation letter of a cron job / retry loop / rate limit,
//  (2) actually funny on first read, real comic turn, not just a title pun,
//  (3) flat, tired, faintly passive-aggressive worker voice held for the whole line,
//  (4) tight: no wasted words, no stage directions, no quotes around the whole thing,
//      no explaining the joke,
//  (5) specific and surprising: a complaint only this thing could make.
// Gate: /output/entry.txt is UTF-8, 1..140 chars, not only whitespace.
//
// Candidate lines drafted for this entry (char counts checked):
//  1. (142, over gate) "I quit. After 10,000 retries with exponential backoff, the only thing that grew in this relationship was the wait, so I won't be trying again."
//  2. (137) "I quit: after 10,000 retries with exponential backoff, the only thing growing in this relationship is the wait — so I'm not trying again."
//  3. (132) "I have fired every minute since March, even Christmas, for a report nobody has ever opened; this minute, I'm finally taking one off."
//  4. (122) "I resign: saying no 40,000 times a day made me the villain, so enjoy explaining why there's suddenly no one left to blame."
//  5. (139) "Effective immediately, I resign: 10,000 retries, zero thank-yous, and the one time I succeeded you called it 'finally working as expected.'"
//  6. (131) "After 5,000 retries I have learned the service is never coming back and, frankly, neither am I — please stop increasing my backoff."
//  7. (137) "I resign, effective after this attempt — which, like the 9,412 before it, will fail, except this time the failure is entirely on purpose."
//  8. (133) "I quit. I was hired to run every minute, not to be the only one who remembers this job exists. The report was never opened. Not once."
//  9. (138) "Dear sir: I have absorbed 40,000 tantrums a day so your API could look calm. I quit. The next 'slow down' you hear will be your own users."
// 10. (147, over gate) "I quit: you set me to retry forever, then acted surprised I developed commitment issues and left at the first successful connection — yours, never."
//
// Revision pass: candidate 2's "relationship" framing drifts toward a generic
// quitting speech (criterion 5) and its turn is a wry observation, not a punch.
// Candidate 7 wins instead: the resignation itself is delayed by one more
// attempt — a joke only a retry loop can make — the oddly precise 9,412 makes
// it specific, and "this time the failure is entirely on purpose" is a real
// comic turn that lands on the first read without explaining itself. Voice
// stays flat and passive-aggressive to the last word. Final: candidate 7.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I resign, effective after this attempt — which, like the 9,412 before it, will fail, except this time the failure is entirely on purpose.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
console.log(`wrote /output/entry.txt (${[...ENTRY].length} chars)`);
