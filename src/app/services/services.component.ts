import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  canGoTOAbout: boolean=true;
  constructor(private router:Router, private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  navigatePageToAbout(){
    if(this.canGoTOAbout){
      this.router.navigate(["/about",])
    }

  }

  Refreshpage(){
    console.log(this.activateRoute)

    this.router.navigate(['/about'],{relativeTo :this.activateRoute} )

  }

}
