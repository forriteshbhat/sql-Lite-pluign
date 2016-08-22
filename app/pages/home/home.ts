import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {Database} from "../../providers/database/database";
 
@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
 
    public itemList: Array<Object>;
 
    public constructor(private navController: NavController, private database: Database) {
        this.itemList = [];
    }
 
    public onPageDidEnter() {
        this.load();
    }
 
    public load() {
        this.database.getPeople().then((result) => {
            this.itemList = <Array<Object>> result;
        }, (error) => {
            console.log("ERROR: ", error);
        });
    }
 
    public create(firstname: string, lastname: string) {
        this.database.createPerson(firstname, lastname).then((result) => {
            this.load();
        }, (error) => {
            console.log("ERROR: ", error);
        });
    }
 
}