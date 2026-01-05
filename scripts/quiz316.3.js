
export const questions = [
  {
    question: "Which method is used to attach an event handler to an element?",
    choices: [
      "element.addEvent()",
      "element.attach()",
      "element.listen()",
      "element.addEventListener()"
    ],
    answer: "element.addEventListener()"
  },
  {
    question: "Which method is used to stop further bubbling or capturing of an event?",
    choices: [
      "event.halt()",
      "event.pause()",
      "event.stopPropagation()",
      "event.stop()"
    ],
    answer: "event.stopPropagation()"
  },
  {
    question: "In the context of an event handler, what provides information about the event, such as the type of event and the target element?",
    choices: [
      "event.data",
      "event.type",
      "event.info",
      "event.detail"
    ],
    answer: "event.type"
  },
  {
    question: "If you want to prevent a link from navigating to another page when clicked, which method would you use?",
    choices: [
      "event.prevent()",
      "event.preventDefault()",
      "event.haltDefault()",
      "event.stopNavigation()"
    ],
    answer: "event.preventDefault()"
  },
  {
    question: "Which property of the event object references the DOM element that initiated the event?",
    choices: [
      "event.initiator",
      "event.origin",
      "event.target",
      "event.source"
    ],
    answer: "event.target"
  },
  {
    question: "What advantage does event delegation offer when working with a list of similar elements? Select all that apply.",
    choices: [
      "Events will be able to handle more complex tasks.",
      "The ability to handle events from dynamic elements added later.",
      "Anonymous events that do not contain their event targets, for privacy.",
      "Faster performance by attaching events to a common ancestor element."
    ],
    answer: [
      "The ability to handle events from dynamic elements added later.",
      "Faster performance by attaching events to a common ancestor element."
    ]
  },
  {
    question: "Which event is fired when a key is first pressed down?",
    choices: [
      "keyInit",
      "keyPress",
      "keyStart",
      "keyDown"
    ],
    answer: "keyDown"
  },
  {
    question: "If you wanted to capture an event before it reaches its target element, during which phase should you add the event listener?",
    choices: [
      "Capture phase",
      "Target phase",
      "Bubble phase"
    ],
    answer: "Capture phase"
  }
];
