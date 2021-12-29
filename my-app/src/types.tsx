export interface Part {
  id: number,
  name: string,
  exerciseCount: number
}

export interface Props {
  courseParts: Array<Part>; 
}

export interface CoursePartBase {
  id: number,
  name: string;
  exerciseCount: number;
  type: string;
}

export interface Course {
  courseParts: Array<CoursePart>; 
}

export interface CourseDescriptionPart extends CoursePartBase {  
  description: string;
}


export interface CourseNormalPart extends CourseDescriptionPart {
  type: "normal";

}

export interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

export interface CourseSubmissionPart extends CourseDescriptionPart {
  type: "submission";
 
  exerciseSubmissionLink: string;
}

export interface CourseSpecialPart extends CourseDescriptionPart {
  type: "special"; 
  requirements: Array<string>,
}

export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseSpecialPart;

