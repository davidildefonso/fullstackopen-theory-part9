import { CoursePart } from "./types"

export const courseParts: CoursePart[] = [
  {
	id:1,
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is the leisured course part",
    type: "normal"
  },
  {
	id:2,
    name: "Advanced",
    exerciseCount: 7,
    description: "This is the harded course part",
    type: "normal"
  },
  {
	id:3,
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    type: "groupProject"
  },
  {
	id:4,
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    type: "submission"
  },
  {
	id:5,
	name: "Backend development",
	exerciseCount: 21,
	description: "Typing the backend",
	requirements: ["nodejs", "jest"],
	type: "special"
}
]