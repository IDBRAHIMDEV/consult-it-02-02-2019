import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {
  
  myCourseFavorite = "Laravel";
  editable = false;

  myImage = "https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"; 
  
  courses = [
    {vote: {like: 100, dislike: 0}, id: 1, label: 'Angular', active: true},
    {vote: {like: 2, dislike: 0}, id: 2, label: 'JAVA EE', active: true},
    {vote: {like: 20, dislike: 11}, id: 3, label: 'Laravel', active: false},
    {vote: {like: 30, dislike: 10}, id: 1, label: 'Angular', active: true},
  ]


  myCourse = {
    id: this.courses.length + 1,
    label: "",
    active: false,
    vote: {
      like: 0,
      dislike: 0 
    }
  };

 

  constructor() { }
  
  addCourse() {
    this.courses.push(this.myCourse);
    this.myCourse = {
      id: this.courses.length + 1,
      label: "",
      active: false,
      vote: {
        like: 0,
        dislike: 0 
      }
    };
  }

  DeleteCourse(index) {
   this.courses.splice(index, 1);
  }

  editCourse(course) {
    this.myCourse = course
    this.editable = true;
  }

  updateCourse() {
    this.editable = false;
    this.myCourse = {
      id: this.courses.length + 1,
      label: "",
      active: false,
      vote: {
        like: 0,
        dislike: 0 
      }
    };
  }

  activeCourse(course) {
    course.active = !course.active
  }

  like(course) {
    course.vote.like++;
  }

  dislike(course) {
    course.vote.dislike++;
  }


  updateVoteInCourse(course, value) {
    if(value.type) {
      course.vote.like = value.data;
    }else {
      course.vote.dislike = value.data;
    }
  }

}
