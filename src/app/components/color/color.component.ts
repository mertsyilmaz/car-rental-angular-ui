import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  currentColor:Color;
  filterText:string;
  constructor(private colorService:ColorService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
    });
  }

  deleteColor(color:Color){
    this.colorService.delete(color).subscribe(response => {
      if(response.success){
        this.toastr.success(response.message,'', {timeOut: 1000})
         .onHidden
         .subscribe(() => this.getColors());
      }
    });
  }
}
