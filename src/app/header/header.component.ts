import { Component } from "@angular/core";

@Component({
    selector: 'header-content',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
    })
export class HeaderComponent
{
    isMobileNavVisible : boolean = false;
    toggleMobileNavVisible() {
        this.isMobileNavVisible = !this.isMobileNavVisible;
        }
}