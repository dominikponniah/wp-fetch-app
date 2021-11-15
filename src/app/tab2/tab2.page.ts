import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  events: any = undefined;

  constructor(
    private alertController: AlertController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getEvents().subscribe(subscriptionData => {
      this.events = subscriptionData;
    });
  }

  importToCalendar() {
    window.open('https://www.kirche-unterseen.ch/veranstaltungen/kategorie/veranstaltungskalender/liste/?ical=1&tribe_display=list');
  }

  async showEventDetails(event) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: event.title,
      message: event.description + '<br><b>'
        + event.start_date_details.day + '.' + event.start_date_details.month + '.' + event.start_date_details.year + ' (' + event.start_date_details.hour + ':'
        + event.start_date_details.minutes + ') <br>bis<br> '
        + event.end_date_details.day + '.' + event.end_date_details.month + '.' + event.end_date_details.year +
        ' (' + event.end_date_details.hour + ':' + event.end_date_details.minutes + ')</b><br>',
      buttons: [
        {

          text: 'Schliessen',
          handler: () => {
            // Do nothing;
          }
        }
      ]
    });

    await alert.present();
  }


  async showEventRoute(event) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Standortinformation',
      message: 'Diese Veranstaltung findet an folgendem Standort statt: <b>' + event.venue.venue + ' (' + event.venue.city + ')</b>',
      buttons: [
        {
          text: 'Wegbeschreibung',
          cssClass: 'secondary',
          handler: () => {
            window.open('http://maps.apple.com/?daddr=' + event.venue.address + ',' + event.venue.city + ',' + event.venue.country + '&dirflg=d&t=h');
          }

        }, {
          text: 'Schliessen',
          handler: () => {
            // Do nothing;
          }
        }
      ]
    });

    await alert.present();
  }

}
