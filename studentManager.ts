interface Student {
name: string;
rollNumber: number;
course: string;
phoneNumber?: string;
}
function printStudentDetails(student: Student): void{
    console.log("Student details:");
    console.log(`Name: ${student.name}`);
    console.log(`RollNumber: ${student.rollNumber}`);
    console.log(`Course: ${student.course}`);
    if(student.phoneNumber) console.log(`PhoneNumber: ${student.phoneNumber}`);
}

const student1: Student = { name: 'Riya', rollNumber: 101, course: 'TypeScript' };
const student2: Student = { name: 'Arjun', rollNumber: 102, course: 'Angular', phoneNumber: '9876543210' };
printStudentDetails(student1);
printStudentDetails(student2);
