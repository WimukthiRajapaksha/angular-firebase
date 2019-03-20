import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFireDatabase } from 'angularfire2/database';
import { ItemService } from 'src/app/items/items-service/item.service';
import { ItemPurchase } from '../itemPurchase.model';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class ItemComponent implements OnInit {

  @Input() itemTaken: any;
  private data: any;
  private newItemDetailsForm: FormGroup;
  public modalRef: NgbModalRef;
  public map: any;
  public users: any[];
  private newPurchase: ItemPurchase;
  public currentUser: String;

  lat: any;
  lng: any;

  title: String = 'My first AGM project';
  latitude: Number = 6.9271;
  longitude: Number = 79.8612;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private toastr: ToastrService,
    private db: AngularFireDatabase, private itemService: ItemService, private auth: AngularFireAuth) {
    config.backdrop = 'static';
    config.keyboard = false;
    if (navigator) {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }

    db.list('/users').valueChanges().subscribe(
      users => {
        this.users = users;
      }
    );
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
    this.data = this.itemTaken;
    this.newItemDetailsForm = new FormGroup({
      'cardNumber': new FormControl(),
      'expirationDate': new FormControl(),
      'cvv': new FormControl()
    });
  }

  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  onModalPopUp(content) {
    this.modalRef = this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  onCancel() {
    this.modalService.dismissAll();
    this.toastr.warning('Cancelled!', 'Cancelled that order.', { positionClass: 'toast-bottom-right'});
  }

  onSubmit() {
    this.modalService.dismissAll();
    this.toastr.success('Successfully Added!', 'Placed that order.', { positionClass: 'toast-bottom-right'});
    this.newPurchase = {
      latitude: this.lat,
      longitude: this.lng,
      id: this.data.id
    };

    this.auth.authState.subscribe((res) => {
      this.currentUser = res.email;
      this.db.list('/users').push({longitude: this.lng, latitude: this.lat, item: this.data.id, email: this.currentUser});
    });
    // this.itemService.addNewPurchase(this.newPurchase);
    // this.itemService.getAllPurchases().subscribe((res) => {
    //   console.log(res);
    // });
  }
}
