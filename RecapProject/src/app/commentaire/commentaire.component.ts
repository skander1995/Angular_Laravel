import { Component, OnInit, Input } from '@angular/core';
import { CommentaireService } from './commentaire.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../Models/Post';


@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})  
export class CommentaireComponent implements OnInit {
  pp:Post;
  
  @Input() idpub: string;
  erreur: string = "";
  constructor(private service:CommentaireService,private postservice:PostService,private router:ActivatedRoute) { 
    this.router.params.subscribe(params => {
      this.idpub = params.id;
    });
    
    
  }

  ngOnInit() {
    this.getpost(this.idpub);
    
  }
  getpost(id)
  {
    this.postservice.getOnePost(this.idpub).subscribe(data =>{this.pp=data;
   
    });
  }
create(body)
{
  if(body.value)
  {
    const fromdata=new FormData();
    //console.log(fromdata);
    fromdata.append('id_pub',this.idpub);
    fromdata.append('body',body.value);
    this.service.addCom(fromdata).subscribe();
    this.getpost(this.idpub);
  }

}

}
