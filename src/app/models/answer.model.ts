export class Answer {
    interviewId:number;
    selectedAnswers: number[];
    timeAllowed: any;
    dateStarted: any;
    totalExercises: number;
    answeredExercises: number[];
    notAnswered: boolean;
    exerciseId: number;
    timeTaken: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
};