import { useEffect, useState } from "react";

// Types a word one letter at a time, pauses, deletes it, then moves to the
// next word in the list, looping forever. Returns the text typed so far.
export default function useTypewriter(
  words,
  { typeSpeed = 70, deleteSpeed = 35, pause = 1600 } = {}
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Each time the text changes, schedule exactly one next step:
  // add a letter, remove a letter, start deleting, or move to the next word.
  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
