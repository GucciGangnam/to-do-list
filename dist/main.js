/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// imports

// libraries 
const projects = [];

// classes
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        
    }
}

class Task {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

////////////////// sample projects and tasks //////////////////
const sampleProject1 = new Project('Project 1');
const sampleProject2 = new Project('Project 2');
const sampleProject3 = new Project('Project 3');

const sampleTask1 = new Task('Task 1', 'This is task 1', '2024-01-01', 'important');
const sampleTask2 = new Task('Task 2', 'This is task 2', '2024-01-01', 'not important');
sampleProject1.tasks.push(sampleTask1);
sampleProject1.tasks.push(sampleTask2);
projects.push(sampleProject1);

const sampleTask3 = new Task('Task 3', 'This is task 3', '2024-01-01', 'important');
const sampleTask4 = new Task('Task 4', 'This is task 4', '2024-01-01', 'not important');
sampleProject2.tasks.push(sampleTask3);
sampleProject2.tasks.push(sampleTask4);
projects.push(sampleProject2);

const sampleTask5 = new Task('Task 5', 'This is task 5', '2024-01-01', 'important');
const sampleTask6 = new Task('Task 6', 'This is task 6', '2024-01-01', 'not important');
sampleProject3.tasks.push(sampleTask5);
sampleProject3.tasks.push(sampleTask6);
projects.push(sampleProject3);

// functions


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRzXG5cbi8vIGxpYnJhcmllcyBcbmNvbnN0IHByb2plY3RzID0gW107XG5cbi8vIGNsYXNzZXNcbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICBcbiAgICB9XG59XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLyBzYW1wbGUgcHJvamVjdHMgYW5kIHRhc2tzIC8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3Qgc2FtcGxlUHJvamVjdDEgPSBuZXcgUHJvamVjdCgnUHJvamVjdCAxJyk7XG5jb25zdCBzYW1wbGVQcm9qZWN0MiA9IG5ldyBQcm9qZWN0KCdQcm9qZWN0IDInKTtcbmNvbnN0IHNhbXBsZVByb2plY3QzID0gbmV3IFByb2plY3QoJ1Byb2plY3QgMycpO1xuXG5jb25zdCBzYW1wbGVUYXNrMSA9IG5ldyBUYXNrKCdUYXNrIDEnLCAnVGhpcyBpcyB0YXNrIDEnLCAnMjAyNC0wMS0wMScsICdpbXBvcnRhbnQnKTtcbmNvbnN0IHNhbXBsZVRhc2syID0gbmV3IFRhc2soJ1Rhc2sgMicsICdUaGlzIGlzIHRhc2sgMicsICcyMDI0LTAxLTAxJywgJ25vdCBpbXBvcnRhbnQnKTtcbnNhbXBsZVByb2plY3QxLnRhc2tzLnB1c2goc2FtcGxlVGFzazEpO1xuc2FtcGxlUHJvamVjdDEudGFza3MucHVzaChzYW1wbGVUYXNrMik7XG5wcm9qZWN0cy5wdXNoKHNhbXBsZVByb2plY3QxKTtcblxuY29uc3Qgc2FtcGxlVGFzazMgPSBuZXcgVGFzaygnVGFzayAzJywgJ1RoaXMgaXMgdGFzayAzJywgJzIwMjQtMDEtMDEnLCAnaW1wb3J0YW50Jyk7XG5jb25zdCBzYW1wbGVUYXNrNCA9IG5ldyBUYXNrKCdUYXNrIDQnLCAnVGhpcyBpcyB0YXNrIDQnLCAnMjAyNC0wMS0wMScsICdub3QgaW1wb3J0YW50Jyk7XG5zYW1wbGVQcm9qZWN0Mi50YXNrcy5wdXNoKHNhbXBsZVRhc2szKTtcbnNhbXBsZVByb2plY3QyLnRhc2tzLnB1c2goc2FtcGxlVGFzazQpO1xucHJvamVjdHMucHVzaChzYW1wbGVQcm9qZWN0Mik7XG5cbmNvbnN0IHNhbXBsZVRhc2s1ID0gbmV3IFRhc2soJ1Rhc2sgNScsICdUaGlzIGlzIHRhc2sgNScsICcyMDI0LTAxLTAxJywgJ2ltcG9ydGFudCcpO1xuY29uc3Qgc2FtcGxlVGFzazYgPSBuZXcgVGFzaygnVGFzayA2JywgJ1RoaXMgaXMgdGFzayA2JywgJzIwMjQtMDEtMDEnLCAnbm90IGltcG9ydGFudCcpO1xuc2FtcGxlUHJvamVjdDMudGFza3MucHVzaChzYW1wbGVUYXNrNSk7XG5zYW1wbGVQcm9qZWN0My50YXNrcy5wdXNoKHNhbXBsZVRhc2s2KTtcbnByb2plY3RzLnB1c2goc2FtcGxlUHJvamVjdDMpO1xuXG4vLyBmdW5jdGlvbnNcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9