import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
  
  ///ActivatedRoute for reading from the route
  //Router for writing to the route
export class SearchComponent {
  searchTerm: string = '';

  constructor(private route: ActivatedRoute,private router:Router) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];

      }
    })

    
  }

  search(): void {
    if (this.searchTerm) {
        this.router.navigateByUrl('/search/'+this.searchTerm)
      }
  }
}
