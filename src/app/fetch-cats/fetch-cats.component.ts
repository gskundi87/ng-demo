import { Component, OnInit, OnDestroy} from '@angular/core';
import { apikey } from 'src/api-key';
import { HttpClient } from '@angular/common/http';
import { TestServiceService } from '../two/test/test-service.service';

interface voteObj {
  id: number;
  amount: number;
}

@Component({
  selector: 'app-fetch-cats',
  templateUrl: './fetch-cats.component.html',
  styleUrls: ['./fetch-cats.component.css']
})
export class FetchCatsComponent implements OnInit, OnDestroy{
  numCats : number = 0;
  catpics : any[] = [];
  now : number | Date = Date.now();

  // Dependency Injection
  // Instead of the component class itself instantiating the HttpClient class, we ask the framework to "inject" an instance (or a copy) of HttpClient
  // It's a design pattern for loose coupling
  // By setting httpClient private, we only allow this class to have access to it. If I were to set it public, the html page will also have access to that.
  constructor(private http: HttpClient, private testService: TestServiceService) {}

  vote(pic: any): void {
    console.log(pic);
  }

  voted(args: voteObj): void {
    const url = `https://api.thecatapi.com/v1/votes`;
    // object destructuring
    const {id, amount} = args;
    // the above line does the same thing as the below line
    // const id = args.id, amount = args.amount;
    const payload = {"image_id": id, "value": amount}

    this.http.post(url,
      payload,
      { 
      headers: {
        'x-api-key' : apikey
      }}).subscribe({
        next: (res)=> {
          // when the request is successful, handle it her
          console.log(res)
        },
        error: (err) => {
          // when the response returns 4/500 codes, handle it here
          console.error(err)
        }
      });
  }

  getCats() : void {
    // send an http call to fetch cats
    const url = `https://api.thecatapi.com/v1/images/search?limit=${this.numCats}`

    // assembling and sending the get request
    this.http.get(url, {
      headers: {
        'x-api-key' : apikey
      }
    }).subscribe((data: any) => {
      // httpClient returns an observable to handle asynchronous request
      this.catpics = data;
      // for(let index in data) {
      //   this.catpics.push(data[index])
      // }
      // console.log(this.catpics);
    })
  }

  incrementCats() : void {
    this.numCats++;
  }
  reset() : void {
    this.numCats = 0;
  }

  // angular lifecycle hooks
  // One of lifecycle hooks
  // When this component mounts/renders for the first time, run whatever code is in here
  // Great place to run any setup code you may have for this component
  ngOnInit(): void {
      console.log(apikey);
      this.testService.foo = "In Fetch Cats";
      console.log(this.testService.foo);
  }

  // Runs on unmount
  // Great place to do any clean ups
  ngOnDestroy(): void {
      
  }

}
