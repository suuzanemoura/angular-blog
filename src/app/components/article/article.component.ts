import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogData } from 'src/app/data/data';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
    private id:string | null = ''
    articleCategory:string = ''
    articleContent: any = ''
    articleDate:string = ''
    articlePhotoCover:string = ''
    articlePhotoCoverAlt:string = ''
    articleTitle:string = ''

    constructor(
      private route:ActivatedRoute
    ) { }

    ngOnInit(): void {

      this.route.paramMap.subscribe( value =>
        this.id = value.get("id")
       )
   
       this.setValuesToComponent(this.id)
     }
   
     setValuesToComponent(id:string | null){
       const result = blogData.filter(article => article.id == id)[0]
   
       this.articleTitle = result.title
       this.articleCategory = result.category
       this.articleDate = result.date
       this.articlePhotoCover = result.photoCover
       this.articlePhotoCoverAlt = result.photoCoverAlt
       this.articleContent = result.content
     }
      
}
