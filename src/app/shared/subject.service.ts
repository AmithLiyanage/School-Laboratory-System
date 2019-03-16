import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjectList: AngularFireList<any>;
  array = [];

  constructor(private firebase: AngularFireDatabase) { 
    this.subjectList = this.firebase.list('subjects');
    this.subjectList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val() //.. mean structuring of java script 
          };
        });
      }
    );
  }
}
