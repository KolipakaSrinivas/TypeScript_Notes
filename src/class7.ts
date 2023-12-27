// Utility Types

// 1. partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified: boolean;
}

const updateAssignemnt = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "sri",
  title: "maths",
  grade: 7,
  verified: false
};

console.log(updateAssignemnt(assign1, { verified: true }));

// Requried and readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVerified = (assign: Readonly<Assignment>): Assignment => {
  return assign;
};
